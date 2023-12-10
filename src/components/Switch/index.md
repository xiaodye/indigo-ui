# Switch 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；

- 和 checkbox 的区别是，切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。

## 基本使用

最基本的使用。

<code src="./demos/basic.tsx"></code>

## 禁用状态

通过 `disabled` 开启禁用。

<code src="./demos/disabled.tsx" ></code>

## 不同大小

如果觉得默认比较大，通过 `small` 切换到小开关。

<code src="./demos/size.tsx" ></code>

## 文字和图标

`checkedChildren` 自定义选中内容， `unCheckedChildren` 自定义未选中内容。

<code src="./demos/checkedChildren.tsx" ></code>
