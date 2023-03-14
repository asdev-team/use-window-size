<hr>
<div align="center">
  <h1 align="center">
    useWindowSize
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@tm-project/use-window-size">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@tm-project/use-window-size?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@tm-project/use-window-size">
    <img alt="Types" src="https://img.shields.io/npm/types/@tm-project/use-window-size?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@tm-project/use-window-size">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@tm-project/use-window-size?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@tm-project/use-window-size?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @tm-project/use-window-size</pre>
<hr>

React хук, который возвращает текущие размеры окна браузера.

## Использование

```jsx harmony
import React from 'react'
import { WindowSizeProvider, useWindowSize} from '@tm-project/use-window-size'

const Component = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <p>Ширина окна: {width}px</p>
      <p>Высота окна: {height}px</p>
    </div>
  );
}

const App = () => {
  return (
    <WindowSizeProvider>
      <Component/>
      {/* Другие компоненты */}
    </WindowSizeProvider>
  );
}
```

## API

#### Возвращаемые данные - 'object'

|        | Тип      | Description                              |
| ------ | -------- | ---------------------------------------- |
| width  | `number` | текущая ширина окна браузера в пикселях. |
| height | `number` | текущая высота окна браузера в пикселях. |

#### Примечания
* Этот хук использует контекст для предоставления размеров окна браузера всем дочерним компонентам `WindowSizeProvider` при `resize` и `orientationchange`. Контекст используеться для того, чтобы избежать создания дополнительных слушателей событий, если рассматривать аналогичные библиотеки.
* Компонент `WindowSizeProvider` должен быть размещен выше в иерархии компонентов, чем компонент, который использует `useWindowSize`.
* Если вы используете библиотеку `React Router`, компонент `WindowSizeProvider` должен быть обернут в компонент `Router` для того, чтобы `useWindowSize` работал корректно.

## LICENSE

MIT