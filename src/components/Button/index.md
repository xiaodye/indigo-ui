---
category: Components
title: Button 按钮
toc: content
group:
  title: 基础组件
  order: 1
---

# Button 按钮

按钮用于开始一个即时操作。

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

- 我们提供了 7 种按钮。

- 禁用：行动点不可用的时候，一般需要文案解释。

## 基本使用

最基础的按钮，共有 7 种状态。

<code src="./demos/basic.tsx"></code>

## 按钮尺寸

<!-- 自定义宽高配置不同尺寸按钮。 -->

按钮有大、中、小三种尺寸。

通过设置 size 为 large small 分别把按钮设为大、小尺寸。若不设置 size，则尺寸为中。

<code src="./demos/size.tsx"></code>

## 圆角按钮

配置 circle 变成圆按钮。

<code src="./demos/circle.tsx"></code>

## 禁用按钮

配置 disabled 禁用按钮。

<code src="./demos/disabled.tsx"></code>
