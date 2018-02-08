/** 1. commonJs的规范：(nodejs是采用commonJs的规范，服务器端是采用commonJs的规范)
 *  统一是采用exports 和 module.exports 来输出模块，因为每一个模块都是module
 *  而其内部为了方便指定了： var exports = module.exports
 *
 *  2. es6 ： 不同于commonjs,其是采用export和import来导出、导入模块
 *  而export default是指定默认输出
 */
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	sayName() {
		console.log(`My name is ${this.name}`);
	}
	sayAge() {
		console.log(`My age is ${this.age}`);
	}
}

// class inherit

class Dog extends Animal {
	constructor(name, age, food) {
		super(name, age);
		this.food = food;
	}

	eat() {
		console.log(`I like to eat ${this.food}`);
	}
}

// 增强的对象字面量
const human = {
	name: 'Tracy',
	age: 20,
	hobby: ["reading book","doing exercise"],
	breathe() {
		console.log(".....breathing.....")
	}
}

const worker = {
	__proto__: human, //设置此obj的原型为human
	company: 'freeMaker',
	work() {
		console.log("I like working")
	}
}

export {Animal, Dog, human, worker}