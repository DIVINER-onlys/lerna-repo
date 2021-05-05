#### eslint规范
(参考eslint规范)[https://segmentfault.com/a/1190000019661168]
(参考tsconfig.json规范)[https://segmentfault.com/a/1190000021749847]
* eslint // ESLint的核心代码
* @typescript-eslint/parser // ESLint的解析器，用于解析typescript，从而检查和规范Typescript代码
* @typescript-eslint/eslint-plugin // 这是一个ESLint插件，包含了各类定义好的检测Typescript代码的规范
* prettier // prettier插件的核心代码
* eslint-config-prettier // 解决ESLint中的样式规范和prettier中样式规范的冲突，以prettier的样式规范为准，使ESLint中的样式规范自动失效
* eslint-plugin-prettier // 将prettier作为ESLint规范来使用
* typescript
```
yarn add eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks typescript -D
```å