document.addEventListener('DOMContentLoaded',()=>{
    // clock.jsの内容はQiitaから拝借
    const clock_time=document.getElementById('clock_time');
    const clock_date=document.getElementById('clock_date');
    var weeks = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
    function clock() {
    var twoDigit = function(num){
        var digit;
        if(num < 10) {
            digit = "0"+num;
        } else {
            digit = num;
        }
        return digit;
    }
    var now = new Date();
    var year = now.getFullYear();
    var month = twoDigit(now.getMonth()+1);
    var day = twoDigit(now.getDate());
    var week = weeks[now.getDay()];
    var hour = twoDigit(now.getHours());
    var minute = twoDigit(now.getMinutes());
    var second = twoDigit(now.getSeconds());
    clock_time.textContent = hour+":"+minute+":"+second;
    clock_date.textContent = year+"/"+month+"/"+day+"("+week+")";
    }
    // setInterval(関数,ミリ秒); → 関数を引数にとる。
    setInterval(clock,1000);
});
