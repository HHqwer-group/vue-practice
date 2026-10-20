# Code review 练习

本目录是独立的 review 测试样例，不接入应用页面。

- 基准分支：feature/E（正确实现）
- 待审分支：feature/E-Test（故意引入回归，用来测试 review）
- 对比方向：feature/E-Test → feature/E
- 运行测试：`node --test review-playground/cart.test.js`

业务约定：金额单位为分；小计需计算商品数量；折扣后满 10000 分免运费，否则收取 500 分，空购物车总额为零；价格排序不得改变传入数组。

先查看 review 输出，再运行测试核对发现的问题。
