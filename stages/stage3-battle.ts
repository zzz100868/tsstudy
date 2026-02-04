/**
 * ============================================================================
 *                    《符文大陆传说》 - 阶段三：战斗系统
 * ============================================================================
 * 
 * 📚 本阶段学习目标：
 *    1. 函数的类型
 *    2. 类型断言
 *    3. 任意值（any）
 * 
 * 📖 参考文档：
 *    - https://ts.xcatliu.com/basics/type-of-function.html
 *    - https://ts.xcatliu.com/basics/type-assertion.html
 *    - https://ts.xcatliu.com/basics/any.html
 * ============================================================================
 *                           🎮 实战任务
 * ============================================================================
 * 
 * 任务：实现简单回合制战斗
 * 
 * TODO 1: 定义 Player 与 Enemy 接口
 *         Player: name, hp, attack, defense
 *         Enemy: name, hp, attack, defense
 * 
 * TODO 2: 定义伤害计算函数类型 DamageCalculator
 *         (atk: number, def: number) => number
 * 
 * TODO 3: 实现 calculateDamage，伤害=atk-def，最少为1
 * 
 * TODO 4: 编写 attack 函数，玩家攻击敌人
 *         - 返回敌人剩余HP
 * 
 * TODO 5: 用 any 模拟加载角色数据，然后用类型断言转成 Player
 * 
 * TODO 6: 运行一场简单战斗（玩家攻击3次）
 *
 * 【执行入口代码】
 * 下面这段请保留在文件中，用于运行演示
 */

console.log('='.repeat(50));
console.log('      阶段三：战斗系统');
console.log('='.repeat(50));
// ============================================================================
//                           参考答案（先自己尝试！）
// ============================================================================
/*
// TODO 1: 定义接口
interface Player {
  name: string;
  hp: number;
  attack: number;
  defense: number;
}

interface Enemy {
  name: string;
  hp: number;
  attack: number;
  defense: number;
}

// TODO 2: 函数类型
type DamageCalculator = (atk: number, def: number) => number;

// TODO 3: calculateDamage
const calculateDamage: DamageCalculator = (atk, def) => {
  return Math.max(1, atk - def);
};

// TODO 4: attack 函数
function playerAttack(player: Player, enemy: Enemy): number {
  const damage = calculateDamage(player.attack, enemy.defense);
  enemy.hp = enemy.hp - damage;
  console.log(`⚔️ ${player.name} 攻击 ${enemy.name}，造成 ${damage} 点伤害`);
  return enemy.hp;
}

// TODO 5: 使用 any + 类型断言
const rawData: any = {
  name: '勇者',
  hp: 100,
  attack: 15,
  defense: 5
};
const player: Player = rawData as Player;

// 创建敌人
const slime: Enemy = { name: '史莱姆', hp: 40, attack: 6, defense: 2 };

// TODO 6: 测试战斗
for (let i = 1; i <= 3; i++) {
  playerAttack(player, slime);
  console.log(`🧪 回合 ${i} 后，${slime.name} HP: ${slime.hp}`);
  if (slime.hp <= 0) {
    console.log(`🎉 ${slime.name} 被击败了！`);
    break;
  }
}
*/
