package update

import (
	"bufio"
	"context"
	"errors"
	"io"
	"math"
	"net/http"
	"os"
	"path"
	"slack-wails/lib/clients"
	"slack-wails/lib/util"
	"time"

	"github.com/minio/selfupdate"
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

const lastestPocUrl = "https://gitee.com/the-temperature-is-too-low/slack-poc/releases/download/"

// https://gitee.com/the-temperature-is-too-low/slack-poc/releases/download/v0.0.2/afrog-pocs.zip
func UpdatePoc(configPath string) error {
	if err := os.RemoveAll(configPath + "config"); err != nil {
		return err
	}
	time.Sleep(time.Second * 2)
	if !InitConfig(configPath) {
		return errors.New("update poc failed")
	}
	return nil
}

func download(target, dest string) (string, error) {
	fileName := path.Base(target)
	res, err := http.Get(target)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()
	// 获得get请求响应的reader对象
	reader := bufio.NewReaderSize(res.Body, 32*1024)
	file, err := os.Create(dest + fileName)
	if err != nil {
		return "", err
	}
	//获得文件的writer对象
	writer := bufio.NewWriter(file)
	io.Copy(writer, reader)
	return fileName, nil
}

func UpdateClientWithoutProgress(url string) error {
	resp, err := http.Get(url)
	if err != nil {
		return err
	}
	defer resp.Body.Close()
	return selfupdate.Apply(resp.Body, selfupdate.Options{})
}

func NewDownload(ctx context.Context, target, dest, events string) (string, error) {
	fileName := path.Base(target)
	res, err := http.Get(target)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	totalSize := res.ContentLength
	downloadedSize := int64(0)

	reader := bufio.NewReaderSize(res.Body, 32*1024)
	file, err := os.Create(dest + fileName)
	if err != nil {
		return "", err
	}
	defer file.Close()

	writer := bufio.NewWriter(file)
	buf := make([]byte, 32*1024)
	for {
		n, err := reader.Read(buf)
		if n > 0 {
			writer.Write(buf[:n])
			downloadedSize += int64(n)
			progress := float64(downloadedSize) / float64(totalSize) * 100
			roundedProgress := roundToTwoDecimals(progress)
			runtime.EventsEmit(ctx, events, roundedProgress)
		}
		if err != nil {
			if err == io.EOF {
				break
			}
			return "", err
		}
	}
	writer.Flush()
	return fileName, nil
}

func roundToTwoDecimals(value float64) float64 {
	return math.Round(value*100) / 100
}

func InitConfig(configPath string) bool {
	var defaultFile = util.HomeDir() + "/slack/"
	os.MkdirAll(configPath, 0777)
	const latestConfigVersion = "https://gitee.com/the-temperature-is-too-low/slack-poc/raw/master/version"
	_, b, err := clients.NewSimpleGetRequest(latestConfigVersion, http.DefaultClient)
	if err != nil {
		return false
	}
	configFileZip := lastestPocUrl + "v" + string(b) + "/config.zip"
	fileName, err := download(configFileZip, defaultFile)
	if err != nil {
		return false
	}
	uz := util.NewUnzip()
	if _, err := uz.Extract(defaultFile+fileName, configPath); err != nil {
		return false
	}
	os.Remove(util.HomeDir() + "/slack/config.zip")
	return true
}
