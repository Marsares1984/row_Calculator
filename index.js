let saveEl = document.getElementById('save-el')

let count = 0;


function increment(){
	count += 1;
	document.getElementById('count-el').innerText = count
}


function save(){
	
let total = count;
let text = total + '-'

saveEl.textContent += text

document.getElementById('count-el').textContent = 0
count= 0
}