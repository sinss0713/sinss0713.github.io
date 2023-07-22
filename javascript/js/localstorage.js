document.addEventListener('DOMContentLoaded', ()=>{
    const btSave = document.getElementById("btSave");
    const btLoad = document.getElementById("btLoad");
    const result = document.getElementById("result");
    const inputData = document.getElementById("inputData");
    btSave.addEventListener('click', ()=>{
        let data1 = inputData.value;
        localStorage.setItem("data1",data1);
    });
    btLoad.addEventListener('click', ()=>{
        let resultData1 = localStorage.getItem("data1");
        result.textContent = resultData1;
    });

});