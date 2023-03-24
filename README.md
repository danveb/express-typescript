# Node + Express + TypeScript 

This is the main code base for a vanilla Node+Express+TypeScript app. Many of the packages were previously installed globally, but for the sake of documenting, all packages are outlined in this file. 

1. initialize `Node.js`

```bash
$ yarn init -y 
```

2. initialize `Express.js` and `dotenv` packages

```bash
$ yarn add express dotenv
```

3. install `typescript @types/node @types/express` as devDepdendencies

```bash
$ yarn add -D typescript @types/node @types/express ts-node concurrently
```

4. generate `tsconfig.json`

```bash
$ npx tsc --init
```

5. use default `tsconfig.json` compiler options and add update the following: 

```json
target: es2016
module: commonjs
strict: true
esModuleInterop: true 
skipLibCheck: true 
forceConsistentCasingInFileNames: true

"compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
}
```

6. update `scripts` in the `package.json` file: 

```json
"scripts": {
    "build": "yarn tsc", 
    "dev": "node ./src/index.ts",
    "start": "node dist/index.js", 
    "serve": "concurrently \"yarn tsc -w\" \"nodemon dist/index.js\""
}
```

7. code `src/index.ts`

```ts
import express, { Express, Request, Response } from "express"; 
import "dotenv/config"; 

const app: Express = express(); 
const port = process.env.PORT || 8800; 

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server"); 
});

app.listen(port, () => {
    console.log(`🔥 Server running at port ${port}`); 
});
```

8. compile and Run 

```bash
$ yarn build 
$ yarn serve
```