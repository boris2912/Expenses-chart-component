const dati = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07

  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

let mon = document.getElementById("mon");
let tue = document.getElementById("tue");
let wed = document.getElementById("wed");
let thu = document.getElementById("thu");
let fri = document.getElementById("fri");
let sat = document.getElementById("sat");
let sun = document.getElementById("sun");

let barra = document.getElementsByClassName("barDay");

mon.style.height = ((dati[0].amount)*3).toString() + "px";
tue.style.height = ((dati[1].amount)*3).toString() + "px";
wed.style.height = ((dati[2].amount)*3).toString() + "px";
thu.style.height = ((dati[3].amount)*3).toString() + "px";
fri.style.height = ((dati[4].amount)*3).toString() + "px";
sat.style.height = ((dati[5].amount)*3).toString() + "px";
sun.style.height = ((dati[6].amount)*3).toString() + "px";

for(let i=0; i<barra.length; i++){
  barra[i].addEventListener("mouseover", x => {
    barra[i].children.item("p").style.display = "block";
  })
  barra[i].addEventListener("mouseout", x => {
    barra[i].children.item("p").style.display = "none";
  })
}