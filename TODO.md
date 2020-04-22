## `TODO LIST`

- `优化npm run build加载es6方式`

- `完善rollup打包`

- `将不同的库打包到不同文件夹下的dist`

- `自动化更新各个package中package.json版本`

- `自动引入Package.json中name和版本号`

- `编译代码头部version`

- `编辑器协同考虑段落标签添加字段`

- `区分编辑模式与预览模式，分别注入不同的CSS - 或许行不通 - 而且存在安全隐患`

- `console help 处理成链式调用`

- `添加默认的keymap，并暴露方法给开发者自行调用，而且提供执行前后钩子 - 组织方式要考虑一下`

- `添加自定义的keymap`

- `初始化文档支持字符串、HTML DOM、JSON`

- `单独封装一个库，用来处理HTML字符串安全问题（目前已知最安全的解决方式）`

- `提供一个开关展示每一个事务transtration`

```js
const banner = `
    /*!
    * ${opts.name} v${11111}
    * (c) ${new Date().getFullYear()} Scrumpy UG (limited liability)
    * @license MIT
    */
`
```