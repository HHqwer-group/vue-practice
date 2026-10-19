# Feature D test notes

This file records a small example change on the `feature/D-test` branch.

- Parent branch: `main`
- Feature branch: `feature/D`
- Test branch: `feature/D-test`

## AI code review 练习

`review-lab/` 是故意保留缺陷的独立练习，不接入 Vue 应用，也不连接真实数据。
需要 Node.js 18 或更新版本。运行：

```bash
npm run test:review
npm run build
```

练习初始状态预期为 3 个测试通过、3 个测试失败；失败用于复现业务缺陷，
不是测试环境故障。修复后应全部通过，并保留原有业务断言。

### Reviewer 操作

拉取 `feature/D-test` 后，对比 `main` 审查新增代码。可以给 AI 以下指令：

> 审查当前分支相对 main 的差异。依据函数业务契约、调用后果和测试，找出
> 可复现的正确性问题，按 P0/P1/P2/P3 评估优先级，给出代码位置、触发条件、
> 影响和修复建议。不要仅为了覆盖某个等级而提高严重程度。先报告，不修改代码。

确认报告后再让 AI 修复：

> 修复 review-lab 中已确认的问题，保持业务契约与现有测试断言不变，补充必要的
> 边界测试。运行 npm run test:review 和 npm run build，汇报结果。

### 场景与评估边界

- 保留策略用于核心多租户账本，返回值将替换完整快照；无过期数据应保持所有记录。
  若部署到生产并导致全量账本被清空，应作为发布阻断级数据丢失处理。
- 结算促销仅作用于商品金额，运费必须全额收取。
- 分页必须让用户访问不足一页的尾部记录。

这些场景分别用于练习灾难性数据丢失、核心交易错误及常规功能边界问题。
本仓库只模拟内存操作，没有真实生产调用链，因此实际 review 可以降低优先级；
不能将演示缺陷等同于真实生产 P0，也不能保证 AI 输出指定等级。
