    // // "babel-core": "^6.26.3",
    // "babel-loader": "^7.1.4",
    // // "babel-plugin-transform-es2015-destructuring": "^6.23.0",
    // // "babel-plugin-transform-object-assign": "^6.22.0",
    // // "babel-plugin-transform-object-rest-spread": "^6.26.0",
    // // "babel-plugin-transform-runtime": "^6.23.0",
    


    // "@babel/core": "^7.1.6",
    // "@babel/plugin-proposal-class-properties": "^7.1.0",
    // "@babel/plugin-proposal-object-rest-spread": "^7.0.0",
    // "@babel/plugin-transform-object-assign": "^7.0.0",
    // "@babel/plugin-transform-runtime": "^7.1.0",
    // "react-emotion": "^9.2.6",



    const bpmr = require('babel-plugin-module-resolver');

    function resolvePath(sourcePath, currentFile, opts) {
      if (sourcePath === 'markdown') {
        const base = currentFile.substring(__dirname.length).slice(0, -3);
        return `${__dirname}/docs/src/${base}/`;
      }

      return bpmr.resolvePath(sourcePath, currentFile, opts);
    }

    let defaultPresets;

    // We release a ES version of Material-UI.
    // It's something that matches the latest official supported features of JavaScript.
    // Nothing more (stage-1, etc), nothing less (require, etc).
    if (process.env.BABEL_ENV === 'es') {
      defaultPresets = [];
    } else {
      defaultPresets = [
        [
          '@babel/preset-env',
          {
            modules: ['modules', 'production-umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
          },
        ],
      ];
    }

    const defaultAlias = {
      '@material-ui/core': './packages/material-ui/src',
      '@material-ui/icons': './packages/material-ui-icons/src',
      '@material-ui/lab': './packages/material-ui-lab/src',
      '@material-ui/styles': './packages/material-ui-styles/src',
      '@material-ui/utils': './packages/material-ui-utils/src',
    };

    module.exports = {
      // presets: defaultPresets.concat(['@babel/preset-react']),
      plugin: [
        ['@babel/plugin-proposal-class-properties', {
          loose: true
        }],
        ['@babel/plugin-proposal-object-rest-spread', {
          loose: true
        }],
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-runtimed',
      ]
      // plugins: [
      //   ['@babel/plugin-proposal-class-properties', {
      //     loose: true
      //   }],
      //   ['@babel/plugin-proposal-object-rest-spread', {
      //     loose: true
      //   }],
      //   '@babel/plugin-transform-object-assign',
      //   '@babel/plugin-transform-runtime',
      // ],
      // env: {
      //   test: {
      //     sourceMaps: 'both',
      //     plugins: [
      //       [
      //         'babel-plugin-module-resolver',
      //         {
      //           root: ['./'],
      //           alias: defaultAlias,
      //         },
      //       ],
      //     ],
      //   },
      //   coverage: {
      //     plugins: [
      //       'babel-plugin-istanbul',
      //       [
      //         'babel-plugin-module-resolver',
      //         {
      //           root: ['./'],
      //           alias: defaultAlias,
      //         },
      //       ],
      //     ],
      //   },
      //   development: {
      //     plugins: [
      //       [
      //         'babel-plugin-module-resolver',
      //         {
      //           alias: {
      //             modules: './modules',
      //           },
      //         },
      //       ],
      //     ],
      //   },
      //   'docs-development': {
      //     plugins: [
      //       'babel-plugin-preval',
      //       [
      //         'babel-plugin-module-resolver',
      //         {
      //           alias: {
      //             ...defaultAlias,
      //             '@material-ui/docs': './packages/material-ui-docs/src',
      //             docs: './docs',
      //             modules: './modules',
      //             pages: './pages',
      //           },
      //           transformFunctions: ['require', 'require.context'],
      //           resolvePath,
      //         },
      //       ],
      //     ],
      //   },
      //   'docs-production': {
      //     plugins: [
      //       'babel-plugin-preval',
      //       [
      //         'babel-plugin-module-resolver',
      //         {
      //           alias: {
      //             ...defaultAlias,
      //             '@material-ui/docs': './packages/material-ui-docs/src',
      //             docs: './docs',
      //             modules: './modules',
      //             pages: './pages',
      //           },
      //           transformFunctions: ['require', 'require.context'],
      //           resolvePath,
      //         },
      //       ],
      //       'transform-react-constant-elements',
      //       'transform-dev-warning',
      //       ['react-remove-properties', {
      //         properties: ['data-mui-test']
      //       }],
      //       ['transform-react-remove-prop-types', {
      //         mode: 'remove'
      //       }],
      //     ],
      //   },
      //   es: {
      //     plugins: [
      //       'transform-react-constant-elements',
      //       'transform-dev-warning',
      //       ['react-remove-properties', {
      //         properties: ['data-mui-test']
      //       }],
      //       [
      //         'transform-react-remove-prop-types',
      //         {
      //           mode: 'wrap',
      //         },
      //       ],
      //     ],
      //     // It's most likely a babel bug.
      //     // We are using this ignore option in the CLI command but that has no effect.
      //     ignore: ['**/*.test.js'],
      //   },
      //   production: {
      //     plugins: [
      //       'transform-react-constant-elements',
      //       'transform-dev-warning',
      //       ['react-remove-properties', {
      //         properties: ['data-mui-test']
      //       }],
      //       [
      //         'transform-react-remove-prop-types',
      //         {
      //           mode: 'wrap',
      //         },
      //       ],
      //     ],
      //     // It's most likely a babel bug.
      //     // We are using this ignore option in the CLI command but that has no effect.
      //     ignore: ['**/*.test.js'],
      //   },
      //   'production-umd': {
      //     plugins: [
      //       'transform-react-constant-elements',
      //       'transform-dev-warning',
      //       ['react-remove-properties', {
      //         properties: ['data-mui-test']
      //       }],
      //       [
      //         'transform-react-remove-prop-types',
      //         {
      //           mode: 'wrap',
      //         },
      //       ],
      //     ],
      //   },
      // },
    };