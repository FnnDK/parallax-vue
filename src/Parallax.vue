<template>
	<div ref="scene"><slot/></div>
</template>

<script>

import Parallax from 'parallax-js';

export default {
	name: 'parallax',

	props: {
		disabled: Boolean,

		// ParallaxJS properties
		relativeInput: Boolean,
		clipRelativeInput: Boolean,
		hoverOnly: Boolean,
		inputElement: Object,

		calibrateX: Boolean,
		calibrateY: { type: Boolean, default: true },

		invertX: { type: Boolean, default: true },
		invertY: { type: Boolean, default: true },

		limitX: Boolean,
		limitY: Boolean,

		scalarX: { type: Number, default: 10 },
		scalarY: { type: Number, default: 10 },

		frictionX: { type: Number, default: 0.1 },
		frictionY: { type: Number, default: 0.1 },

		originX: { type: Number, default: 0.5 },
		originY: { type: Number, default: 0.5 },

		precision: { type: Number, default: 1 },
		selector: String,
		pointerEvents: Boolean,
		onReady: Function,
	},

	data() {
		return {
			instance: null,
		};
	},

	mounted() {
		const { scene } = this.$refs;
		if (!scene) return;

		const { disabled, ...props } = this.$props;
		this.instance = new Parallax(scene, props);


		// Watch all ParallaxJS properties
		Object.keys(props).forEach((p) => {
			this.$watch(p, (v, o) => {
				if (v !== o) this.instance[p] = v;
			});
		});
	},

	destroyed() {
		this.instance.destroy();
	},

	watch: {
		disabled(v, o) {
			if (v === o) return;
			if (v) this.instance.disable();
			else this.instance.enable();
		},
	},
};

</script>

<style>

</style>