'use strict';
// ------------ make alarm -------------
// all id connect
let music = new Audio("alarm.mp3");
let pausTime = document.getElementById('alPuse');
let setAl = document.getElementById('setAl');
let ok = document.getElementById('ok')
let getTimeH = document.getElementById('getTimeHour');
let getTimeM = document.getElementById('getTimeMin');
let setNone = document.getElementById('none');
let select = document.getElementById('cars');
let getAmPm = document.getElementById('alarmAmPm');

function getTime(hhh, mmh, ap) {

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = 'am';



    // --- confirm time is 12 hour
    if (hh > 12) {
        hh = hh - 12;
        session = 'pm';
    } else if (hh == 0) {
        hh = hh + 12;
    }
    // ------ alerm time set 

    if (hh == hhh && mm == mmh && ap == session) {
        pausTime.style.display = 'block';
        music.play();
        hhh = '';
        mmh = '';
    }

    // - --- print output
    let runingTime = (`${hh}:${mm }:${ss } ${session}`);
    document.getElementById('time').innerHTML = runingTime;

    // --- again call same function 
    setTimeout(function() {
        getTime(hhh, mmh, ap)
    });
    return hh, mm;
}

getTime();

function alarmSetxs() {
    setAl.style.display = 'block';

}


function alarmSet() {
    let hhh2 = +getTimeH.value;
    let mmh2 = +getTimeM.value;
    let ap = select.options[select.selectedIndex].value;
    let hhh = hhh2 || 'not';
    if (hhh == 'not') {
        alert('try again');
        return;
    } else if (hhh > 12) {
        alert('try again')
        return;
    }
    let mmh = mmh2;
    if (mmh2 == 0) {
        '';
    } else {
        let mmh = mmh2 || 'not2';
        if (mmh == 'not2') {
            alert('try again');
            return;
        } else if (mmh > 60) {
            alert('try again')
            return
        }
    }

    document.getElementById('alarmH').innerHTML = 'Hour: ' + hhh;
    document.getElementById('alarmM').innerHTML = 'Minute: ' + mmh;
    getAmPm.innerHTML = 'session: ' + ap;
    setAl.style.display = 'none';
    getTime(hhh, mmh, ap);
}

function paseAlarm() {
    music.pause();
}