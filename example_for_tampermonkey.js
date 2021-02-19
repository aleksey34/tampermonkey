// exemple of script for tampermonkey 


//---------------------------------------------
//  change page translate google  to  site


// ==UserScript==
// @name         away-from-translate-google-to-site
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://translate.google.com/*
// @grant        none
// ==/UserScript==

(function() {

setInterval(function(){
 var url = document.getElementById("gbqfq").value;
    if(url !==''){location.href=url;}
}, 10000);



})();

// ----------------------------------------------------

// google
//--------------------------------------

// ==UserScript==
// @name         google
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
 var btnK=document.getElementsByName("btnK");
var page = 0;
    document.cookie = 'page='+0;

    // возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


    var linkList = document.getElementsByTagName('a');
    if(btnK.length > 0 ){
var searchArr=[
              ['xn----7sbab5aqcbiddtdj1e1g.xn--p1ai' ,'Гобой','Как звучит гобой','Кларнет','Валторна'],
              ['nightbeat.ru','шоу барабанщиков' , 'шоу барабанщиков москва' , 'Барабанное шоу'],
              [ 'crushdrummers.ru' , 'Барабанное шоу']
              ];
 var siteArr= searchArr[Math.floor( Math.random()*searchArr.length)];
      
         var site =siteArr.shift();

 var searchWord = siteArr[Math.floor( Math.random()*siteArr.length)];

var googleSearchInput = document.querySelector(".gLFyf.gsfi");
if(googleSearchInput != 'undefined') { googleSearchInput.value = searchWord;}
document.cookie="site="+site;

        page = Number(page) +1;
        document.cookie = 'page='+page;

btnK[0].click();
    }



for(let i = 0 ; i< linkList.length; i++){
if((linkList[i].href.indexOf(getCookie('site')) != -1&&linkList[i].href.indexOf('webmaster') == -1) ){

    linkList[i].click();

      }
    }



if(page<4){
/* page = Number(getCookie('page'));*/
        setTimeout(function(){
             page = Number(page) +1;
            document.cookie = 'page='+page;
            document.getElementById("pnnext").click();
        } , 5000);

}else{
 location.href = "https://yandex.ru";
}



})();
//-------------------------------------------

// sites for serfing
//--------------------------------------------

// ==UserScript==
// @name         site_inner
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match       https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/*
// @match       http://crushdrummers.ru/*
// @match        https://www.nightbeat.ru/*
// @grant        none
// ==/UserScript==

(function() {

var linkList = document.getElementsByTagName('a');

var num= Math.floor(Math.random()*10);
    var url;

if(num == 0) {location.href = 'https://www.google.com' }
if(num == 1) {location.href ='https://yandex.ru' }



    setInterval(function(){
       url= linkList[Math.floor(Math.random()*linkList.length)];

        if(url.href.indexOf(location.hostname) !== -1 ){
           url.click();
           }
        /*else{
           location.href = 'https://xn----7sbab5aqcbiddtdj1e1g.xn--p1ai/' ;
           }*/


    } , Math.random()*5000);


    setTimeout(function(){
        var flag= Math.floor(Math.random()*2);
        if(flag == 0){
             location.href = 'https://www.google.com';
        }else{
            location.href = 'https://yandex.ru';
        }

    }, 10*60*1000);


})();



//----------------------------------------------------

// yandex 
//-------------------------------------------------

// ==UserScript==
// @name         yandex
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

(function() {

    var btnK=document.getElementsByClassName("button_theme_websearch");
var page = 0;
    document.cookie='page='+0;

    // возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


    var linkList = document.querySelectorAll('a + span.path__separator + a.link_theme_outer.path__item');

    if(btnK.length > 0 ){
var searchArr=[
              ['xn----7sbab5aqcbiddtdj1e1g.xn--p1ai' ,'Гобой','Как звучит гобой','Кларнет','Валторна'],
              ['nightbeat.ru','шоу барабанщиков' , 'шоу барабанщиков москва' , 'Барабанное шоу'],
              [ 'crushdrummers.ru' ,'шоу барабанщиков' , 'шоу барабанщиков москва' , 'Барабанное шоу']
              ];
 var siteArr= searchArr[Math.floor( Math.random()*searchArr.length)];
       
       var site =siteArr.shift();
 var searchWord = siteArr[Math.floor( Math.random()*siteArr.length)];
//var searchWord = searchArr[Math.floor( Math.random()*searchArr.length];
//console.log(searchWord) ; return false;
var yandexSearchInput = document.querySelector(".input__control.input__input");
if(yandexSearchInput != 'undefined') { yandexSearchInput.value = searchWord;}
document.cookie="site="+site;

       // page = Number(page) +1;
        document.cookie = 'page='+page;

       btnK[0].click();
    }



for(let i = 0 ; i< linkList.length; i++){
if((linkList[i].href.indexOf(getCookie('site')) != -1&&linkList[i].href.indexOf('webcache') == -1) ){

linkList[i].setAttribute('target' , '');
    linkList[i].click();

      }
    }




 page = Number(getCookie('page'));
        setTimeout(function(){
            if(page<4){
                page++;
                document.cookie = 'page='+page;
            document.getElementsByClassName("pager__item_kind_next")[0].click();}
            else{
        location.href = "https://www.google.com/";
}
        } , 3000);





})();



//------------------------------------------------------------


// yandex new 

// ==UserScript==
// @name         yandex_new
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://yandex.ru/*
// @grant        none
// ==/UserScript==

(function() {

        // возвращает cookie с именем name, если есть, если нет, то undefined
function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


var btnCheck = document.getElementsByClassName("websearch_button");
    var linkList = document.getElementsByTagName('a');

     var searchArr=[
              ['xn----7sbab5aqcbiddtdj1e1g.xn--p1ai' ,'Гобой','Как звучит гобой','Кларнет','Валторна'],
              ['nightbeat.ru','шоу барабанщиков' , 'шоу барабанщиков москва' , 'Барабанное шоу'],
              [ 'crushdrummers.ru' , 'Барабанное шоу']
              ];
 var siteArr= searchArr[Math.floor( Math.random()*searchArr.length)];

         var site =siteArr.shift();
document.cookie = "site="+site;
 var searchWord = siteArr[Math.floor( Math.random()*siteArr.length)];


if(btnCheck.length == 0 && document.getElementById('text') != null){
    var i = 1;
    var word = searchWord[0];
    setInterval(function(){
        if(i < searchWord.length){
            word = word + searchWord[i];
            document.getElementById('text').value =word;
            i++;
        }else{
            document.getElementsByClassName("suggest2-form__button")[0].click();
        }

    } , Math.random()* 2000);







}else {

for(let i = 0 ; i < linkList.length; i++){console.log(11);
    if(linkList[i].href.indexOf(getCookie('site'))  > -1  && linkList[i].href.indexOf('yandex') === -1){
        linkList[i].target = '_self';
        linkList[i].click();
       }
 }

var page = document.getElementByClassName("pager__item_current_yes")[0].innerText;

    if(page<4){

        setTimeout(function(){
            document.getElementsByClassName("pager__item_kind_next")[0].click();
        } , 3000);

}else{
 location.href = 'https://www.google.com';
}

}

})();



//--------------------------------------------------------------

