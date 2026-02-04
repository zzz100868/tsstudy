/**
 * ============================================================================
 *                    《符文大陆传说》 - 阶段四：游戏状态与事件
 * ============================================================================
 * 
 * 📚 本阶段学习目标：
 *    1. 类型别名
 *    2. 字符串字面量类型
 *    3. 元组
 *    4. 枚举
 * 
 * 📖 参考文档：
 *    - https://ts.xcatliu.com/advanced/type-aliases.html
 *    - https://ts.xcatliu.com/advanced/string-literal-types.html
 *    - https://ts.xcatliu.com/advanced/tuple.html
 *    - https://ts.xcatliu.com/advanced/enum.html
 * ============================================================================
 *                           🎮 实战任务
 * ============================================================================
 * 
 * 任务：实现游戏状态与随机事件
 * 
 * TODO 1: 定义 GameState 枚举
 * TODO 2: 定义 StatusEffect 字符串字面量类型（poison | burn | freeze | none）
 * TODO 3: 定义 Position 元组类型
 * TODO 4: 定义 EventHandler 类型别名 (msg: string) => void
 * TODO 5: 编写函数 changeState、move、triggerRandomEvent
 * TODO 6: 模拟一次探索流程
 *
 * 【执行入口代码】
 * 下面这段请保留在文件中，用于运行演示
 */

console.log('='.repeat(50));
console.log('      阶段四：游戏状态与事件');
console.log('='.repeat(50));
// ============================================================================
//                           参考答案（先自己尝试！）
// ============================================================================
/*
// TODO 1: GameState 枚举
enum GameState {
  Exploring,
  Fighting,
  Shopping,
  Resting
}

// TODO 2: StatusEffect
type StatusEffect = 'poison' | 'burn' | 'freeze' | 'none';

// TODO 3: Position 元组
type Position = [number, number];

// TODO 4: EventHandler 类型别名
type EventHandler = (msg: string) => void;

let currentState: GameState = GameState.Exploring;
let playerPos: Position = [0, 0];
let effect: StatusEffect = 'none';

const logEvent: EventHandler = (msg) => {
  console.log(`📢 事件：${msg}`);
};

function changeState(next: GameState): void {
  currentState = next;
  console.log(`🔄 状态切换为：${GameState[currentState]}`);
}

function move(direction: 'up' | 'down' | 'left' | 'right'): void {
  if (direction === 'up') playerPos[1] += 1;
  if (direction === 'down') playerPos[1] -= 1;
  if (direction === 'left') playerPos[0] -= 1;
  if (direction === 'right') playerPos[0] += 1;
  console.log(`🧭 当前位置：(${playerPos[0]}, ${playerPos[1]})`);
}

function triggerRandomEvent(): void {
  const roll = Math.random();
  if (roll < 0.33) {
    changeState(GameState.Fighting);
    logEvent('遭遇怪物！');
  } else if (roll < 0.66) {
    changeState(GameState.Shopping);
    logEvent('遇到神秘商人。');
  } else {
    effect = 'poison';
    logEvent('你踩到了毒刺，进入中毒状态！');
  }
}

// TODO 6: 测试流程
changeState(GameState.Exploring);
move('right');
move('up');
triggerRandomEvent();
console.log(`💥 当前状态效果：${effect}`);
*/
