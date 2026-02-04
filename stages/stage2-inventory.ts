/**
 * ============================================================================
 *                    《符文大陆传说》 - 阶段二：背包与物品系统
 * ============================================================================
 * 
 * 📚 本阶段学习目标：
 *    1. 对象的类型（接口）
 *    2. 数组的类型
 *    3. 联合类型
 * 
 * 📖 参考文档：
 *    - https://ts.xcatliu.com/basics/type-of-object-interfaces.html
 *    - https://ts.xcatliu.com/basics/type-of-array.html
 *    - https://ts.xcatliu.com/basics/union-types.html
 * ============================================================================
 *                           🎮 实战任务
 * ============================================================================
 * 
 * 任务：实现背包与物品系统
 * 
 * TODO 1: 定义 ItemType 联合类型（weapon | potion | material）
 * TODO 2: 定义 Item 接口，包含 id/name/type/price/description
 * TODO 3: 创建背包数组 inventory: Item[]
 * TODO 4: 编写函数
 *         - addItem(item: Item): void
 *         - removeItemById(id: number): void
 *         - listInventory(): void
 * TODO 5: 创建三件物品并加入背包
 * TODO 6: 展示背包、移除一个物品、再展示背包
 *
 * 【执行入口代码】
 * 下面这段请保留在文件中，用于运行演示
 */

console.log('='.repeat(50));
console.log('      阶段二：背包与物品系统');
console.log('='.repeat(50));

// 在这里调用你的函数进行测试
// ============================================================================
//                           参考答案（先自己尝试！）
// ============================================================================
/*
// TODO 1: ItemType 联合类型
type ItemType = 'weapon' | 'potion' | 'material';

// TODO 2: Item 接口
interface Item {
  id: number;
  name: string;
  type: ItemType;
  price: number;
  description: string;
}

// TODO 3: 背包数组
const inventory: Item[] = [];

// TODO 4: 函数实现
function addItem(item: Item): void {
  inventory.push(item);
  console.log(`✅ 获得物品: ${item.name}`);
}

function removeItemById(id: number): void {
  const index = inventory.findIndex(item => item.id === id);
  if (index >= 0) {
    const removed = inventory.splice(index, 1)[0];
    console.log(`🗑️ 移除物品: ${removed.name}`);
  } else {
    console.log(`⚠️ 未找到 id 为 ${id} 的物品`);
  }
}

function listInventory(): void {
  console.log('\n📦 当前背包物品：');
  if (inventory.length === 0) {
    console.log('  (空)');
    return;
  }
  inventory.forEach(item => {
    console.log(`  - [${item.type}] ${item.name} (￥${item.price})：${item.description}`);
  });
}

// TODO 5: 创建物品并加入背包
const sword: Item = { id: 1, name: '铁剑', type: 'weapon', price: 120, description: '基础武器，攻击力+5' };
const potion: Item = { id: 2, name: '小型治疗药水', type: 'potion', price: 30, description: '恢复 20 HP' };
const herb: Item = { id: 3, name: '草药', type: 'material', price: 10, description: '可用于炼金' };

addItem(sword);
addItem(potion);
addItem(herb);

// TODO 6: 测试
listInventory();
removeItemById(2);
listInventory();
*/
