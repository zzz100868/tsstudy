# 阶段五：类与角色体系

## 知识点讲解

【一、类】
	class Character {
		constructor(public name: string, public hp: number) {}
	}

【二、类与接口】
	interface Attackable {
		attack(target: Character): number;
	}

	class Player extends Character implements Attackable { ... }

## 参考文档
- https://ts.xcatliu.com/advanced/class.html
- https://ts.xcatliu.com/advanced/class-and-interfaces.html
