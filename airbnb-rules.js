// 來自 https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules

import pluginImport from 'eslint-plugin-import';

const importRules = {
  // Static analysis:

  // ensure imports point to files/modules that can be resolved
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

  // ensure named imports coupled with named exports
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
  'import/named': 'error',

  // ensure default import coupled with default export
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
  'import/default': 'off',

  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/namespace.md
  'import/namespace': 'off',

  // Helpful warnings:

  // disallow invalid exports, e.g. multiple defaults
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/export.md
  'import/export': 'error',

  // do not allow a default import name to match a named export
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
  'import/no-named-as-default': 'error',

  // warn on accessing default export property names that are also named exports
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
  'import/no-named-as-default-member': 'error',

  // disallow use of jsdoc-marked-deprecated imports
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
  'import/no-deprecated': 'off',

  // Forbid the use of extraneous packages
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
  // paths are treated both as absolute paths, and relative to process.cwd()
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: [
        'test/**', // tape, common npm pattern
        'tests/**', // also common npm pattern
        'spec/**', // mocha, rspec-like pattern
        '**/__tests__/**', // jest pattern
        '**/__mocks__/**', // jest pattern
        'test.{js,jsx}', // repos with a single test file
        'test-*.{js,jsx}', // repos with multiple top-level test files
        '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
        '**/jest.config.js', // jest config
        '**/jest.setup.js', // jest setup
        '**/vue.config.js', // vue-cli config
        '**/webpack.config.js', // webpack config
        '**/webpack.config.*.js', // webpack config
        '**/rollup.config.js', // rollup config
        '**/rollup.config.*.js', // rollup config
        '**/gulpfile.js', // gulp config
        '**/gulpfile.*.js', // gulp config
        '**/Gruntfile{,.js}', // grunt config
        '**/protractor.conf.js', // protractor config
        '**/protractor.conf.*.js', // protractor config
        '**/karma.conf.js', // karma config
        'airbnb-rules.js', // 允許在 airbnb-rules.js 中 import dev 套件
      ],
      optionalDependencies: false,
    },
  ],

  // Forbid mutable exports
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
  'import/no-mutable-exports': 'error',

  // Module systems:

  // disallow require()
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
  'import/no-commonjs': 'off',

  // disallow AMD require/define
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-amd.md
  'import/no-amd': 'error',

  // No Node.js builtin modules
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
  'import/no-nodejs-modules': 'off',

  // Style guide:

  // disallow non-import statements appearing before import statements
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/first.md
  'import/first': 'error',

  // disallow non-import statements appearing before import statements
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/imports-first.md
  // deprecated: use `import/first`
  'import/imports-first': 'off',

  // disallow duplicate imports
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'import/no-duplicates': 'error',

  // disallow namespace imports
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
  'import/no-namespace': 'off',

  // Ensure consistent use of file extension within the import path
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/extensions.md
  'import/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
    },
  ],

  // ensure absolute imports are above relative imports and that unassigned imports are ignored
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md
  'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],

  // Require a newline after the last import/require in a group
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
  'import/newline-after-import': 'error',

  // Require modules with a single export to use a default export
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
  // 'import/prefer-default-export': 'error', // 允許單一 export 使用命名 export

  // Restrict which files can be imported in a given folder
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
  'import/no-restricted-paths': 'off',

  // Forbid modules to have too many dependencies
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
  'import/max-dependencies': ['off', { max: 10 }],

  // Forbid import of modules using absolute paths
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
  'import/no-absolute-path': 'error',

  // Forbid require() calls with expressions
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
  'import/no-dynamic-require': 'error',

  // prevent importing the submodules of other modules
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
  'import/no-internal-modules': [
    'off',
    {
      allow: [],
    },
  ],

  // Warn if a module could be mistakenly parsed as a script by a consumer
  // leveraging Unambiguous JavaScript Grammar
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
  // this should not be enabled until this proposal has at least been *presented* to TC39.
  // At the moment, it's not a thing.
  'import/unambiguous': 'off',

  // Forbid Webpack loader syntax in imports
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
  'import/no-webpack-loader-syntax': 'error',

  // Prevent unassigned imports
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
  // importing for side effects is perfectly acceptable, if you need side effects.
  'import/no-unassigned-import': 'off',

  // Prevent importing the default as if it were named
  // https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
  'import/no-named-default': 'error',

  // Reports if a module's default export is unnamed
  // https://github.com/import-js/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md
  'import/no-anonymous-default-export': [
    'off',
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],

  // This rule enforces that all exports are declared at the bottom of the file.
  // https://github.com/import-js/eslint-plugin-import/blob/98acd6afd04dcb6920b81330114e146dc8532ea4/docs/rules/exports-last.md
  'import/exports-last': 'off',

  // Reports when named exports are not grouped together in a single export declaration
  // or when multiple assignments to CommonJS module.exports or exports object are present
  // in a single file.
  // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/group-exports.md
  'import/group-exports': 'off',

  // forbid default exports. this is a terrible rule, do not use it.
  // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-default-export.md
  'import/no-default-export': 'off',

  // Prohibit named exports. this is a terrible rule, do not use it.
  // https://github.com/import-js/eslint-plugin-import/blob/1ec80fa35fa1819e2d35a70e68fb6a149fb57c5e/docs/rules/no-named-export.md
  'import/no-named-export': 'off',

  // Forbid a module from importing itself
  // https://github.com/import-js/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
  'import/no-self-import': 'error',

  // Forbid cyclical dependencies between modules
  // https://github.com/import-js/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
  // 'import/no-cycle': ['error', { maxDepth: '∞' }], // 允許 import cycle

  // Ensures that there are no useless path segments
  // https://github.com/import-js/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
  'import/no-useless-path-segments': ['error', { commonjs: true }],

  // dynamic imports require a leading comment with a webpackChunkName
  // https://github.com/import-js/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/dynamic-import-chunkname.md
  'import/dynamic-import-chunkname': [
    'off',
    {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
    },
  ],

  // Use this rule to prevent imports to folders in relative parent paths.
  // https://github.com/import-js/eslint-plugin-import/blob/c34f14f67f077acd5a61b3da9c0b0de298d20059/docs/rules/no-relative-parent-imports.md
  'import/no-relative-parent-imports': 'off',

  // Reports modules without any exports, or with unused exports
  // https://github.com/import-js/eslint-plugin-import/blob/f63dd261809de6883b13b6b5b960e6d7f42a7813/docs/rules/no-unused-modules.md
  'import/no-unused-modules': [
    'off',
    {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    },
  ],

  // Reports the use of import declarations with CommonJS exports in any module except for the main module.
  // https://github.com/import-js/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
  'import/no-import-module-exports': [
    'error',
    {
      exceptions: [],
    },
  ],

  // Use this rule to prevent importing packages through relative paths.
  // https://github.com/import-js/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
  'import/no-relative-packages': 'error',

  // enforce a consistent style for type specifiers (inline or top-level)
  // https://github.com/import-js/eslint-plugin-import/blob/d5fc8b670dc8e6903dbb7b0894452f60c03089f5/docs/rules/consistent-type-specifier-style.md
  'import/consistent-type-specifier-style': ['off', 'prefer-inline'],

  // Reports the use of empty named import blocks.
  // https://github.com/import-js/eslint-plugin-import/blob/d5fc8b670dc8e6903dbb7b0894452f60c03089f5/docs/rules/no-empty-named-blocks.md
  'import/no-empty-named-blocks': 'off',
};

