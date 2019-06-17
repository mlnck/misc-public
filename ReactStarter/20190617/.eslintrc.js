module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:flowtype/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "flowtype"
    ],
    "rules": {
        "flowtype/no-types-missing-file-annotation": 0,
        "allowSingleLine": true,
        "brace-style": ["warn", "allman", { "allowSingleLine": true }],
        "flowtype/delimiter-dangle": "off",
        "flowtype/no-weak-types": "off",
        "flowtype/semi": [0, "never"],
        "flowtype/space-after-type-colon": 0,
        "import/no-cycle": "off",
        "import/order": "off",
        "no-bitwise": "off",
        "no-nested-ternary": "off",
        "no-plusplus": "off",
        "no-restricted-syntax": "off",
        "one-var": "off",
        "prettier/prettier": "off",
        "semi": 0,
        "sort-imports": "off",
        "spaced-comment": "off"
    },
    "settings": {
        "flowtype": {
            "onlyFilesWithFlowAnnotation": false
        }
    }
};