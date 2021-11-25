# 1. Install the TypeScript Compiler globally -g flag

npm i -g typescript

# 2. Install types and dev Dependencies

npm i -D typescript ts-node nodemon rimraf @types/node @types/express

# 3. Install ESLint and addons

npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm i --save-dev eslint-config-prettier eslint-plugin-prettier

# 4. Install dependencies

npm i express --save

# 5. Init typescipt config

tsc —-init