const bestPracticeRules = {
  // enforces getter/setter pairs in objects
  // https://eslint.org/docs/rules/accessor-pairs
  'accessor-pairs': 'off',

  // enforces return statements in callbacks of array's methods
  // https://eslint.org/docs/rules/array-callback-return
  'array-callback-return': ['error', { allowImplicit: true }],

  // treat var statements as if they were block scoped
  // https://eslint.org/docs/rules/block-scoped-var
  'block-scoped-var': 'error',

  // specify the maximum cyclomatic complexity allowed in a program
  // https://eslint.org/docs/rules/complexity
  complexity: ['off', 20],

  // enforce that class methods use "this"
  // https://eslint.org/docs/rules/class-methods-use-this
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [],
    },
  ],

  // require return statements to either always or never specify values
  // https://eslint.org/docs/rules/consistent-return
  'consistent-return': 'error',

  // specify curly brace conventions for all control statements
  // https://eslint.org/docs/rules/curly
  curly: ['error', 'multi-line'], // multiline

  // require default case in switch statements
  // https://eslint.org/docs/rules/default-case
  'default-case': ['error', { commentPattern: '^no default$' }],

  // Enforce default clauses in switch statements to be last
  // https://eslint.org/docs/rules/default-case-last
  'default-case-last': 'error',

  // https://eslint.org/docs/rules/default-param-last
  'default-param-last': 'error',

  // encourages use of dot notation whenever possible
  // https://eslint.org/docs/rules/dot-notation
  'dot-notation': ['error', { allowKeywords: true }],

  // enforces consistent newlines before or after dots
  // https://eslint.org/docs/rules/dot-location
  'dot-location': ['error', 'property'],

  // require the use of === and !==
  // https://eslint.org/docs/rules/eqeqeq
  eqeqeq: ['error', 'always', { null: 'ignore' }],

  // Require grouped accessor pairs in object literals and classes
  // https://eslint.org/docs/rules/grouped-accessor-pairs
  'grouped-accessor-pairs': 'error',

  // make sure for-in loops have an if statement
  // https://eslint.org/docs/rules/guard-for-in
  'guard-for-in': 'error',

  // enforce a maximum number of classes per file
  // https://eslint.org/docs/rules/max-classes-per-file
  'max-classes-per-file': ['error', 1],

  // disallow the use of alert, confirm, and prompt
  // https://eslint.org/docs/rules/no-alert
  'no-alert': 'warn',

  // disallow use of arguments.caller or arguments.callee
  // https://eslint.org/docs/rules/no-caller
  'no-caller': 'error',

  // disallow lexical declarations in case/default clauses
  // https://eslint.org/docs/rules/no-case-declarations
  'no-case-declarations': 'error',

  // Disallow returning value in constructor
  // https://eslint.org/docs/rules/no-constructor-return
  'no-constructor-return': 'error',

  // disallow division operators explicitly at beginning of regular expression
  // https://eslint.org/docs/rules/no-div-regex
  'no-div-regex': 'off',

  // disallow else after a return in an if
  // https://eslint.org/docs/rules/no-else-return
  'no-else-return': ['error', { allowElseIf: false }],

  // disallow empty functions, except for standalone funcs/arrows
  // https://eslint.org/docs/rules/no-empty-function
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],

  // disallow empty destructuring patterns
  // https://eslint.org/docs/rules/no-empty-pattern
  'no-empty-pattern': 'error',

  // Disallow empty static blocks
  // https://eslint.org/docs/latest/rules/no-empty-static-block
  'no-empty-static-block': 'off',

  // disallow comparisons to null without a type-checking operator
  // https://eslint.org/docs/rules/no-eq-null
  'no-eq-null': 'off',

  // disallow use of eval()
  // https://eslint.org/docs/rules/no-eval
  'no-eval': 'error',

  // disallow adding to native types
  // https://eslint.org/docs/rules/no-extend-native
  'no-extend-native': 'error',

  // disallow unnecessary function binding
  // https://eslint.org/docs/rules/no-extra-bind
  'no-extra-bind': 'error',

  // disallow Unnecessary Labels
  // https://eslint.org/docs/rules/no-extra-label
  'no-extra-label': 'error',

  // disallow fallthrough of case statements
  // https://eslint.org/docs/rules/no-fallthrough
  'no-fallthrough': 'error',

  // disallow the use of leading or trailing decimal points in numeric literals
  // https://eslint.org/docs/rules/no-floating-decimal
  'no-floating-decimal': 'error',

  // disallow reassignments of native objects or read-only globals
  // https://eslint.org/docs/rules/no-global-assign
  'no-global-assign': ['error', { exceptions: [] }],

  // deprecated in favor of no-global-assign
  // https://eslint.org/docs/rules/no-native-reassign
  'no-native-reassign': 'off',

  // disallow implicit type conversions
  // https://eslint.org/docs/rules/no-implicit-coercion
  'no-implicit-coercion': [
    'off',
    {
      boolean: false,
      number: true,
      string: true,
      allow: [],
    },
  ],

  // disallow var and named functions in global scope
  // https://eslint.org/docs/rules/no-implicit-globals
  'no-implicit-globals': 'off',

  // disallow use of eval()-like methods
  // https://eslint.org/docs/rules/no-implied-eval
  'no-implied-eval': 'error',

  // disallow this keywords outside of classes or class-like objects
  // https://eslint.org/docs/rules/no-invalid-this
  'no-invalid-this': 'off',

  // disallow usage of __iterator__ property
  // https://eslint.org/docs/rules/no-iterator
  'no-iterator': 'error',

  // disallow use of labels for anything other than loops and switches
  // https://eslint.org/docs/rules/no-labels
  'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

  // disallow unnecessary nested blocks
  // https://eslint.org/docs/rules/no-lone-blocks
  'no-lone-blocks': 'error',

  // disallow creation of functions within loops
  // https://eslint.org/docs/rules/no-loop-func
  'no-loop-func': 'error',

  // disallow magic numbers
  // https://eslint.org/docs/rules/no-magic-numbers
  'no-magic-numbers': [
    'off',
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],

  // disallow use of multiple spaces
  // https://eslint.org/docs/rules/no-multi-spaces
  'no-multi-spaces': [
    'error',
    {
      ignoreEOLComments: false,
    },
  ],

  // disallow use of multiline strings
  // https://eslint.org/docs/rules/no-multi-str
  'no-multi-str': 'error',

  // disallow use of new operator when not part of the assignment or comparison
  // https://eslint.org/docs/rules/no-new
  'no-new': 'error',

  // disallow use of new operator for Function object
  // https://eslint.org/docs/rules/no-new-func
  'no-new-func': 'error',

  // disallows creating new instances of String, Number, and Boolean
  // https://eslint.org/docs/rules/no-new-wrappers
  'no-new-wrappers': 'error',

  // Disallow \8 and \9 escape sequences in string literals
  // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
  'no-nonoctal-decimal-escape': 'error',

  // Disallow calls to the Object constructor without an argument
  // https://eslint.org/docs/latest/rules/no-object-constructor
  'no-object-constructor': 'off',

  // disallow use of (old style) octal literals
  // https://eslint.org/docs/rules/no-octal
  'no-octal': 'error',

  // disallow use of octal escape sequences in string literals, such as
  // var foo = 'Copyright \251';
  // https://eslint.org/docs/rules/no-octal-escape
  'no-octal-escape': 'error',

  // disallow reassignment of function parameters
  // disallow parameter object manipulation except for specific exclusions
  // rule: https://eslint.org/docs/rules/no-param-reassign.html
  'no-param-reassign': [
    'error',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'acc', // for reduce accumulators
        'accumulator', // for reduce accumulators
        'e', // for e.returnvalue
        'ctx', // for Koa routing
        'context', // for Koa routing
        'req', // for Express requests
        'request', // for Express requests
        'res', // for Express responses
        'response', // for Express responses
        '$scope', // for Angular 1 scopes
        'staticContext', // for ReactRouter context
      ],
    },
  ],

  // disallow usage of __proto__ property
  // https://eslint.org/docs/rules/no-proto
  'no-proto': 'error',

  // disallow declaring the same variable more than once
  // https://eslint.org/docs/rules/no-redeclare
  'no-redeclare': 'error',

  // disallow certain object properties
  // https://eslint.org/docs/rules/no-restricted-properties
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],

  // disallow use of assignment in return statement
  // https://eslint.org/docs/rules/no-return-assign
  'no-return-assign': ['error', 'always'],

  // disallow redundant `return await`
  // https://eslint.org/docs/rules/no-return-await
  'no-return-await': 'error',

  // disallow use of `javascript:` urls.
  // https://eslint.org/docs/rules/no-script-url
  'no-script-url': 'error',

  // disallow self assignment
  // https://eslint.org/docs/rules/no-self-assign
  'no-self-assign': [
    'error',
    {
      props: true,
    },
  ],

  // disallow comparisons where both sides are exactly the same
  // https://eslint.org/docs/rules/no-self-compare
  'no-self-compare': 'error',

  // disallow use of comma operator
  // https://eslint.org/docs/rules/no-sequences
  'no-sequences': 'error',

  // restrict what can be thrown as an exception
  // https://eslint.org/docs/rules/no-throw-literal
  'no-throw-literal': 'error',

  // disallow unmodified conditions of loops
  // https://eslint.org/docs/rules/no-unmodified-loop-condition
  'no-unmodified-loop-condition': 'off',

  // disallow usage of expressions in statement position
  // https://eslint.org/docs/rules/no-unused-expressions
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],

  // disallow unused labels
  // https://eslint.org/docs/rules/no-unused-labels
  'no-unused-labels': 'error',

  // disallow unnecessary .call() and .apply()
  // https://eslint.org/docs/rules/no-useless-call
  'no-useless-call': 'off',

  // Disallow unnecessary catch clauses
  // https://eslint.org/docs/rules/no-useless-catch
  'no-useless-catch': 'error',

  // disallow useless string concatenation
  // https://eslint.org/docs/rules/no-useless-concat
  'no-useless-concat': 'error',

  // disallow unnecessary string escaping
  // https://eslint.org/docs/rules/no-useless-escape
  'no-useless-escape': 'error',

  // disallow redundant return; keywords
  // https://eslint.org/docs/rules/no-useless-return
  'no-useless-return': 'error',

  // disallow use of void operator
  // https://eslint.org/docs/rules/no-void
  'no-void': 'error',

  // disallow usage of configurable warning terms in comments: e.g. todo
  // https://eslint.org/docs/rules/no-warning-comments
  'no-warning-comments': ['off', { terms: ['todo', 'fixme', 'xxx'], location: 'start' }],

  // disallow use of the with statement
  // https://eslint.org/docs/rules/no-with
  'no-with': 'error',

  // require using Error objects as Promise rejection reasons
  // https://eslint.org/docs/rules/prefer-promise-reject-errors
  'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

  // Suggest using named capture group in regular expression
  // https://eslint.org/docs/rules/prefer-named-capture-group
  'prefer-named-capture-group': 'off',

  // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
  // https://eslint.org/docs/rules/prefer-object-has-own
  'prefer-object-has-own': 'off',

  // https://eslint.org/docs/rules/prefer-regex-literals
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],

  // require use of the second argument for parseInt()
  // https://eslint.org/docs/rules/radix
  radix: 'error',

  // require `await` in `async function` (note: this is a horrible rule that should never be used)
  // https://eslint.org/docs/rules/require-await
  'require-await': 'off',

  // Enforce the use of u flag on RegExp
  // https://eslint.org/docs/rules/require-unicode-regexp
  'require-unicode-regexp': 'off',

  // requires to declare all vars on top of their containing scope
  // https://eslint.org/docs/rules/vars-on-top
  'vars-on-top': 'error',

  // require immediate function invocation to be wrapped in parentheses
  // https://eslint.org/docs/rules/wrap-iife.html
  'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

  // require or disallow Yoda conditions
  // https://eslint.org/docs/rules/yoda
  yoda: 'error',
};

