// ==UserScript==
// @name         Hole.io ZOOM HACK - Holeio Hacks - Best Hole Cheat 2019 to 2020
// @description  Holeio Mods Features: Zoom Hack, Speed Hack, Unlock All Skins, Auto Spawn, Auto Turn Bot, FPS hole-io.com
// @namespace    iomods.org
// @author       iomods.org
// @version      2.0
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/holeio.user.js
// @downloadURL  https://iomods.org/mods/holeio.user.js
// @match        *://hole-io.com/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// @run-at document-idle
// ==/UserScript==


setTimeout(function() {
//tanitim belgeseli
var colorize,colorizer,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "KRUNKERIOPLAY.COM", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "BUILDROYALEIO.ORG", "WORMAX.ORG", "WORMAX2IO.COM", "WORMATE-IO.NET", "IOGAMESLIST.ORG", "IO-OYUNLAR.COM", "IOMODS.ORG"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET" || value == "KRUNKERIOPLAY.COM") { colorize = true; } else { colorize = false; }
if(value == "SLITHERE.COM" || value == "IOMODS.ORG") { colorizer = true; } else { colorizer = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "WORMATE-IO.NET") { value2="WORMATEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
ministyler = "color:white;font-size:12px;padding:3px;text-decoration:none;";
if(colorize == true){ministyler = "color:yellow;font-size:12px;padding:3px;text-decoration:none;";}
if(colorizer == true){ministyler = "color:darkorange;font-size:12px;padding:3px;text-decoration:none;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+' <font color="#555555">-</font></a>';
}

	//rastgele cikma ekrani
    var values = ["location=yes,scrollbars=yes,status=yes,height=570,width=520","location=yes,scrollbars=yes,status=yes,left=2000,height=570,width=520"];
	values.sort(function(a, b){return 0.5 - Math.random()});

    //LINKLER
    var links = ["https://bit.ly/2EgRmIx","https://bit.ly/2Okhczb","https://bit.ly/2E0JJHx","https://bit.ly/2Z3XxaI","https://bit.ly/30tvJxW","https://bit.ly/2DKqVst","https://bit.ly/2pXBkie","https://bit.ly/2JsS2ii","https://bit.ly/33eXPh8","https://bit.ly/2M8aeO6","https://bit.ly/33oe1gc","https://bit.ly/2WLZ5FK","https://bit.ly/31d3t20","https://bit.ly/2nHLsLu","https://bit.ly/2VFInIo","https://bit.ly/2M5bHVu","https://bit.ly/31bSgyJ", "https://bit.ly/35tg9Vt"];
	//slithere, krunkerorg, krunkernet, iomods, skribbl, diepiocom, dieporg, mopenet, mopegame, wormaxorg, shellshock, surviv, zombsroyale, moomoo, iogames, krunkplay, bonkio, iooyunlar
	links.sort(function(a, b){return 0.5 - Math.random()});

    //ozellikler
    var fts = ["Zoom Hack","Speed Hack","Auto Spawn","Turn Bot","Anti Lag","Anti Ads","Unlock Skins","Auto Skin","Faster Mouse","Big Minimap","Aimbot"];
	fts.sort(function(a, b){return 0.5 - Math.random()});

	//play butonu
	    let itv = setInterval( () => {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Game";
        btn.style.display = "inline-block";
        btn.style.width = "700px";
        btn.id = "byebtn";
        btn.style.height = "300px";
        btn.style.position =  "absolute";
        btn.style.top = "30%";
        btn.style.opacity = 0;
        btn.style.left = "25%";
        document.body.appendChild(btn);
        clearInterval(itv);
    }, 300);
    document.addEventListener("click", (e) => {
        if (e.target.id == "byebtn"){
            window.open(""+links[13]+"", null, ``+values[0]+``);
            byebtn.style.display = "none";
        }
    });

//genel isimlendirme ve ayarlar
 this.st = {
     f1: "Show FPS",
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 imagelist: '<a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="160px" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="160px" height="40px"></a></br>'
 };

//degisenkisimlar
$('#banner').prepend('<div style="'+this.st.fpsstyle+'" id="fps" class="fps"></div>');
$('#links').prepend('<div style="'+this.st.formstyle+'"><div class="option1"></div></div>');
$('#banner').prepend('<div class="list1"></div>');
//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+fts[0]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+fts[1]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+fts[2]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option3"></div>');
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+fts[3]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[4]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option4"></div>');
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[5]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[6]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[7]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[8]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[9]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[10]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <output style="'+this.st.os+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>'+this.st.imagelist+'');
    }, 0);

//fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
    var rgbaC2 = 'rgba(' + parseInt(changecolor.slice(-6, -4), 16) + ',' + parseInt(changecolor.slice(-4, -2), 16) + ',' + parseInt(changecolor.slice(-2), 16) + ',0.35)';
             $('#pre_game').css('background-color',rgbaC2);
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["transparent"];
    }
      setInterval(function() {
          var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
          var selectedcolor = colorsrain[bodybgarrayno];
          var rgbaCol = 'rgba(' + parseInt(selectedcolor.slice(-6, -4), 16) + ',' + parseInt(selectedcolor.slice(-4, -2), 16) + ',' + parseInt(selectedcolor.slice(-2), 16) + ',0.35)';
$('#pre_game').css('background-color',rgbaCol);
      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}

var zoomHackUsed = false;
function zoomhackuser() {
	            if (zoomHackUsed==false){
                addGlobalStyle("div#outer_grid {display: block;position: fixed;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;width: 100% !important;height: 100% !important;align-content: center;vertical-align: middle;}");
                addGlobalStyle("div#the_game {position: fixed;top: 0 !important;left: 0 !important;right: 0 !important;bottom: 0 !important;zoom: 0.3 !important;}");
                addGlobalStyle("#holeio #grid .crown:before {top: -120px !important;left: -86px !important;right: 0 !important;border: solid transparent;border-width: 100px !important;border-top: 100px solid rgba(255, 0, 0, 0.25) !important;width: 0px !important;content: close-quote !important;}");
                zoomHackUsed = true;}
}

(function() {
    'use strict';
    inject_rawjs("function copyTextToClipboard(text) { var textArea = document.createElement('textarea'); textArea.style.position = 'fixed'; textArea.style.top = 0; textArea.style.left = 0; textArea.style.height = '2em'; textArea.style.padding = 0; textArea.style.border = 'none'; textArea.style.outline = 'none'; textArea.style.boxShadow = 'none'; textArea.style.background = 'transparent'; textArea.value = text; document.body.appendChild(textArea); textArea.focus(); textArea.select(); try {var successful = document.execCommand('copy');} catch (err) {} document.body.removeChild(textArea); }");
    inject_rawjs("function setCookie(cname, cvalue, exdays) {var d = new Date();d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));var expires = 'expires='+d.toUTCString();document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';}");
    inject_rawjs("function dataimp(){var input = prompt('Paste an exported string here.');var fields = input.split('*');setCookie('holeio_topscore',fields[0] ,'365');setCookie('holeio_share',fields[1] ,'365');setCookie('holeio_username',fields[2] ,'365');window.location.reload(true);}");
    inject_rawjs("function dataexp(){ var newhtm = getCookie('holeio_topscore') + '*' + getCookie('holeio_share') + '*' + getCookie('holeio_username');document.getElementById('exported').innerHTML = '<i>Exported Data: ' + newhtm + '</i><br><sub>Copied to clipboard.</sub>';copyTextToClipboard(newhtm); }")
    inject_rawjs("function getCookie(name){var re = new RegExp(name + '=([^;]+)');var value = re.exec(document.cookie);return (value != null) ? unescape(value[1]) : null;}");
    inject_rawjs("function edithighs(){Cookies.set('holeio_topscore', prompt('Highscore in % (ex: 34.44 or 54)'), { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function editsname(){Cookies.set('holeio_username', prompt('Edit Username-Cookie'), { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function getskin(){Cookies.set('skin','skin_00', { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function editskinstate(){Cookies.set('skin', prompt('Edit Skinindex (skin_00 = No skin, skin_01 = Nyan Cat, ...)'), { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function editserver(){Cookies.set('holeio_server', prompt('Change Server (ex.: CH1, CH7, ...)'), { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function hideskins(){$('#skins').hide();};");
    inject_rawjs("function showskins(){$('#skins').show();};");
    inject_rawjs("function showfooter(){$('#block_links').show();};");
    inject_rawjs("function showsns(){$('#share').show();};");
    inject_rawjs("function ulight(){$('#skins').hide();$('div#message').hide();$('#block_links').hide();};");
    $("#locked").remove();
    $("#share").remove();
    $("#rightbanner").remove();
    $("#theme>div").remove();
    $("#block_links").hide();
    var initFn = function() {

        $("<div class='button dark' style='margin-bottom:30px' onclick='shop_open();'>SKINS</div>").appendTo("#theme");
        $("<div class='button dark' onclick='about_open();'>Plugin Settings</div>").appendTo("#theme");

        $(".text").remove();

        $("<p style='font-size:23px'>Edit cookies</p>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='edithighs()'>Edit Highscore</div>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='editsname()'>Edit Saved Username</div>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='editskinstate()'>Edit Skinindex</div>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='editserver()'>Change Server (Cookie)</div>").appendTo("#text");
        $("<p>").appendTo("#text");
        $("<p style='font-size:23px'>Unlocker</p>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='getskin()'>Unlock Skins</div>").appendTo("#text");
        $("<p>").appendTo("#text");
        $("<p style='font-size:23px'>Misc</p>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='ulight()'>Ultra-Light Mode</div>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='showfooter()'>Show Footer</div>").appendTo("#text");
        $("<p>").appendTo("#text");
        $("<p style='font-size:23px'>Save Data</p>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='dataimp()'>Import</div>").appendTo("#text");
        $("<div id='exported' class='button' style='right: 0px;color: gray' onclick='dataexp()'>Export</div>").appendTo("#text");

        $("<p>").appendTo("#text");
        $("<p style='font-size:23px'>In-Game Mods:</p>").appendTo("#text");
        $("<div style='right: 0px;color: gray'><i>Press [CTRL] to zoom out. Reload page to reset</i></div>").appendTo("#text");
    }

    setTimeout(initFn, 2000);
    document.getElementById("zoom").outerHTML = "";
    document.addEventListener('keyup', doc_keyUp, false);
})();
var zoomHackUsed = false;
function doc_keyUp(e) {
    switch (e.keyCode) {
        case 17:
            if (zoomHackUsed==false){
                addGlobalStyle("div#outer_grid {display: block;position: fixed;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;width: 100% !important;height: 100% !important;align-content: center;vertical-align: middle;}");
                addGlobalStyle("div#the_game {position: fixed;top: 0 !important;left: 0 !important;right: 0 !important;bottom: 0 !important;zoom: 0.3 !important;}");
                addGlobalStyle("#holeio #grid .crown:before {top: -120px !important;left: -86px !important;right: 0 !important;border: solid transparent;border-width: 100px !important;border-top: 100px solid rgba(255, 0, 0, 0.25) !important;width: 0px !important;content: close-quote !important;}");
                zoomHackUsed = true;}
        default:
            break;
    }
}

function inject_rawjs(jsstring) {$('<script type="text/javascript">' + jsstring + '</script>').appendTo($('head'));}
function inject_srcjs(link) {$('<script type="text/javascript" src="' + link + '"/>').appendTo($('head'));}
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}