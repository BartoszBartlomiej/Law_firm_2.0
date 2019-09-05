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
        "semi": "error",
        "react/prop-types": 0,
        "linebreak-style": 0,
        "object-curly-newline": 0,
        "react/destructuring-assignment": 1,
        "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
        "allowIndentationTabs": 0,
        'react/jsx-indent': 0, // Prettier.
        'react/jsx-indent-props': 0, // Prettier.
        "no-tabs": [1, {"allowIndentationTabs": true}],
        'no-trailing-spaces': ["error", { 
            "ignoreComments": true,
            "skipBlankLines": true,
        }]
    }
};