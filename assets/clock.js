function Clock(){
    let date = new Date();
    let curhour = date.getHours();
    let curmin = date.getMinutes();
    let cursec = date.getSeconds();

    curhour = (curhour<10 ? "0" : "")+curhour;

    curmin = (curmin<10 ? "0" : "")+curmin; 

    cursec = (cursec<10 ? "0" : "")+cursec;

    let timeofday = (curhour<12) ? "AM" : "PM";

    curhour = (curhour>12) ? curhour-12 : curhour;
    curhour = (curhour==0) ? 12 :curhour;

    let curtimeStr = curhour + ":" + curmin + ":" + cursec + " " + timeofday;
    document.getElementById("clock").innerHTML=curtimeStr;
}