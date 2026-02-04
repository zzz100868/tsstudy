/**
 * ============================================================================
 *                    《符文大陆传说》 - 阶段五：类与角色体系
 * ============================================================================
 * 
 * 📚 本阶段学习目标：
 *    1. 类
 *    2. 类与接口
 * 
 * 📖 参考文档：
 *    - https://ts.xcatliu.com/advanced/class.html
 *    - https://ts.xcatliu.com/advanced/class-and-interfaces.html
 * ============================================================================
 *                           🎮 实战任务
 * ============================================================================
 * 
 * 任务：面向对象重构角色系统
 * 
 * TODO 1: 定义 Attackable 和 Healable 接口
 * TODO 2: 创建抽象类 Character（name, hp, attack, defense）
 * TODO 3: 创建 Player 类，继承 Character，实现 Attackable 和 Healable
 * TODO 4: 创建 Enemy 类，继承 Character
 * TODO 5: 让玩家攻击敌人、并使用治疗技能
 *
 * 【执行入口代码】
 * 下面这段请保留在文件中，用于运行演示
 */

console.log('='.repeat(50));
console.log('      阶段五：类与角色体系');
console.log('='.repeat(50));
// ============================================================================
//                           参考答案（先自己尝试！）
// ============================================================================
/*
// TODO 1: 接口
interface Attackable {
  attack(target: Character): number;
}

interface Healable {
  heal(amount: number): void;
}

// TODO 2: 抽象类
abstract class Character {
  constructor(
    public name: string,
    public hp: number,
    public attackPower: number,
    public defense: number
  ) {}

  takeDamage(damage: number): void {
    this.hp = Math.max(0, this.hp - damage);
  }
}

// TODO 3: Player 类
class Player extends Character implements Attackable, Healable {
  heal(amount: number): void {
    this.hp += amount;
    console.log(`✨ ${this.name} 回复 ${amount} HP`);
  }

  attack(target: Character): number {
    const damage = Math.max(1, this.attackPower - target.defense);
    target.takeDamage(damage);
    console.log(`⚔️ ${this.name} 攻击 ${target.name}，造成 ${damage} 点伤害`);
    return target.hp;
  }
}

// TODO 4: Enemy 类
class Enemy extends Character {}

// TODO 5: 测试
const hero = new Player('勇者', 100, 15, 5);
const goblin = new Enemy('哥布林', 40, 8, 2);

hero.attack(goblin);
console.log(`${goblin.name} HP: ${goblin.hp}`);
hero.heal(20);
console.log(`${hero.name} HP: ${hero.hp}`);
*/