const errorRules = {
  // Enforce “for” loop update clause moving the counter in the right direction
  // https://eslint.org/docs/rules/for-direction
  'for-direction': 'error',

  // Enforces that a return statement is present in property getters
  // https://eslint.org/docs/rules/getter-return
  'getter-return': ['error', { allowImplicit: true }],

  // disallow using an async function as a Promise executor
  // https://eslint.org/docs/rules/no-async-promise-executor
  'no-async-promise-executor': 'error',

  // Disallow await inside of loops
  // https://eslint.org/docs/rules/no-await-in-loop
  'no-await-in-loop': 'error',

  // Disallow comparisons to negative zero
  // https://eslint.org/docs/rules/no-compare-neg-zero
  'no-compare-neg-zero': 'error',

  // disallow assignment in conditional expressions
  'no-cond-assign': ['error', 'always'],

  // disallow use of console
  // 'no-console': 'warn', // 允許 console

  // Disallows expressions where the operation doesn't affect the value
  // https://eslint.org/docs/rules/no-constant-binary-expression
  'no-constant-binary-expression': 'off',

  // disallow use of constant expressions in conditions
  'no-constant-condition': 'warn',

  // disallow control characters in regular expressions
  'no-control-regex': 'error',

  // disallow use of debugger
  'no-debugger': 'error',

  // disallow duplicate arguments in functions
  'no-dupe-args': 'error',

  // Disallow duplicate conditions in if-else-if chains
  // https://eslint.org/docs/rules/no-dupe-else-if
  'no-dupe-else-if': 'error',

  // disallow duplicate keys when creating object literals
  'no-dupe-keys': 'error',

  // disallow a duplicate case label.
  'no-duplicate-case': 'error',

  // disallow empty statements
  'no-empty': 'error',

  // disallow the use of empty character classes in regular expressions
  'no-empty-character-class': 'error',

  // disallow assigning to the exception in a catch block
  'no-ex-assign': 'error',

  // disallow double-negation boolean casts in a boolean context
  // https://eslint.org/docs/rules/no-extra-boolean-cast
  'no-extra-boolean-cast': 'error',

  // disallow unnecessary parentheses
  // https://eslint.org/docs/rules/no-extra-parens
  'no-extra-parens': [
    'off',
    'all',
    {
      conditionalAssign: true,
      nestedBinaryExpressions: false,
      returnAssign: false,
      ignoreJSX: 'all', // delegate to eslint-plugin-react
      enforceForArrowConditionals: false,
    },
  ],

  // disallow unnecessary semicolons
  'no-extra-semi': 'error',

  // disallow overwriting functions written as function declarations
  'no-func-assign': 'error',

  // https://eslint.org/docs/rules/no-import-assign
  'no-import-assign': 'error',

  // disallow function or variable declarations in nested blocks
  'no-inner-declarations': 'error',

  // disallow invalid regular expression strings in the RegExp constructor
  'no-invalid-regexp': 'error',

  // disallow irregular whitespace outside of strings and comments
  'no-irregular-whitespace': 'error',

  // Disallow Number Literals That Lose Precision
  // https://eslint.org/docs/rules/no-loss-of-precision
  'no-loss-of-precision': 'error',

  // Disallow characters which are made with multiple code points in character class syntax
  // https://eslint.org/docs/rules/no-misleading-character-class
  'no-misleading-character-class': 'error',

  // disallow the use of object properties of the global object (Math and JSON) as functions
  'no-obj-calls': 'error',

  // Disallow new operators with global non-constructor functions
  // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
  'no-new-native-nonconstructor': 'off',

  // Disallow returning values from Promise executor functions
  // https://eslint.org/docs/rules/no-promise-executor-return
  'no-promise-executor-return': 'error',

  // disallow use of Object.prototypes builtins directly
  // https://eslint.org/docs/rules/no-prototype-builtins
  'no-prototype-builtins': 'error',

  // disallow multiple spaces in a regular expression literal
  'no-regex-spaces': 'error',

  // Disallow returning values from setters
  // https://eslint.org/docs/rules/no-setter-return
  'no-setter-return': 'error',

  // disallow sparse arrays
  'no-sparse-arrays': 'error',

  // Disallow template literal placeholder syntax in regular strings
  // https://eslint.org/docs/rules/no-template-curly-in-string
  'no-template-curly-in-string': 'error',

  // Avoid code that looks like two expressions but is actually one
  // https://eslint.org/docs/rules/no-unexpected-multiline
  'no-unexpected-multiline': 'error',

  // disallow unreachable statements after a return, throw, continue, or break statement
  'no-unreachable': 'error',

  // Disallow loops with a body that allows only one iteration
  // https://eslint.org/docs/rules/no-unreachable-loop
  'no-unreachable-loop': [
    'error',
    {
      ignore: [], // WhileStatement, DoWhileStatement, ForStatement, ForInStatement, ForOfStatement
    },
  ],

  // disallow return/throw/break/continue inside finally blocks
  // https://eslint.org/docs/rules/no-unsafe-finally
  'no-unsafe-finally': 'error',

  // disallow negating the left operand of relational operators
  // https://eslint.org/docs/rules/no-unsafe-negation
  'no-unsafe-negation': 'error',

  // disallow use of optional chaining in contexts where the undefined value is not allowed
  // https://eslint.org/docs/rules/no-unsafe-optional-chaining
  'no-unsafe-optional-chaining': ['error', { disallowArithmeticOperators: true }],

  // Disallow Unused Private Class Members
  // https://eslint.org/docs/rules/no-unused-private-class-members
  'no-unused-private-class-members': 'off',

  // Disallow useless backreferences in regular expressions
  // https://eslint.org/docs/rules/no-useless-backreference
  'no-useless-backreference': 'error',

  // disallow negation of the left operand of an in expression
  // deprecated in favor of no-unsafe-negation
  'no-negated-in-lhs': 'off',

  // Disallow assignments that can lead to race conditions due to usage of await or yield
  // https://eslint.org/docs/rules/require-atomic-updates
  // note: not enabled because it is very buggy
  'require-atomic-updates': 'off',

  // disallow comparisons with the value NaN
  'use-isnan': 'error',

  // ensure JSDoc comments are valid
  // https://eslint.org/docs/rules/valid-jsdoc
  'valid-jsdoc': 'off',

  // ensure that the results of typeof are compared against a valid string
  // https://eslint.org/docs/rules/valid-typeof
  'valid-typeof': ['error', { requireStringLiterals: true }],
};

