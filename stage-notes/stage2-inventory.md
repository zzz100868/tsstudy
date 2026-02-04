# 阶段二：背包与物品系统

## 知识点讲解

【一、接口（Interface）】
接口用来定义对象的结构，比如一个物品的属性：

	interface Item {
		id: number;
		name: string;
		type: ItemType;
		price: number;
	}

【二、数组类型】
	let items: Item[] = [];
	let numbers: Array<number> = [1, 2, 3];

【三、联合类型】
	type ItemType = 'weapon' | 'potion' | 'material';

## 参考文档
- https://ts.xcatliu.com/basics/type-of-object-interfaces.html
- https://ts.xcatliu.com/basics/type-of-array.html
- https://ts.xcatliu.com/basics/union-types.html
