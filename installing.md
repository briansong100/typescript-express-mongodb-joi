* Installing
1) npm i -g ts-node prettier typescript
2) npm --init

      "script": {
         "build": "rm -rf build/ && tsc",
         "start" : "node build/server.js|
      }
3) npm i chalk dotenv joi mongoose express

4) npm i -D typescript @types/express

5) tsc --init
   on tsconfig.json
   "complierOptions": {
      "target": "es2016",
      ....
      "outDir": "./build",
      
     "include": ["src/**/*"] // new line
   }
* Environment Setting
6) .vscode/settings.json
   {
      "editor.defaultFormatter": "esbenp.prettier-vscode",
      "bracketPairColorizer.depreciation-notice": true,
      "editor.formatOnSave": true,
      "editor.formatOnPaste":true,
      "editor.wordWrap": "on"
   }
7) root fold /.prettierrc
   {
      "singleQuote": true,
      "printWidth": 200,
      "proseWrap": "always",
      "tabWidth": 2,
      "useTabs": false,
      "trailingComma": "none",
      "bracketSpacing": true,
      "jsxBracketSameLine": false,
      "semi": true
   }
   
* tsc Error
   Using Powercell( run as administrator)
   Set-ExecutionPolicy RemoteSigned


* Snippet setting
CTRL+Shilt+P -> search snippet ->Preperences: Config User Snippets ->typescript.json ->
{
   
  "CRUD Mongo": {
    "prefix": "crudmongocontroller",
    "body": [
            --> attach list of code
            ".....",
            "......",
     ]
   }
}

