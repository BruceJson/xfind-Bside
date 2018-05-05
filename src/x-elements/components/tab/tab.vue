<template>
	<div class='x_tab_box'>
		<slot></slot>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'x-tab',
	props: {
		'value': {
			type: [String, Number],
			default: '0'
		}
	},
	mounted() {
		this.value > -1 && (this.currentIndex = this.value);
	},
	watch: {
		currentIndex(newVal, oldVal) {
			oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].selected = false);
			newVal > -1 && this.$children[newVal] && (this.$children[newVal].selected = true);

			this.$emit('input', newVal);
		},

		value(val) {
			this.currentIndex = val;
		}
	},
	data() {
		return {
			currentIndex: this.index
		}
	}
};

</script>
