let serialport = require('serialport');
let port = null;

let COM = document.querySelector('.select-control-com')
let BAUDRATE = document.querySelector('.select-control-baudRate')
// let timeingSend = document.querySelector('#timing')
// let timingSend = document.querySelector('.timing-send')
let send = document.querySelector('.send-data')
let btnSubmit = document.querySelector('.btn-submit')
let clearData = document.querySelector('.clear-send-data')
let receiveWindow = document.querySelector('.receive-text-box')

let count = 0
let TimingSend
serialport.list().then((ports, err) => {
	for (let item of ports) {
		COM.options.add(new Option(item.comName, item.comName));
	}
	console.log(ports);
});
btnSubmit.addEventListener('click', (data) => {
	count++
	if (count % 2) {
		btnSubmit.style.backgroundColor = '#337ab7'
		btnSubmit.innerText = '关闭串口'
	} else {
		btnSubmit.style.backgroundColor = '#ccc'
		btnSubmit.innerText = '打开串口'
	}
	let comNum = COM.options[COM.selectedIndex].innerText;
	let baudRate = BAUDRATE.options[BAUDRATE.selectedIndex].innerText;
	port = new serialport(comNum, {
		baudRate: parseInt(baudRate)
	});
	// console.log(port)
	receiveWindow.innerHTML = `当前串口: ${comNum}, 波特率: ${baudRate}<br>`;
	port.on('data', data => {
		receiveWindow.innerText += data.toString();
	});
})

function sendData() {
	var sendData = document.querySelector('.send-text-box textarea').value;
	if (port != {} && port != null) {//
		port.write(sendData);
	}
}

function test() {
	console.log(11)
}
// 点击发送信息
send.addEventListener('click', () => {
	sendData()
})
// 清空信息
clearData.addEventListener('click', () => {
	document.querySelector('.send-text-box textarea').value = '';
})
//周期发送


// timingSend.addEventListener('click', (e) => {
// 	console.log(e.target.)
// 	if(e.target.){
// 		let time=document.querySelector('#time').value
// 		TimingSend=window.setInterval(sendData,time)
// 	}
// 	console.log(21212)

// 	// console.log(time)

// })

