## Bug Report for TypeScript repository

Steps to reproduce:
```
git clone git@github.com:lukaskl/typescript-visitor-bug-report.git
cd typescript-visitor-bug-report
yarn
yarn test
```

---
**TypeScript Version:** 
- 🔴`3.9.2`
- 🔴`3.9.1-rc`
- 🔴`3.9.0-beta`
- ✅3.8.3 (it work with previous versions)


<!-- Search terms you tried before logging this (so others can find this issue more easily) -->
**Search Terms:**
Visitor TypeError kind undefined 85032

**Code**

_Unknown_ (Error is thrown at `node_modules/typescript/lib/typescript.js:85032:35`)

But this part triggers it
```ts
export interface ColorProps {
  style?: CSSProperties
}

const Color = styled(({ style }: ColorProps) => (
  <div
    style={{
      ...style,
      background: `anything`,
    }}
  />
))``
```

**Expected behavior:**

It compiles

**Actual behavior:**
```
    TypeError: Cannot read property 'kind' of undefined

      at visitObjectLiteralExpression (node_modules/typescript/lib/typescript.js:85032:35)
      at visitJavaScript (node_modules/typescript/lib/typescript.js:83441:28)
      at visitor (node_modules/typescript/lib/typescript.js:83384:24)
      at visitNode (node_modules/typescript/lib/typescript.js:74768:23)
      at Object.visitEachChild (node_modules/typescript/lib/typescript.js:75209:108)
      at visitJavaScript (node_modules/typescript/lib/typescript.js:83491:31)
      at visitor (node_modules/typescript/lib/typescript.js:83384:24)
      at visitNodes (node_modules/typescript/lib/typescript.js:74819:48)
      at Object.visitEachChild (node_modules/typescript/lib/typescript.js:75034:53)
      at visitObjectLiteralExpression (node_modules/typescript/lib/typescript.js:85057:23)
```

**Playground Link:** <!-- A link to a TypeScript Playground "Share" link which demonstrates this behavior -->

- minimal reproducible repository - https://github.com/lukaskl/typescript-visitor-bug-report

**Related Issues:** <!-- Did you find other bugs that looked similar? -->
- https://github.com/microsoft/TypeScript/issues/38558 
- https://github.com/microsoft/TypeScript/issues/38383 (could be duplicate, same Error message, but thrown at a different place)