const es6Rules = {
  // enforces no braces where they can be omitted
  // https://eslint.org/docs/rules/arrow-body-style
  'arrow-body-style': [
    'error',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],

  // require parens in arrow function arguments
  // https://eslint.org/docs/rules/arrow-parens
  'arrow-parens': ['error', 'always'],

  // require space before/after arrow function's arrow
  // https://eslint.org/docs/rules/arrow-spacing
  'arrow-spacing': ['error', { before: true, after: true }],

  // verify super() callings in constructors
  'constructor-super': 'error',

  // enforce the spacing around the * in generator functions
  // https://eslint.org/docs/rules/generator-star-spacing
  'generator-star-spacing': ['error', { before: false, after: true }],

  // disallow modifying variables of class declarations
  // https://eslint.org/docs/rules/no-class-assign
  'no-class-assign': 'error',

  // disallow arrow functions where they could be confused with comparisons
  // https://eslint.org/docs/rules/no-confusing-arrow
  'no-confusing-arrow': [
    'error',
    {
      allowParens: true,
    },
  ],

  // disallow modifying variables that are declared using const
  'no-const-assign': 'error',

  // disallow duplicate class members
  // https://eslint.org/docs/rules/no-dupe-class-members
  'no-dupe-class-members': 'error',

  // disallow importing from the same path more than once
  // https://eslint.org/docs/rules/no-duplicate-imports
  // replaced by https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
  'no-duplicate-imports': 'off',

  // disallow symbol constructor
  // https://eslint.org/docs/rules/no-new-symbol
  'no-new-symbol': 'error',

  // Disallow specified names in exports
  // https://eslint.org/docs/rules/no-restricted-exports
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: [
        'default', // use `export default` to provide a default export
        'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
      ],
    },
  ],

  // disallow specific imports
  // https://eslint.org/docs/rules/no-restricted-imports
  'no-restricted-imports': [
    'off',
    {
      paths: [],
      patterns: [],
    },
  ],

  // disallow to use this/super before super() calling in constructors.
  // https://eslint.org/docs/rules/no-this-before-super
  'no-this-before-super': 'error',

  // disallow useless computed property keys
  // https://eslint.org/docs/rules/no-useless-computed-key
  'no-useless-computed-key': 'error',

  // disallow unnecessary constructor
  // https://eslint.org/docs/rules/no-useless-constructor
  'no-useless-constructor': 'error',

  // disallow renaming import, export, and destructured assignments to the same name
  // https://eslint.org/docs/rules/no-useless-rename
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],

  // require let or const instead of var
  'no-var': 'error',

  // require method and property shorthand syntax for object literals
  // https://eslint.org/docs/rules/object-shorthand
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],

  // suggest using arrow functions as callbacks
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],

  // suggest using of const declaration for variables that are never modified after declared
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],

  // Prefer destructuring from arrays and objects
  // https://eslint.org/docs/rules/prefer-destructuring
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],

  // disallow parseInt() in favor of binary, octal, and hexadecimal literals
  // https://eslint.org/docs/rules/prefer-numeric-literals
  'prefer-numeric-literals': 'error',

  // suggest using Reflect methods where applicable
  // https://eslint.org/docs/rules/prefer-reflect
  'prefer-reflect': 'off',

  // use rest parameters instead of arguments
  // https://eslint.org/docs/rules/prefer-rest-params
  'prefer-rest-params': 'error',

  // suggest using the spread syntax instead of .apply()
  // https://eslint.org/docs/rules/prefer-spread
  'prefer-spread': 'error',

  // suggest using template literals instead of string concatenation
  // https://eslint.org/docs/rules/prefer-template
  'prefer-template': 'error',

  // disallow generator functions that do not have yield
  // https://eslint.org/docs/rules/require-yield
  'require-yield': 'error',

  // enforce spacing between object rest-spread
  // https://eslint.org/docs/rules/rest-spread-spacing
  'rest-spread-spacing': ['error', 'never'],

  // import sorting
  // https://eslint.org/docs/rules/sort-imports
  'sort-imports': [
    'off',
    {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],

  // require a Symbol description
  // https://eslint.org/docs/rules/symbol-description
  'symbol-description': 'error',

  // enforce usage of spacing in template strings
  // https://eslint.org/docs/rules/template-curly-spacing
  'template-curly-spacing': 'error',

  // enforce spacing around the * in yield* expressions
  // https://eslint.org/docs/rules/yield-star-spacing
  'yield-star-spacing': ['error', 'after'],
};

