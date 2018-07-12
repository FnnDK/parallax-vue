// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true,
	},
	// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
	// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
	extends: ['plugin:vue/essential', 'airbnb-base'],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// check if imports actually resolve
	settings: {
		'import/resolver': {
			webpack: {
				config: 'build/webpack.base.conf.js'
			}
		}
	},
	// add your custom rules here
	rules: {
		indent: [2, 'tab', { SwitchCase: 1 }],
		'no-param-reassign': ['error', { props: false }],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-bitwise': ['error', { allow: ['&'] }],
		'no-tabs': 0,
		'no-cond-assign': 0,
		'consistent-return': 0,
		'prefer-template': 0,
		'import/first': 0,
		'quote-props': 0,
		'no-plusplus': 0,
		'no-useless-escape': 0,
		'no-nested-ternary': 0,
		'object-shorthand': 0,
		'linebreak-style': 0,
		'default-case': 0,
		'no-continue': 0,
		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			js: 'never',
			vue: 'never'
		}],
		// allow optionalDependencies
		'import/no-extraneous-dependencies': ['error', {
			optionalDependencies: ['test/unit/index.js']
		}],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	}
}
