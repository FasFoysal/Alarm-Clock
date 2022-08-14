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
let cencleAlarm = document.getElementById('alermCencle');
let aH = document.getElementById('alarmH');
let aM = document.getElementById('alarmM');

// ---- time show 
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

    // if (can == 'stop') {
    //     hhh = 'no';
    //     mmh = 'no';
    //     ap = 'no';
    // }

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

// ---- alerm set 
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
    aH.innerHTML = 'Hour: ' + hhh;
    aM.innerHTML = 'Minutes: ' + mmh;
    getAmPm.innerHTML = 'session: ' + ap;
    setAl.style.display = 'none';
    cencleAlarm.style.display = 'block';
    getTime(hhh, mmh, ap);
}

function refreshPage() {
    window.location.reload();
}
// ---- pause alerm-----
function paseAlarm() {
    music.pause();
}

// ----- cencle alerm---
function cancelOverflow() {
    setAl.style.display = 'none';
}