# CC 团队评审练习

评审方向：feature/CC-Test → feature/CC。代码独立于应用，仅使用虚构订单。

业务契约：
- pageOrders：页码从 1 开始，pageSize 为正整数，返回对应页。
- newestOrders：createdAt 是毫秒时间戳，按时间降序取 limit 项，不修改输入数组。
- cancelOrder：返回新数组；ID 不存在时保留全部订单，不修改输入数组。
- totalCents：每项 priceCents 乘以 quantity 后求和，金额单位始终为分，空数组返回 0。

测试分支刻意包含缺陷，测试通过不等于满足契约，请勿合入生产。

建议团队分别检查业务契约、共享数据副作用、测试覆盖。
每条发现记录触发输入、预期与实际行为、文件行号和修复建议。
可以通过 PR 行内讨论、回复、解决讨论以及后续修复提交体验团队评审流程。

在测试分支运行：node --test review-playground/cc/orders.test.js
