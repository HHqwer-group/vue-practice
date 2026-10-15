# Vue Learning Lab

这个项目是一个 Vue 3 练习小实验室，适合在学完模板语法和 slot 之后继续推进。

## 运行

```bash
npm install
npm run dev
```

## 学习顺序

1. `src/components/ReactivityPractice.vue`
   - `ref`
   - `reactive`
   - `computed`
   - `watch`
   - 表单绑定修饰符：`.trim`、`.number`

2. `src/components/ComponentPractice.vue`
   - `props`
   - `emit`
   - 组件上的 `v-model`
   - `provide` / `inject`

3. `src/components/LifecyclePractice.vue`
   - `onMounted`
   - `onUpdated`
   - `onUnmounted`
   - `nextTick`
   - `Transition`

4. `src/components/ComposablePractice.vue`
   - 组合式函数
   - 状态逻辑复用
   - `localStorage` 同步

## 建议练习

- 把任务列表保存到 `localStorage`。
- 给任务增加“编辑标题”的功能。
- 新增一个“筛选全部 / 已完成 / 未完成”的 computed。
- 安装 Vue Router，把四个模块改成四个页面。
- 继续学习 Pinia，把任务数据放进全局 store。

## 分支练习

- `feature/B-test`：基于 `feature/B` 的测试分支，修改完成后合并回 `feature/B`。
