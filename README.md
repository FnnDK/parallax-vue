# parallax-vue

> A Vue.js wrapper for Parallax.js

## Install

``` bash
# install package
npm install https://github.com/FnnDK/parallax-vue --save

# Register the component

import Vue from 'vue'
import Parallax from 'parallax-vue'
Vue.component('parallax', Parallax)

# In HTML
<parallax class="parallax-intro">
	<img data-depth="0.4" src="bg.png"/>
	<img data-depth="0.2" src="secondElement.png"/>
	<img data-depth="0.1" src="firstElement.png"/>
</parallax>

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
