module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
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
        "linebreak-style": 0,
        "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
        "allowIndentationTabs": true,
        'react/jsx-indent': 0, // Prettier.
        'react/jsx-indent-props': 0, // Prettier.
    }
};