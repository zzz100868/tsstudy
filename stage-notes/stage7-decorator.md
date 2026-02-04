# 阶段七：装饰器与完善

## 知识点讲解

【一、装饰器】
装饰器是对类、方法、属性的扩展方式，需要在 tsconfig 中开启
	"experimentalDecorators": true

示例：方法装饰器
	function Log(target: any, key: string, descriptor: PropertyDescriptor) {
		const original = descriptor.value;
		descriptor.value = function(...args: any[]) {
			console.log(`调用 ${key}`);
			return original.apply(this, args);
		}
	}

【二、声明文件】
当你使用第三方 JS 库时，TypeScript 通过 .d.ts 声明文件获取类型信息。
本阶段只需要理解概念，后续前后端开发会用到。

## 参考文档
- https://ts.xcatliu.com/advanced/decorator.html
- https://ts.xcatliu.com/basics/declaration-files.html
