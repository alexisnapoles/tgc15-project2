# tgc15-project2

## Project info
This project will be a single-page application using Vue, MongoDB, and Express as Frameworks.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Problems encountered && solutions taken
- 1. vue code formatter not working; 
    - solution 1: to setup vetur.config.js --- [Vetur](https://vuejs.github.io/vetur/guide/setup.html#advanced)
    - solution 2 (recommended ONLY IF YOU haven't totally started with the project): remove all files in the repositories and re-install vue package:
    ```
    npm install -g @vue/cli
    ``` 