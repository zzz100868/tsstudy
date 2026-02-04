# 阶段六：泛型与高级系统

## 知识点讲解

【一、泛型】
	class Container<T> { ... }
	function identity<T>(arg: T): T { return arg; }

【二、声明合并】
	interface Player { name: string; }
	interface Player { level: number; }
	// 合并后 Player 同时拥有 name 和 level

## 参考文档
- https://ts.xcatliu.com/advanced/generics.html
- https://ts.xcatliu.com/advanced/declaration-merging.html
