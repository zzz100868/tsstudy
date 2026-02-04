/**
 * ============================================================================
 *                    《符文大陆传说》 - 阶段七：装饰器与完善
 * ============================================================================
 * 
 * 📚 本阶段学习目标：
 *    1. 装饰器
 *    2. 声明文件（概念理解）
 * 
 * 📖 参考文档：
 *    - https://ts.xcatliu.com/advanced/decorator.html
 *    - https://ts.xcatliu.com/basics/declaration-files.html
 * ============================================================================
 *                           🎮 实战任务
 * ============================================================================
 * 
 * 任务：实现日志装饰器与范围限制装饰器
 * 
 * TODO 1: 创建方法装饰器 Log，打印方法名和参数
 * TODO 2: 创建属性装饰器 Range(min, max)，限制数值范围
 * TODO 3: 创建 Player 类，包含 hp 属性与 attack 方法
 * TODO 4: 调用 attack 并观察日志
 *
 * 【执行入口代码】
 * 下面这段请保留在文件中，用于运行演示
 */

console.log('='.repeat(50));
console.log('      阶段七：装饰器与完善');
console.log('='.repeat(50));
// ============================================================================
//                           参考答案（先自己尝试！）
// ============================================================================
/*
// TODO 1: 方法装饰器 Log
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`📌 调用方法: ${key}, 参数: ${JSON.stringify(args)}`);
    return original.apply(this, args);
  };
}

// TODO 2: 属性装饰器 Range
function Range(min: number, max: number) {
  return function (target: any, key: string) {
    let value: number;
    const getter = () => value;
    const setter = (newValue: number) => {
      if (newValue < min) value = min;
      else if (newValue > max) value = max;
      else value = newValue;
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

// TODO 3: Player 类
class Player {
  @Range(0, 9999)
  hp: number = 100;

  constructor(public name: string) {}

  @Log
  attack(target: string, damage: number): void {
    console.log(`⚔️ ${this.name} 攻击 ${target}，造成 ${damage} 点伤害`);
  }
}

// TODO 4: 测试
const hero = new Player('勇者');
hero.attack('史莱姆', 12);
hero.hp = 100000; // 超出范围，自动限制
console.log(`💖 当前HP: ${hero.hp}`);
*/
