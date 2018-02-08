import fetchObj from './promise.js'
import {Animal, Dog, human, worker} from './newClass'

// 声明引用的模块
// module point from './point'
// 导入需要的部分
import {Point} from './point'
// import "babel-polyfill";
// 迭代器
function* generator(){
    console.log('hehe');
    yield 'hello';
    yield 'ecmascript';
    return 'end';
}
// const gen = generator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// for(let x of generator()){
//     console.log(x);
// }

// fetch
var co = require('co');
// co返回的是一个promise对象，co可以让generator自动执行
const fetchCo = co(fetchObj.fetchCo("./data.json"))
	.then((data) => {
		console.log(data);
	},error => console.log(error));
// console.log(fetchCo)
// const fnCo = fetch.fnCo("hello").then(function(val){
// 	console.log(val);
// })

// fetch 方法的链式调用
// fetchObj.fetchJson("data.json")
//  .then(obj => console.log(obj))
// fetchObj.promiseFn(true).then((message) => {
// 	console.log(message)
// }, error => console.log(error))

// promise 异步调用数据
// fetchObj.getJson('data.json')
//  .then((json)=>console.log(json),(error) => console.log(error))

// async/await
// fetchObj.fetchAsync('data.json')
// .then((json) => console.log(json), (error) => console.log(error))

const sleep = time => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("ok");
			// 模拟出错
			// reject("error")
		}, time);
	})
}

const start = async function() {
	try {
		console.log("start");
		let result = await sleep(1000);
		console.log(result);
		console.log("end")
	} catch (err) {
		console.log(err)
	}
}
//await看起来像是同步代码，所以可以理所当然的卸载for循环里面，不必担心以往需要闭包才能解决的问题
// 因为这是异步的调用
const forStart = async function() {
	for(let i = 1; i<=10;i++){
		console.log(`当前是第${i}次等待`);
		await sleep(1000);
	}
}

const forEachArr = async function () {
	let arrNum = [1,2,3,4,5];
	for(let v of arrNum) {
		console.log(`当前是第${v}次等待`);
		await sleep(1000);
	}
}
// start();
// forStart();
// forEachArr();

// test class
// const animal = new Animal('Duang', 1)
// const dog = new Dog('xiaobai', 2, "bread");
// animal.sayName();
// animal.sayAge();
// dog.sayName();
// dog.sayAge();
// dog.eat();

// 增强的对象字面量

// console.log(`父类的名字是：${human.name}, 父类的年龄是：${human.age}`);
// human.breathe();
// console.log(worker.company);
// worker.work();
// worker.breathe();

// const origin = new Point(0 ,0)
// console.log(origin)

