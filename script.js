const cmInput = document.querySelector('#cm > input');
const pxInput = document.querySelector('#px > input');

function roundNum(num) {
	return Math.round(num*100)/100
}

function cmToPx() {
	const cmv = cmInput.value;
	const pxv = cmv*37.7952755906;
	pxInput.value = roundNum(pxv);
	// console.log(pxv);
}

function pxToCm() {
	const pxv = pxInput.value;
	const cmv = (pxv*0.0264583333);
	cmInput.value = roundNum(cmv);
	// console.log(cmv);
}

function main() {
cmInput.addEventListener('input', cmToPx);
pxInput.addEventListener('input', pxToCm);
}

main();
