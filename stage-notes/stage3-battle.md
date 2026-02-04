# 阶段三：战斗系统

## 知识点讲解

【一、函数的类型】
	type Calc = (a: number, b: number) => number;
	const add: Calc = (a, b) => a + b;

【二、类型断言】
	let value: any = 'hello';
	let length: number = (value as string).length;

【三、任意值 any】
	let data: any = 123;
	data = 'abc';
	data.anything().goes();

## 参考文档
- https://ts.xcatliu.com/basics/type-of-function.html
- https://ts.xcatliu.com/basics/type-assertion.html
- https://ts.xcatliu.com/basics/any.html
