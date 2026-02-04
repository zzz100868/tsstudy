/**
 * ============================================================================
 *                    《符文大陆传说》 - 阶段六：泛型与高级系统
 * ============================================================================
 * 
 * 📚 本阶段学习目标：
 *    1. 泛型
 *    2. 声明合并
 * 
 * 📖 参考文档：
 *    - https://ts.xcatliu.com/advanced/generics.html
 *    - https://ts.xcatliu.com/advanced/declaration-merging.html
 * ============================================================================
 *                           🎮 实战任务
 * ============================================================================
 * 
 * 任务：实现通用容器与任务系统
 * 
 * TODO 1: 定义 Storable 接口（id: number, name: string）
 * TODO 2: 创建泛型类 Container<T>
 *         - add(item: T)
 *         - removeById(id: number)
 *         - list()
 * TODO 3: 声明合并扩展 Player 接口（增加 questLog: Quest[]）
 * TODO 4: 定义 Quest 接口
 * TODO 5: 测试：创建任务、放入容器、扩展玩家任务日志
 *
 * 【执行入口代码】
 * 下面这段请保留在文件中，用于运行演示
 */

console.log('='.repeat(50));
console.log('      阶段六：泛型与高级系统');
console.log('='.repeat(50));
// ============================================================================
//                           参考答案（先自己尝试！）
// ============================================================================
/*
// TODO 1: Storable 接口
interface Storable {
  id: number;
  name: string;
}

// TODO 2: 泛型 Container
class Container<T extends Storable> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
    console.log(`✅ 添加: ${item.name}`);
  }

  removeById(id: number): void {
    const index = this.items.findIndex(i => i.id === id);
    if (index >= 0) {
      const removed = this.items.splice(index, 1)[0];
      console.log(`🗑️ 移除: ${removed.name}`);
    }
  }

  list(): void {
    console.log('\n📜 容器内容：');
    this.items.forEach(i => console.log(`  - ${i.name}`));
  }
}

// TODO 3: 声明合并 Player 接口
interface Player {
  name: string;
}

interface Player {
  questLog: Quest[];
}

// TODO 4: Quest 接口
interface Quest extends Storable {
  rewardGold: number;
}

// TODO 5: 测试
const questContainer = new Container<Quest>();
const q1: Quest = { id: 1, name: '击败史莱姆', rewardGold: 50 };
const q2: Quest = { id: 2, name: '收集草药', rewardGold: 20 };

questContainer.add(q1);
questContainer.add(q2);
questContainer.list();
questContainer.removeById(1);
questContainer.list();

const player: Player = { name: '勇者', questLog: [q2] };
console.log(`\n🧾 ${player.name} 的任务：${player.questLog.map(q => q.name).join(', ')}`);
*/
