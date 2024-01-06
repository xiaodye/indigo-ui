---
category: Components
title: VirtualList 虚拟列表
toc: content
group:
  title: 数据展示
  order: 3
---

虚拟列表是一种根据滚动容器元素的可视区域来渲染长列表数据中某一部分数据的技术。

生产环境中推荐使用成熟的库，如：

- react-window

## 普通列表 VS 虚拟列表

此案例用知名库`react-window`演示，以便能真实的获取性能差距。

<code src="./demos/display.tsx"></code>

通过测量，可以发现：

- 普通列表一次性渲染 1000 个 DOM 元素，因此耗时较长，约 36 ms。
- 虚拟列表通过计算，只渲染可视区域部分 DOM 元素，约 1.3 ms，性能提升 **27** 倍。
- 后续滚动列表时，普通列表不会再次触发视图更新；而虚拟列表由于需要重新计算可视区域元素，因此会频繁触发视图更新。

## FixedSizeList

元素定高的虚拟列表是指列表的每一项高度是固定且相同的。

### 基础使用

<code src="./demos/fixed.tsx"></code>

## VariableSizeList

实现待定。
