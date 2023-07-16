document.addEventListener('DOMContentLoaded',()=>{
    // var count=0;
    var ballx = 10;
    var bally = 65;
    var clientWidth;
    var directionRight = true;
    const ball=document.getElementById('ball');
    // document.addEventListener('click',()=>{ballx = move_ball(ballx,bally)})

    function move_ball() {
        clientWidth=document.documentElement.clientWidth;
        let posStr = "";
        if(directionRight){
            ballx += 4;
        } else {
            ballx -= 4;
        }
        if(ballx > clientWidth - 20){directionRight = false}
        else if(ballx < 0){directionRight = true};
        posStr = makeStr(ballx,bally);
        ball.setAttribute('style',posStr);
        // console.log("ballx=" + ballx);
        return;
    };

    function makeStr(x,y){
        let posStr = "top:" + y + "px; left:" + x + "px;";
        // console.log("posStr:"+posStr);
        return posStr;
    };

    // function countTest(){
    //     console.log("count="+count);
    //     count += 1;
    // };
    // setInterval(関数,ミリ秒); → 関数を引数にとる。
    setInterval(move_ball,16);
    // setInterval(countTest,1000);
        // if(ballx>500){ballx=100};
        // posStr = makeStr(ballx,bally);
        // ball.setAttribute('style',posStr);

});
