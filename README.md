## task for FrontendProduction

### Задание

Необходимо реализовать чат для очень одиноких людей (без серверной части, только UI на reactJS/Vue.js), которые будут общаться сами с собой. Пользователь откроет 2 (или больше) вкладки в браузере, введет разные имена и начнет активную дискуссию (только текстовые сообщения). Имя пользователя должно быть привязано к вкладке (видимо через session storage), история чата глобальна для браузера (можно использовать LocalStorage, kv-storage, IndexedDB). Чат должен поддерживать адаптивную верстку (с использованием bootstrap или другой библиотеки).

### Solution:

![App screen](https://user-images.githubusercontent.com/67905360/208751384-44a789aa-9988-4915-9ab7-c00b3c88a240.png)

View on GH-pages: https://maximkaschitskiy.github.io/frontend_production-test/

How to run:

```
npm i
npm run start
```

#### Technologies:
 - Typescript as base
 - React with hooks and functional components
 - browser storage (local and session) for storing account and history data
 - MUI and emotion/styles for components and layout
 - Nano ID for generate random IDs
 - Moment for date set and processing
