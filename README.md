# What is this project?

This project is a small repository to reproduce an issue I'm facing with the storybook build using `@web/storybook-builder`.

It contains:

- A component file of a very ugly and simple button using `Lit`,
- A story file with 2 very simple stories.

## How to reproduce the issue?

To reproduce, do as follows:

1. run `npm i`,
2. run `npm run build-storybook`,
3. run `npm run static` to serve the generated files from the `storybook-static` directory.
4. check `http://localhost:6006/?path=/docs/components-custom-button--docs` from your browser.

You should get a blank story iframe with the following error in your console:

```js
Uncaught (in promise) TypeError: __export9$1 is not a function
```

**Note:** when running the storybook in `dev` mode (`npm run storybook`), I managed to make this page work by using the `commonjs` rollup plugin. It was necessary because it appears the autogenerated docs rely on a package named `tocbot` which uses `commonjs` imports.

I tried to do the same for the build in a `rollupFinal` hook but it did not change anything. As I understand it, the docs addon is prebundled anyway?
