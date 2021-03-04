let currentTime = $("#currentTime");

const main = $("main");

const inputName = $("#pName");
const inputType = $("#pType");
const inputPay = $("pPay");
const inputDate = $("#pDate");

const btnSubmit = $("#btnSubmit");

const dateTime = function(){
    const rightNow = moment().format("dddd, MMM Do hh:mm:ss:SSS");
    currentTime.text(rightNow);
}

main.on("click", "button", function(event){
    if(event.target.matches("#btnSubmit")){
        console.log("submit");
        const newTr = $("tr");
        newTr
    }
    console.log("Click");
})



setInterval(dateTime, 1);