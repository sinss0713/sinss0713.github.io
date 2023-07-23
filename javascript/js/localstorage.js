document.addEventListener('DOMContentLoaded', ()=>{
    const btSave = document.getElementById("btSave");
    const btLoad = document.getElementById("btLoad");
    const result = document.getElementById("result");
    const inputData = document.getElementById("inputData");
    const status = document.getElementById("status");
    btSave.addEventListener('click', ()=>{
        let data1 = "";
        data1 = inputData.value;
        if(data1 == ""){
            status.textContent="何か入力してください。"
        }else{
            localStorage.setItem("data1",data1);
            status.textContent = 'ローカルストレージへ保存しました。'
        }
    });
    btLoad.addEventListener('click', ()=>{
        let resultData1 = localStorage.getItem("data1");
        if(resultData1 == ""){
            status.textContent = '保存されているデータはありません。';
        } else {
            result.textContent = resultData1;
            status.textContent = 'ローカルストレージから読み込みました。'    
        };
    });

});