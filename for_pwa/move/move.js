document.addEventListener('DOMContentLoaded',()=>{
    // var count=0;
    var ballx = 10;
    var bally = 160;
    let clientWidth = document.documentElement.clientWidth; //ブラウザの幅
    // let imgWidth;
    let directionRight = true;
    const ball = document.getElementById('ball');
    const jsver = document.getElementById('jsver');
    jsver.textContent = 'script ver.0.4';
    let imgWidth = ball.clientWidth;
    imgWidth = 98;
    let imgDirection = true;
    let imgNum = 0;
    let imgStr = 'ball0.png';
    // console.log('imgWidth(2)='+imgWidth);
    // document.addEventListener('click',()=>{ballx = move_ball(ballx,bally)})

    function move_ball() {
        clientWidth=document.documentElement.clientWidth;
        let posStr = "";
        if(imgDirection){
            imgNum = imgNum+0.1;
            if(imgNum >= 3){imgDirection = false};
        } else {
            imgNum = imgNum-0.1;
            if(imgNum <= 0){imgDirection = true};
        }
        if(imgNum > 4){imgNum = 0};
        if(directionRight){
            ballx += 4;
        } else {
            ballx -= 4;
        }
        if(ballx > clientWidth - imgWidth){directionRight = false}
        else if(ballx < 0){directionRight = true};
        posStr = makeStr(ballx,bally);
        imgStr = 'ball'+Math.round(imgNum)+'.png';
        // imgStr = 'ball'+imgNum+'.png';
        console.log('imgStr='+imgStr);
        ball.setAttribute('style',posStr);
        ball.setAttribute('src',imgStr);
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
    setInterval(move_ball,25);
    // setInterval(countTest,1000);
        // if(ballx>500){ballx=100};
        // posStr = makeStr(ballx,bally);
        // ball.setAttribute('style',posStr);

});
