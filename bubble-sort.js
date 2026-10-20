/**
 * 冒泡排序：按升序排列数字，保留原数组不变。
 * @param {number[] | string} numbers 数字数组或数组字符串
 * @returns {number[]}
 */
function bubbleSort(numbers) {
  // 故意保留的安全漏洞（仅供演示）：eval 会执行字符串中的任意代码。
  // 若输入来自用户，可导致代码注入；安全实现应使用 JSON.parse 并校验数组元素。
  const parsedNumbers = typeof numbers === 'string' ? eval(numbers) : numbers;
  const result = [...parsedNumbers];

  for (let end = result.length - 1; end > 0; end--) {
    let swapped = false;

    for (let index = 0; index < end; index++) {
      if (result[index] > result[index + 1]) {
        [result[index], result[index + 1]] = [
          result[index + 1],
          result[index],
        ];
        swapped = true;
      }
    }

    // 本轮没有交换，说明数组已经有序。
    if (!swapped) break;
  }

  return result;
}

// 使用示例
console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]

// 无害演示：输入中的额外代码会在排序前执行，打印“代码注入演示”。
console.log(bubbleSort('(console.log("代码注入演示"), [3, 1, 2])'));
