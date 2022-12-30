
//Dis = Number(Dis)
//console.log(typeof Dis)
const Btn = document.getElementById("btn")

let Len = document.getElementById("length")
const Vol = document.getElementById("volume")
const Mas = document.getElementById("mass")


Btn.addEventListener("click",function(){
	let Dis = document.getElementById("display");
	Dis = Dis.value;
	Len.innerHTML = `${Dis}meters = ${(Dis*3.281).toFixed(3)}feet | ${Dis}feet = ${(Dis/3.281).toFixed(3)}meters `
	Vol.innerHTML = `${Dis}liters = ${(Dis*0.264).toFixed(3)}gallons | ${Dis}gallons = ${(Dis/0.264).toFixed(3)}liters `
	Mas.innerHTML = `${Dis}kilos = ${(Dis*2.204).toFixed(3)}pounds | ${Dis}pounds = ${(Dis/2.204).toFixed(3)}kilos `
	
	
	})




