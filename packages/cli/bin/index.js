#!/usr/bin/env node

import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import clear from 'clear';
import figlet from 'figlet';
import inquirer from 'inquirer';

const log = (content) => console.log(chalk.green(content));

const opt = {
  'IndigoUI应用模版(Vite)': 'indigo-ui-vite',
  'IndigoUI模版应用(webpack)': 'admin',
  退出: 'quit',
};

const question = [
  {
    type: 'rawlist' /* 选择框 */,
    message: '请选择要创建的项目？',
    name: 'operation',
    choices: Object.keys(opt),
  },
];

// 打印欢迎画面
clear();
const logo = figlet.textSync('Indigo UI', {
  // font: "Ghost",
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
  whitespaceBreak: true,
});

const rainbow = chalkAnimation.rainbow(logo);
setTimeout(() => {
  rainbow.stop(); // Animation stops
  query();
}, 500);

// Debug
// const { default: op } = await import(`../lib/operations/smarty-ui-vite.js`);
// op()

async function query() {
  const answer = await inquirer.prompt(question);

  if (answer.operation === '退出') return;

  const { default: op } = await import(`../lib/operations/${opt[answer.operation]}.js`);
  await op();

  // await query();
}
