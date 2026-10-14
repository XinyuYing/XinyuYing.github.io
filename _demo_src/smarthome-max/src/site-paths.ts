export const SITE_BASE = typeof import.meta.env === 'undefined' ? '/' : import.meta.env.BASE_URL;
export function sitePath(path:string,base=SITE_BASE):string{
 if(/^(?:[a-z]+:)?\/\//i.test(path))return path;
 const prefix=base.replace(/\/+$/,'');
 if(prefix&&(path===prefix||path.startsWith(prefix+'/')))return path;
 return prefix+'/'+path.replace(/^\/+/,'');
}
export function siteLocalPath(pathname:string,base=SITE_BASE):string{
 const prefix=base.replace(/\/+$/,'');
 if(!prefix)return pathname;
 if(pathname===prefix)return '/';
 return pathname.startsWith(prefix+'/')?pathname.slice(prefix.length):pathname;
}