const styleRules = {
  // enforce line breaks after opening and before closing array brackets
  // https://eslint.org/docs/rules/array-bracket-newline
  'array-bracket-newline': ['off', 'consistent'], // object option alternative: { multiline: true, minItems: 3 }

  // enforce line breaks between array elements
  // https://eslint.org/docs/rules/array-element-newline
  'array-element-newline': ['off', { multiline: true, minItems: 3 }],

  // enforce spacing inside array brackets
  'array-bracket-spacing': ['error', 'never'],

  // enforce spacing inside single-line blocks
  // https://eslint.org/docs/rules/block-spacing
  'block-spacing': ['error', 'always'],

  // enforce one true brace style
  'brace-style': ['error', '1tbs', { allowSingleLine: true }],

  // require camel case names
  camelcase: ['error', { properties: 'never', ignoreDestructuring: false }],

  // enforce or disallow capitalization of the first letter of a comment
  // https://eslint.org/docs/rules/capitalized-comments
  'capitalized-comments': [
    'off',
    'never',
    {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    },
  ],

  // require trailing commas in multiline object literals
  'comma-dangle': [
    'error',
    {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    },
  ],

  // enforce spacing before and after comma
  'comma-spacing': ['error', { before: false, after: true }],

  // enforce one true comma style
  'comma-style': [
    'error',
    'last',
    {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      },
    },
  ],

  // disallow padding inside computed properties
  'computed-property-spacing': ['error', 'never'],

  // enforces consistent naming when capturing the current execution context
  'consistent-this': 'off',

  // enforce newline at the end of file, with no multiple empty lines
  'eol-last': ['error', 'always'],

  // https://eslint.org/docs/rules/function-call-argument-newline
  'function-call-argument-newline': ['error', 'consistent'],

  // enforce spacing between functions and their invocations
  // https://eslint.org/docs/rules/func-call-spacing
  'func-call-spacing': ['error', 'never'],

  // requires function names to match the name of the variable or property to which they are
  // assigned
  // https://eslint.org/docs/rules/func-name-matching
  'func-name-matching': [
    'off',
    'always',
    {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    },
  ],

  // require function expressions to have a name
  // https://eslint.org/docs/rules/func-names
  'func-names': 'warn',

  // enforces use of function declarations or expressions
  // https://eslint.org/docs/rules/func-style
  'func-style': ['off', 'expression'],

  // require line breaks inside function parentheses if there are line breaks between parameters
  // https://eslint.org/docs/rules/function-paren-newline
  'function-paren-newline': ['error', 'multiline-arguments'],

  // disallow specified identifiers
  // https://eslint.org/docs/rules/id-denylist
  'id-denylist': 'off',

  // this option enforces minimum and maximum identifier lengths
  // (variable names, property names etc.)
  'id-length': 'off',

  // require identifiers to match the provided regular expression
  'id-match': 'off',

  // Enforce the location of arrow function bodies with implicit returns
  // https://eslint.org/docs/rules/implicit-arrow-linebreak
  'implicit-arrow-linebreak': ['error', 'beside'],

  // this option sets a specific tab width for your code
  // https://eslint.org/docs/rules/indent
  indent: [
    'error',
    2,
    {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      // MemberExpression: null,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
      ignoredNodes: [
        'JSXElement',
        'JSXElement > *',
        'JSXAttribute',
        'JSXIdentifier',
        'JSXNamespacedName',
        'JSXMemberExpression',
        'JSXSpreadAttribute',
        'JSXExpressionContainer',
        'JSXOpeningElement',
        'JSXClosingElement',
        'JSXFragment',
        'JSXOpeningFragment',
        'JSXClosingFragment',
        'JSXText',
        'JSXEmptyExpression',
        'JSXSpreadChild',
      ],
      ignoreComments: false,
    },
  ],

  // specify whether double or single quotes should be used in JSX attributes
  // https://eslint.org/docs/rules/jsx-quotes
  'jsx-quotes': ['off', 'prefer-double'],

  // enforces spacing between keys and values in object literal properties
  'key-spacing': ['error', { beforeColon: false, afterColon: true }],

  // require a space before & after certain keywords
  'keyword-spacing': [
    'error',
    {
      before: true,
      after: true,
      overrides: {
        return: { after: true },
        throw: { after: true },
        case: { after: true },
      },
    },
  ],

  // enforce position of line comments
  // https://eslint.org/docs/rules/line-comment-position
  'line-comment-position': [
    'off',
    {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    },
  ],

  // disallow mixed 'LF' and 'CRLF' as linebreaks
  // https://eslint.org/docs/rules/linebreak-style
  'linebreak-style': ['error', 'unix'],

  // require or disallow an empty line between class members
  // https://eslint.org/docs/rules/lines-between-class-members
  'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

  // enforces empty lines around comments
  'lines-around-comment': 'off',

  // require or disallow newlines around directives
  // https://eslint.org/docs/rules/lines-around-directive
  'lines-around-directive': [
    'error',
    {
      before: 'always',
      after: 'always',
    },
  ],

  // Require or disallow logical assignment logical operator shorthand
  // https://eslint.org/docs/latest/rules/logical-assignment-operators
  'logical-assignment-operators': [
    'off',
    'always',
    {
      enforceForIfStatements: true,
    },
  ],

  // specify the maximum depth that blocks can be nested
  'max-depth': ['off', 4],

  // specify the maximum length of a line in your program
  // https://eslint.org/docs/rules/max-len
  'max-len': [
    'error',
    100,
    2,
    {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],

  // specify the max number of lines in a file
  // https://eslint.org/docs/rules/max-lines
  'max-lines': [
    'off',
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],

  // enforce a maximum function length
  // https://eslint.org/docs/rules/max-lines-per-function
  'max-lines-per-function': [
    'off',
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],

  // specify the maximum depth callbacks can be nested
  'max-nested-callbacks': 'off',

  // limits the number of parameters that can be used in the function declaration.
  'max-params': ['off', 3],

  // specify the maximum number of statement allowed in a function
  'max-statements': ['off', 10],

  // restrict the number of statements per line
  // https://eslint.org/docs/rules/max-statements-per-line
  'max-statements-per-line': ['off', { max: 1 }],

  // enforce a particular style for multiline comments
  // https://eslint.org/docs/rules/multiline-comment-style
  'multiline-comment-style': ['off', 'starred-block'],

  // require multiline ternary
  // https://eslint.org/docs/rules/multiline-ternary
  'multiline-ternary': ['off', 'never'],

  // require a capital letter for constructors
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    },
  ],

  // disallow the omission of parentheses when invoking a constructor with no arguments
  // https://eslint.org/docs/rules/new-parens
  'new-parens': 'error',

  // allow/disallow an empty newline after var statement
  'newline-after-var': 'off',

  // https://eslint.org/docs/rules/newline-before-return
  'newline-before-return': 'off',

  // enforces new line after each method call in the chain to make it
  // more readable and easy to maintain
  // https://eslint.org/docs/rules/newline-per-chained-call
  'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

  // disallow use of the Array constructor
  'no-array-constructor': 'error',

  // disallow use of bitwise operators
  // https://eslint.org/docs/rules/no-bitwise
  'no-bitwise': 'error',

  // disallow use of the continue statement
  // https://eslint.org/docs/rules/no-continue
  'no-continue': 'error',

  // disallow comments inline after code
  'no-inline-comments': 'off',

  // disallow if as the only statement in an else block
  // https://eslint.org/docs/rules/no-lonely-if
  'no-lonely-if': 'error',

  // disallow un-paren'd mixes of different operators
  // https://eslint.org/docs/rules/no-mixed-operators
  'no-mixed-operators': [
    'error',
    {
      // the list of arithmetic groups disallows mixing `%` and `**`
      // with other arithmetic operators.
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        ['&', '|', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!=='],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    },
  ],

  // disallow mixed spaces and tabs for indentation
  'no-mixed-spaces-and-tabs': 'error',

  // disallow use of chained assignment expressions
  // https://eslint.org/docs/rules/no-multi-assign
  'no-multi-assign': ['error'],

  // disallow multiple empty lines, only one newline at the end, and no new lines at the beginning
  // https://eslint.org/docs/rules/no-multiple-empty-lines
  'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

  // disallow negated conditions
  // https://eslint.org/docs/rules/no-negated-condition
  'no-negated-condition': 'off',

  // disallow nested ternary expressions
  'no-nested-ternary': 'error',

  // disallow use of the Object constructor
  'no-new-object': 'error',

  // disallow use of unary operators, ++ and --
  // https://eslint.org/docs/rules/no-plusplus
  'no-plusplus': 'error',

  // disallow certain syntax forms
  // https://eslint.org/docs/rules/no-restricted-syntax
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
    },
    {
      selector: 'ForOfStatement',
      message:
        'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],

  // disallow space between function identifier and application
  // deprecated in favor of func-call-spacing
  'no-spaced-func': 'off',

  // disallow tab characters entirely
  'no-tabs': 'error',

  // disallow the use of ternary operators
  'no-ternary': 'off',

  // disallow trailing whitespace at the end of lines
  'no-trailing-spaces': [
    'error',
    {
      skipBlankLines: false,
      ignoreComments: false,
    },
  ],

  // disallow dangling underscores in identifiers
  // https://eslint.org/docs/rules/no-underscore-dangle
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],

  // disallow the use of Boolean literals in conditional expressions
  // also, prefer `a || b` over `a ? a : b`
  // https://eslint.org/docs/rules/no-unneeded-ternary
  'no-unneeded-ternary': ['error', { defaultAssignment: false }],

  // disallow whitespace before properties
  // https://eslint.org/docs/rules/no-whitespace-before-property
  'no-whitespace-before-property': 'error',

  // enforce the location of single-line statements
  // https://eslint.org/docs/rules/nonblock-statement-body-position
  'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

  // require padding inside curly braces
  'object-curly-spacing': ['error', 'always'],

  // enforce line breaks between braces
  // https://eslint.org/docs/rules/object-curly-newline
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
    },
  ],

  // enforce "same line" or "multiple line" on object properties.
  // https://eslint.org/docs/rules/object-property-newline
  'object-property-newline': [
    'error',
    {
      allowAllPropertiesOnSameLine: true,
    },
  ],

  // allow just one var statement per function
  'one-var': ['error', 'never'],

  // require a newline around variable declaration
  // https://eslint.org/docs/rules/one-var-declaration-per-line
  'one-var-declaration-per-line': ['error', 'always'],

  // require assignment operator shorthand where possible or prohibit it entirely
  // https://eslint.org/docs/rules/operator-assignment
  'operator-assignment': ['error', 'always'],

  // Requires operator at the beginning of the line in multiline statements
  // https://eslint.org/docs/rules/operator-linebreak
  'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

  // disallow padding within blocks
  'padded-blocks': [
    'error',
    {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    },
    {
      allowSingleLineBlocks: true,
    },
  ],

  // Require or disallow padding lines between statements
  // https://eslint.org/docs/rules/padding-line-between-statements
  'padding-line-between-statements': 'off',

  // Disallow the use of Math.pow in favor of the ** operator
  // https://eslint.org/docs/rules/prefer-exponentiation-operator
  'prefer-exponentiation-operator': 'error',

  // Prefer use of an object spread over Object.assign
  // https://eslint.org/docs/rules/prefer-object-spread
  'prefer-object-spread': 'error',

  // require quotes around object literal property names
  // https://eslint.org/docs/rules/quote-props.html
  'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

  // specify whether double or single quotes should be used
  quotes: ['error', 'single', { avoidEscape: true }],

  // do not require jsdoc
  // https://eslint.org/docs/rules/require-jsdoc
  'require-jsdoc': 'off',

  // require or disallow use of semicolons instead of ASI
  semi: ['error', 'always'],

  // enforce spacing before and after semicolons
  'semi-spacing': ['error', { before: false, after: true }],

  // Enforce location of semicolons
  // https://eslint.org/docs/rules/semi-style
  'semi-style': ['error', 'last'],

  // requires object keys to be sorted
  'sort-keys': ['off', 'asc', { caseSensitive: false, natural: true }],

  // sort variables within the same declaration block
  'sort-vars': 'off',

  // require or disallow space before blocks
  'space-before-blocks': 'error',

  // require or disallow space before function opening parenthesis
  // https://eslint.org/docs/rules/space-before-function-paren
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],

  // require or disallow spaces inside parentheses
  'space-in-parens': ['error', 'never'],

  // require spaces around operators
  'space-infix-ops': 'error',

  // Require or disallow spaces before/after unary operators
  // https://eslint.org/docs/rules/space-unary-ops
  'space-unary-ops': [
    'error',
    {
      words: true,
      nonwords: false,
      overrides: {},
    },
  ],

  // require or disallow a space immediately following the // or /* in a comment
  // https://eslint.org/docs/rules/spaced-comment
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'], // space here to support sprockets directives, slash for TS /// comments
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'], // space here to support sprockets directives and flow comment types
        balanced: true,
      },
    },
  ],

  // Enforce spacing around colons of switch statements
  // https://eslint.org/docs/rules/switch-colon-spacing
  'switch-colon-spacing': ['error', { after: true, before: false }],

  // Require or disallow spacing between template tags and their literals
  // https://eslint.org/docs/rules/template-tag-spacing
  'template-tag-spacing': ['error', 'never'],

  // require or disallow the Unicode Byte Order Mark
  // https://eslint.org/docs/rules/unicode-bom
  'unicode-bom': ['error', 'never'],

  // require regex literals to be wrapped in parentheses
  'wrap-regex': 'off',
};

