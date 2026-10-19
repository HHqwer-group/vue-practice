# Code review 练习

合并方向：`feature/AA-Test` → `feature/AA`。

本目录是刻意包含缺陷的隔离练习，不接入应用。用于测试 review 插件的分支对比、问题定位和行内反馈。

## 业务契约

- `completionPercent(tasks)` 返回整数百分比；空列表返回 0。
- `latestTasks(tasks, limit)` 按更新时间降序返回最多 limit 项，不修改调用方数组。limit 是非负整数。
- `removeTask(tasks, taskId)` 返回移除指定 ID 后的新数组；ID 不存在时保留所有任务。

## 验证

运行 `node --test review-playground/task-summary.test.js`。现有测试仅覆盖正常路径，通过不代表边界行为正确。可让插件根据上述契约审查实现并建议补充测试。

<details>
<summary>预期发现的问题（完成 review 后展开对照）</summary>

1. 空任务列表的完成率产生 NaN，而不是 0。
2. 获取最新任务时直接 sort 输入数组，意外改变调用方顺序。
3. 删除不存在的任务 ID 时误删最后一项。

</details>
