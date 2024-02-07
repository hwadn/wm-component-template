# 小蜜蜂无代码平台组件模板

## 开发

```sh
yarn dev
```

组件：`src/exports/Component`

组件容器定位如下：`package.json -> wm`

```json
  "wm": {
    "position": "static",
    "display": "block"
  },
```

配置表单：`src/exports/Setting
`

## 构建

修改版本`package.json -> version`

``` sh
yarn build
```

## 发布npm包

``` sh
yarn pub
```