const variableRules = {
  // enforce or disallow variable initializations at definition
  'init-declarations': 'off',

  // disallow the catch clause parameter name being the same as a variable in the outer scope
  'no-catch-shadow': 'off',

  // disallow deletion of variables
  'no-delete-var': 'error',

  // disallow labels that share a name with a variable
  // https://eslint.org/docs/rules/no-label-var
  'no-label-var': 'error',

  // disallow specific globals
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message:
        'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
    },
    {
      name: 'isNaN',
      message:
        'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
    },
  ],

  // disallow declaration of variables already declared in the outer scope
  'no-shadow': 'error',

  // disallow shadowing of names such as arguments
  'no-shadow-restricted-names': 'error',

  // disallow use of undeclared variables unless mentioned in a /*global */ block
  'no-undef': 'error',

  // disallow use of undefined when initializing variables
  'no-undef-init': 'error',

  // disallow use of undefined variable
  // https://eslint.org/docs/rules/no-undefined
  'no-undefined': 'off',

  // disallow declaration of variables that are not used in the code
  'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

  // disallow use of variables before they are defined
  // 'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  'no-use-before-define': ['error', { functions: false, classes: true, variables: false }], // 允許 function 和變數在定義前使用
};

export default [
  {
    name: 'airbnb-style-rules',
    plugins: {
      import: pluginImport,
    },
    settings: {
      'import/resolver': {
        'eslint-import-resolver-custom-alias': {
          alias: {
            '@': './src',
          },
          extensions: ['.js', '.vue'],
        },
      },
      'import/extensions': ['.js', '.mjs', '.jsx'],
      'import/core-modules': [
        'vite',
        '@vitejs/plugin-vue',
        'vite-plugin-vue-devtools',
        'quasar',
        '@quasar/vite-plugin',
        'swiper/vue',
        'swiper/modules',
        'swiper/css',
        'swiper/css/pagination',
        'swiper/css/autoplay',
        'vue-qrcode-reader',
      ],
      'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    },
    rules: {
      ...importRules,
      ...bestPracticeRules,
      ...errorRules,
      ...es6Rules,
      ...styleRules,
      ...variableRules,
    },
  },
];
