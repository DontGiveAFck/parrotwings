module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "airbnb-typescript"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "@typescript-eslint/indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "comma-dangle": "off",
        "import/no-extraneous-dependencies": "off",
        "react/jsx-indent-props": ["error", 4],
        "react/sort-comp": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "import/no-cycle": "off"
    },
    "settings": {
        "react": {
            "version": 'detect'
        }
    }
};
