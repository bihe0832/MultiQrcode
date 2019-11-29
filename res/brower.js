/* code@bihe832.com */
var ZixieJS = {};
ZixieJS.browser={};
//设备定义
ZixieJS.browser.devices={
  ipad:"ipad",
  iphone:"iphone",
  midp:"midp",
  android:"android",
  winCE:"winCE",
  winPhone:"winPhone",
  unknow:"unknow"
};
//操作系统定义
ZixieJS.browser.OS={
  Mac:"Mac",
  Unix:"Unix",
  Linux:"Linux",
  Win:"Win",
  Win2000:"Win2000",
  WinXP:"WinXP",
  Win2003:"Win2003",
  WinVista:"WinVista",
  Win7:"Win7",
  Win8:"Win8",
  Win10:"Win10",
  unknow:"unknow"
};
//特殊app定义
ZixieJS.browser.app={
  unknow:"unknow",
  uc7:"uc7",
  ucweb:"ucweb",
  wechat:"wechat",
  baidubrowser:"baidubrowser",
  qqbrowser:"qqbrowser",
  weibo:"weibo",
  alipay:"alipay",
  chrome:"chrome"
}

/**
 *功  能：判断平台是不是PC
 *参  数：无
 *返回值：是否为PC设备
 */
ZixieJS.browser.isPc=function(){
  var system ={
  		win : false,
  		mac : false,
  		xll : false
  	};
  	var p = navigator.platform;
  	system.win = p.indexOf("Win") == 0;
  	system.mac = p.indexOf("Mac") == 0;
  	system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
  	if(!(system.win||system.mac||system.xll)){
  		return false;
  	}else{
      return true;
    }
}

/**
 *功  能：判断设备类型
 *参  数：无
 *返回值：ZixieJS.browser.devices
 */
ZixieJS.browser.getDevices=function(){
  //判断访问设备(userAgent)
  var sUserAgent = navigator.userAgent.toLowerCase();
  if(sUserAgent.match(/ipad/i) == "ipad"){
    return ZixieJS.browser.devices.ipad;
  }else if(sUserAgent.match(/iphone os/i) == "iphone os"){
    return ZixieJS.browser.devices.iphone;
  }else if(sUserAgent.match(/midp/i) == "midp"){
    return ZixieJS.browser.devices.midp;
  }else if(sUserAgent.match(/android/i) == "android"){
    return ZixieJS.browser.devices.android;
  }else if(sUserAgent.match(/windows ce/i) == "windows ce"){
    return ZixieJS.browser.devices.winCE;
  }else if(sUserAgent.match(/windows mobile/i) == "windows mobile"){
    return ZixieJS.browser.devices.winPhone;
  }else{
    return ZixieJS.browser.devices.unknow;
  }
}

/**
 *功  能：判断是否为超级app
 *参  数：无
 *返回值：ZixieJS.browser.app
 */
ZixieJS.browser.getSuperAPP=function(){
  //判断访问设备(userAgent)
  var sUserAgent = navigator.userAgent.toLowerCase();
  if(sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"){
    return ZixieJS.browser.app.uc7;
  }else if(sUserAgent.match(/ucweb/i) == "ucweb"){
    return ZixieJS.browser.app.ucweb;
  }else if(sUserAgent.match(/MicroMessenger/i) == 'micromessenger'){
    return ZixieJS.browser.app.wechat;
  }else if(sUserAgent.match(/baidubrowser/i) == 'baidubrowser'){
    return ZixieJS.browser.app.baidu;
  }else if(sUserAgent.match(/MQQBrowser/i) == 'MQQBrowser'){
    return ZixieJS.browser.app.qqbrowser;
  }else if(sUserAgent.match(/weibo/i) == 'weibo'){
    return ZixieJS.browser.app.weibo;
  }else if(sUserAgent.match(/Alipay/i) == 'Alipay'){
    return ZixieJS.browser.app.alipay;
  }else if(sUserAgent.match(/Chrome/i) == 'Chrome' || sUserAgent.match(/Chrome/i) == 'CriOS'){
    return ZixieJS.browser.app.chrome;
  }else{
    return ZixieJS.browser.app.unknow;
  }
}

/**
 *功  能：获取具体的PC 操作系统类型和版本号
 *参  数：无
 *返回值：ZixieJS.browser.OS
 */
ZixieJS.browser.getOSDetail=function(){
  // 客户端操作系统
  var sUserAgent = navigator.userAgent;
  var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel"); if (isMac)
  if (isMac) return ZixieJS.browser.OS.Mac;
  var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
  if (isUnix) return ZixieJS.browser.OS.Unix;
  var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
  if (isLinux) return ZixieJS.browser.OS.Linux;
  var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
  if (isWin) {
    var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
    if (isWin2K) return ZixieJS.browser.OS.Win2000;
    var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
    if (isWinXP) return ZixieJS.browser.OS.WinXP;
    var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
    if (isWin2003) return ZixieJS.browser.OS.Win2003;
    var isWinVista = sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
    if (isWinVista) return ZixieJS.browser.OS.WinVista;
    var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
    if (isWin7) return ZixieJS.browser.OS.Win7;
    var isWin8 = sUserAgent.indexOf("Windows NT 6.3") > -1 || sUserAgent.indexOf("Windows 7") > -1;
    if (isWin8) return ZixieJS.browser.OS.Win8;
    var isWin10 = sUserAgent.indexOf("Windows NT 10.0") > -1 || sUserAgent.indexOf("Windows 10") > -1;
    if (isWin10) return ZixieJS.browser.OS.Win10;

  }
}

/**
 *功  能：获取PC系统类型
 *参  数：无
 *返回值：ZixieJS.browser.OS
 */
ZixieJS.browser.getOS=function(){
  // 客户端操作系统
  var sUserAgent = navigator.userAgent;
  var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel"); if (isMac)
  if (isMac) return ZixieJS.browser.OS.Mac;
  var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
  if (isUnix) return ZixieJS.browser.OS.Unix;
  var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
  if (isLinux) return ZixieJS.browser.OS.Linux;
  var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
  if (isWin) return ZixieJS.browser.OS.Win;
  return ZixieJS.browser.OS.unknow;
}
