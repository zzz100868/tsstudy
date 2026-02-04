# 阶段一：冒险者的诞生

## 知识点讲解

【一、原始数据类型】

JavaScript 的类型分为两种：原始数据类型和对象类型。
原始数据类型包括：boolean, number, string, null, undefined, Symbol, BigInt

在 TypeScript 中，我们使用 `: 类型` 的方式来声明变量的类型：

	let isDone: boolean = false;     // 布尔值
	let age: number = 25;            // 数值（支持十进制、十六进制、二进制、八进制）
	let name: string = 'Tom';        // 字符串（支持模板字符串）
	let u: undefined = undefined;    // undefined
	let n: null = null;              // null

⚠️ 注意：
	- boolean 是基本类型，Boolean 是构造函数（对象）
	- new Boolean(1) 返回的是对象，不能赋值给 boolean 类型
	- 直接调用 Boolean(1) 返回的是 boolean 类型

【二、空值 void】

TypeScript 中用 void 表示没有任何返回值的函数：

	function alertName(): void {
			console.log('My name is Tom');
	}

【三、类型推论】

如果没有明确指定类型，TypeScript 会根据初始值推断出一个类型：

	let myNumber = 7;        // 推断为 number
	myNumber = 'seven';      // 报错！不能将 string 赋值给 number

	let something;           // 未赋值，推断为 any
	something = 'seven';     // OK
	something = 7;           // OK

【四、内置对象】

JavaScript 中有很多内置对象，在 TypeScript 中可以直接当作类型使用：

	let today: Date = new Date();
	let pattern: RegExp = /\d+/;
	let body: HTMLElement = document.body;  // (浏览器环境)
	let error: Error = new Error('出错了');

## 参考文档
- https://ts.xcatliu.com/basics/primitive-data-types.html
- https://ts.xcatliu.com/basics/type-inference.html
