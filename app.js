// Select Dom Element
const buttonInEle = document.getElementById("kaosar");
const buttonOutEle = document.getElementById("jony");
const inputEle = document.getElementById("input");
const messgagesInEle = document.querySelector(".messgagesIn");
const messgagesOutEle = document.querySelector(".messgagesOut");
const boxTowEle = document.querySelector(".boxTow");
const boxOneEle = document.querySelector(".boxOne");
const messgagesOutboxOne = document.querySelector(".messgagesOutboxOne");
const messgagesOutboxTow = document.querySelector(".messgagesOutboxTow");

buttonInEle.addEventListener("click", () => {
    messgagesInEle.style.display = "block";
    messgagesOutEle.style.display = "none";
    buttonInEle.style.backgroundColor = "#000";
    buttonInEle.style.color = "#fff";
    buttonOutEle.style.backgroundColor = "aliceblue";
    buttonOutEle.style.color = "#000";
});
buttonOutEle.addEventListener("click", () => {
    messgagesInEle.style.display = "none";
    messgagesOutEle.style.display = "block";
    buttonInEle.style.backgroundColor = "aliceblue";
    buttonInEle.style.color = "#000";
    buttonOutEle.style.backgroundColor = "#000";
    buttonOutEle.style.color = "#fff";
});
messgagesInEle.style.display = "block";
messgagesOutEle.style.display = "none";
buttonInEle.style.backgroundColor = "#000";
buttonInEle.style.color = "#fff";


// Intital Value
let kaosarMessage = [];
let jonyMessage = [];
const getkasoarMessage = JSON.parse(localStorage.getItem("kasosarmessage"));
if(getkasoarMessage !== null){
    kaosarMessage = getkasoarMessage
}
const getjonyMessage = JSON.parse(localStorage.getItem("jonymessage"));
if(getjonyMessage !== null){
    jonyMessage = getjonyMessage
}
displayKaosarMessage();

    
// Funtions
function handleSubmit(event){
    event.preventDefault();
    if(messgagesInEle.style.display == "block"){
        kaosarMessage.push({
            time : new Date(new Date().getTime()), message : inputEle.value, flag: "kaosar"
        });
    }else{
        jonyMessage.push({
            time : new Date(new Date().getTime()), message : inputEle.value, flag: "jony"
        });
    }
    inputEle.value = '';
    console.log(jonyMessage);
    displayKaosarMessage();
    savekaosarMessage();
};

function savekaosarMessage(){
    const str = JSON.stringify(kaosarMessage);
    localStorage.setItem("kasosarmessage", str);
    const str2 = JSON.stringify(jonyMessage);
    localStorage.setItem("jonymessage", str2);
    displayKaosarMessage()
};

function displayKaosarMessage(){
    let output = ""; 
    kaosarMessage.forEach((element) => {
        output += `<div>
        <p>${element.time.toString().slice(11, 19)}</p>
        <span>
            <h2>${element.message}</h2>
            <p>${element.flag.slice(0, 1)}</p>
        </span>
    </div>`
    });
    boxTowEle.innerHTML = output;
    messgagesOutboxOne.innerHTML = output;

    let jonyOutput = "";
    jonyMessage.forEach((element) => {
        jonyOutput += ` <p>${element.time.toString().slice(11, 19)}</p>
        <span>
            <p>${element.flag.slice(0, 1)}</p>
            <h2>${element.message}</h2>
        </span>`
    });
    boxOneEle.innerHTML = jonyOutput;
    messgagesOutboxTow.innerHTML = jonyOutput;
}