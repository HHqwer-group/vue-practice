# DD Code Review 练习

基准分支：`feature/DD`。待审分支：`feature/DD-Test`。

运行测试：`node --test review-playground/dd/cart.test.js`。

本目录为独立练习，不被应用入口引用。基准实现应通过全部测试。
待审分支将模拟购物车重构，故意引入数量计算、删除不存在商品、排序副作用三个回归问题，供 review 功能验证。

在 review 中选择 `feature/DD` 为目标分支，查看 `feature/DD-Test` 的差异。
团队审查可通过以这两个分支为 base/head 的 Pull Request 进行。
