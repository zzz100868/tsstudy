# 阶段四：游戏状态与事件

## 知识点讲解

【一、类型别名】
	type Name = string;
	type EventHandler = (msg: string) => void;

【二、字符串字面量类型】
	type Direction = 'up' | 'down' | 'left' | 'right';

【三、元组】
	type Position = [number, number];
	const pos: Position = [3, 5];

【四、枚举】
	enum GameState { Exploring, Fighting, Shopping, Resting }

## 参考文档
- https://ts.xcatliu.com/advanced/type-aliases.html
- https://ts.xcatliu.com/advanced/string-literal-types.html
- https://ts.xcatliu.com/advanced/tuple.html
- https://ts.xcatliu.com/advanced/enum.html
