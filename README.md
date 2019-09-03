# parallax-vue

> A Vue.js wrapper for Parallax.js

## Install

``` bash
# install package
npm install --save @fnndk/parallax-vue

# Register the component

import Vue from 'vue'
import Parallax from 'parallax-vue'
Vue.component('parallax', Parallax)

# In HTML
<parallax>
	<img data-depth="0.4" src="bg.png"/>
	<img data-depth="0.2" src="secondElement.png"/>
	<img data-depth="0.1" src="firstElement.png"/>
</parallax>

```
