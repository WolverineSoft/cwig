var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function plugNS(){var b=1;var o=0;var p=new Array("Shockwave Flash","Shockwave for Director","RealPlayer","QuickTime","VivoActive","LiveAudio","VRML","Dynamic HTML Binding","Windows Media Services");var np=navigator.plugins;for(var x=0;x<p.length;x++){for(var i=0;i<np.length;i++)if(np[i].name.indexOf(p[x])>=0)o|=b;b*=2;}return o;}function plugIE(){if(!document.body)document.write('<body>');var db=document.body;var o=0;var b=1;var p=new Array("D27CDB6E-AE6D-11CF-96B8-444553540000","2A202491-F00D-11CF-87CC-0020AFEECF20","23064720-C4F8-11D1-994D-00C04F98BBC9","","","","90A7533D-88FE-11D0-9DBE-0000C0411FC3","9381D8F2-0288-11D0-9501-00AA00B911A5","22D6F312-B0F6-11D0-94AB-0080C74C7E95"
);db.addBehavior("#default#clientcaps");for(var i=0;i<p.length;i++){if(p[i])if(db.isComponentInstalled("{"+p[i]+"}","componentid"))o|=b;b*=2;}return o;}function nedstatbasic(id,options){var n=navigator;var ver=n.appVersion;var name=n.appName;var d=document;var verIE=parseInt(ver.substring(ver.indexOf("MSIE")+5,ver.indexOf("MSIE")+6));if(verIE>0)ver=verIE;else ver=parseInt(ver);var u="https://web.archive.org/web/20030401095129/http://m1.nedstatbasic.net/n?id="+id;var r;if(options&1)r=d.referrer;else r=top.document.referrer;if(!(options&2)){var rc=r;var i=rc.indexOf('?');if(i >=0)rc=rc.substring(0, i);i=rc.lastIndexOf('/');if(i >=0)rc=rc.substring(0, i+1);var l=''+d.location;if(l.indexOf(rc)==0)r='';}if(r&&(r!=d.location))u+="&r="+escape(r);if((name=="Netscape"&&ver>=3))u+="&p="+plugNS();if(verIE>=5&&n.appVersion.indexOf('Win')>=0&&n.userAgent.indexOf('Opera')<0)u+="&p="+plugIE();if(ver>=4){var s=screen;var w=s.width;var c=s.colorDepth;if(w)u+="&w="+w;if(c)u+="&c="+c;}d.write('<a target=_blank href="https://web.archive.org/web/20030401095129/http://v1.nedstatbasic.net/stats?'+id+'"><img src="'+u+'" border=0 width=18 height=18 alt="Nedstat Basic - Free web site statistics"></a>');}

}
/*
     FILE ARCHIVED ON 09:51:29 Apr 01, 2003 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 01:09:45 Jan 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.68
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.013
  esindex: 0.013
  cdx.remote: 7.35
  LoadShardBlock: 368.802 (6)
  PetaboxLoader3.datanode: 249.864 (7)
  PetaboxLoader3.resolve: 262.861 (2)
  load_resource: 181.295
*/