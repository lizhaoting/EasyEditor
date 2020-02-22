## `TODO LIST`

- `优化npm run build加载es6方式`

- `完善rollup打包`

- `将不同的库打包到不同文件夹下的dist`

- `自动化更新各个package中package.json版本`

- `自动引入Package.json中name和版本号`

- `编译代码头部version`
```js
const banner = `
    /*!
    * ${opts.name} v${11111}
    * (c) ${new Date().getFullYear()} Scrumpy UG (limited liability)
    * @license MIT
    */
`
```