<template>
	<button :style="styles">
		<slot></slot>
	</button>
</template>
<script>
export default {
	name: 'XButton',
	props: {
		padding: {
			type: Array,
			default: function() {
				return [10, 25]; // x y
			}
		},
		fontsize: {
			type: [Number, String],
			default: '14'
		},
		width: {
			type: [Number, String]
		},
		height: {
			type: [Number, String]
		},
		color: {
			type: String
		}
	},
	data() {
		return {};
	},
	computed: {
		styles() {
			return {
				'padding': this.btnPadding,
				'font-size': this.fontsize + 'px',
				'width': /\%/g.test(this.width) ? this.width : (this.width + 'px'),
				'min-width': /\%/g.test(this.width) ? this.width : (this.width + 'px'),
				'height': /\%/g.test(this.height) ? this.height : (this.height + 'px'),
				'min-height': /\%/g.test(this.height) ? this.height : (this.height + 'px'),
				'color': this.color
			}
		},
		btnPadding() {
			const y = this.padding[0];
			const x = this.padding[1];
			return `${y}px ${x}px`;
		}
	}
};

</script>
<style type="text/css">
@import '../../styles/button.css';

</style>
