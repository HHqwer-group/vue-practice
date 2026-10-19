# BB 团队评审练习

合并方向：`feature/BB-Test` → `feature/BB`，基线为 main。
本目录刻意保留缺陷，仅用于 code review，不接入应用。

## 业务契约

- pageMembers：页码从 1 开始，pageSize 为正整数，返回对应页成员。
- newestMembers：按 joinedAt 降序返回最多 limit 个成员，不改变输入数组。
- removeMember：返回新数组；ID 不存在时保留所有成员。
- activePercent：返回整数百分比；空数组返回 0。

## 评审流程

运行 `node --test review-playground/bb/member-list.test.js`。
现有测试只覆盖部分行为，通过不代表满足所有契约。

适合从三个角度进行团队评审：业务正确性、调用方状态影响、测试有效性。
对每个发现记录文件及行号、触发输入、实际与预期结果，再讨论修复和回归测试。
可在后续提交中修复问题，观察新增 diff、讨论回复及解决状态。

<details>
<summary>评审后对照：预埋问题</summary>

1. 分页偏移错误：第一页跳过 pageSize 项。
2. sort 修改调用方数组，导致其他视图顺序变化。
3. 删除未知 ID 时 splice(-1, 1) 误删最后一项。
4. 空列表百分比为 NaN。
5. 分页测试仅断言长度上限，即使返回空数组也会通过。

</details>
