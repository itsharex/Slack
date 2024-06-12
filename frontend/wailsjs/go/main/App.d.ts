// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {clients} from '../models';
import {main} from '../models';
import {space} from '../models';
import {jsfind} from '../models';

export function ActiveFingerScan(arg1:Array<string>,arg2:clients.Proxy):Promise<void>;

export function AssetHunter(arg1:number,arg2:string,arg3:string):Promise<main.HunterSearch>;

export function Callgologger(arg1:string,arg2:string):Promise<void>;

export function CheckCdn(arg1:string):Promise<string>;

export function CheckTarget(arg1:string,arg2:clients.Proxy):Promise<main.AliveTarget>;

export function CyberChefLocalServer():Promise<void>;

export function DomainInfo(arg1:string):Promise<string>;

export function DownloadCyberChef(arg1:string):Promise<void>;

export function ExtractIP(arg1:string):Promise<string>;

export function FingerLength():Promise<number>;

export function FingerScan(arg1:Array<string>,arg2:clients.Proxy):Promise<void>;

export function FofaSearch(arg1:string,arg2:string,arg3:string,arg4:string,arg5:string,arg6:string,arg7:boolean,arg8:boolean):Promise<space.FofaSearchResult>;

export function FofaTips(arg1:string):Promise<space.TipsResult>;

export function Fscan2Txt(arg1:string):Promise<string>;

export function GoFetch(arg1:string,arg2:string,arg3:string,arg4:Array<{[key: string]: string}>,arg5:number,arg6:clients.Proxy):Promise<main.Response>;

export function HostAlive(arg1:Array<string>,arg2:boolean):Promise<Array<string>>;

export function HunterSearch(arg1:string,arg2:string,arg3:string,arg4:string,arg5:string,arg6:string,arg7:boolean):Promise<space.HunterResult>;

export function HunterTips(arg1:string):Promise<space.HunterTipsResult>;

export function IPParse(arg1:Array<string>):Promise<Array<string>>;

export function IconHash(arg1:string):Promise<string>;

export function InitIPResolved():Promise<void>;

export function InitRule():Promise<boolean>;

export function InitTycHeader(arg1:string):Promise<void>;

export function IsHighRisk(arg1:string):Promise<boolean>;

export function IsRoot():Promise<boolean>;

export function JSFind(arg1:string,arg2:string):Promise<jsfind.FindSomething>;

export function LoadDirsearchDict(arg1:string,arg2:Array<string>):Promise<Array<string>>;

export function LoadSubDict(arg1:string):Promise<Array<string>>;

export function NewCorrespondsScan(arg1:Array<string>,arg2:number):Promise<void>;

export function NewSynScanner(arg1:Array<string>,arg2:Array<number>):Promise<void>;

export function NewTcpScanner(arg1:Array<string>,arg2:Array<number>,arg3:number,arg4:number):Promise<void>;

export function NucleiEnabled(arg1:string):Promise<boolean>;

export function NucleiScanner(arg1:number,arg2:string,arg3:Array<string>,arg4:string,arg5:boolean,arg6:string,arg7:string):Promise<void>;

export function PathRequest(arg1:string,arg2:string,arg3:number,arg4:string,arg5:boolean,arg6:string):Promise<main.PathData>;

export function PortBrute(arg1:string,arg2:Array<string>,arg3:Array<string>):Promise<void>;

export function PortParse(arg1:string):Promise<Array<number>>;

export function Sock5Connect(arg1:string,arg2:number,arg3:number,arg4:string,arg5:string):Promise<boolean>;

export function StopPortScan():Promise<void>;

export function Subdomain(arg1:string,arg2:number):Promise<Array<string>>;

export function SubsidiariesAndDomains(arg1:string,arg2:number):Promise<main.TycAssetResult>;

export function System(arg1:string,arg2:number):Promise<Array<any>>;

export function ThinkDict(arg1:string,arg2:string,arg3:string,arg4:string,arg5:string,arg6:string,arg7:string,arg8:Array<string>):Promise<Array<string>>;

export function UseDruid(arg1:string,arg2:number,arg3:clients.Proxy):Promise<Array<string>>;

export function WebIconMd5(arg1:string):Promise<string>;

export function WebPocLength():Promise<number>;

export function WechatOfficial(arg1:string):Promise<main.WechatAssetResult>;
