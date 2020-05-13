## Bug Report for TypeScript repository

Steps to reproduce:
```
git clone git@github.com:lukaskl/typescript-visitor-bug-report.git
cd typescript-visitor-bug-report
yarn
yarn test
```

---
**TypeScript Version:** 3.9.2

**Search Terms:** typeerror kind undefined visitor

**Code**

Unknown

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

**Playground Link:**

- https://github.com/lukaskl/typescript-visitor-bug-report

**Related Issues:**

- https://github.com/microsoft/TypeScript/issues/38383 (could be, same Error message, but thrown at a different place)

