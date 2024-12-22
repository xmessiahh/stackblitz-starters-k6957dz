console.log('Hello!');

const todaysDate = () => {
   let d = new Date();
   return "Today's date is " + d
}

const dateBlock = document.getElementById("dateBlock");
dateBlock.innerText = todaysDate();
const body = document.body;
const d = new Date();

if (d.getHours() > 20 || d.getHours() < 9 ){
    body.style["backgroundColor"] = "white";
    body.style["color"] = "black";
} else {
    body.style["backgroundColor"] = "black";
    body.sty;e["color"] = "white";
}       

