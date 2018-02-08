var co = require('co');
// var fetch = require("babel-polyfill");
// import "babel-polyfill";

const onerror = err => {
	console.log(err.stack);
}

// co(function* (){
// 	let result = yield Promise.resolve(true)
// 	return result
// }).then((value) => console.log(value))
//   .then((err) => console.log(err))

// co(function* (){
// 	const a = Promise.resolve(5);
// 	const b = Promise.resolve(2);
// 	const c = Promise.resolve(3);
// 	const res = yield [a, b, c]
// 	console.log(res)
// }).catch(onerror)

const coFun = function* (url) {
    try {
        let request = yield fetch(url); // 缓存数据
        let text = yield request.text();
        return JSON.parse(text);
    }
    catch (error) {
        // console.log(`ERROR`);
    }
}

const fnCo = co.wrap(function* (val) {
	return yield Promise.resolve(val);
})

function fetchJson(url) {
    return fetch(url)
    .then(request => request.text())
    .then(text => {
        return JSON.parse(text);
    })
    .catch(error => {
        console.log(`ERROR`);
    });
}

function helloWorld (ready) {
	return new Promise ((resolve, reject) => {
		if(ready) {
			resolve("helloWorld")
		}else {
			reject(" good bye!")
		}
	})
}

const promiseUrl = url => {
	var promise = new Promise((resolve, reject) => {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = handler;
		xhr.open('GET', url);

		xhr.send();

		function handler() {
			if(this.readyState == 4){
				if(this.status >= 200&& this.status<300 || this.status == 304){
					resolve(this.responseText);
				}else{
					reject(new Error (this.statusText))
				}
			}
		}
		
	})
	return promise;
}

// async函数自带执行器，而generator函数的执行必须靠执行器，所以才有了co模块
// 而async函数自带执行器，that means the async function will run alone
// 而且async function的返回值是一个promise对象，所以需要调用then方法来取得result
async function fetchAsync(url) {
	// 同样是使用then方法来处理回调函数，只是这样写方便很多，不用写像promise那么多的回调
	try {
		let request = await fetch(url);
		let text = await request.text();
		return JSON.parse(text);
	}
	catch (error) {
		console.log(`ERROR: ${error.stack}`);
	}
}
const fetchObj = {
	fetchCo: coFun,
	fnCo: fnCo,
	fetchJson: fetchJson,
	promiseFn: helloWorld,
	getJson: promiseUrl,
	fetchAsync: fetchAsync
}

export default fetchObj