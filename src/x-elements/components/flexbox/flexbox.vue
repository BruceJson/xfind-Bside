<template>
    <div class='x_flexbox' :style="styleObj">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'flexbox',
    props: {
        direction: {
            type: String,
            default: 'row'
        },
        full: {
            type: Boolean,
            default: false
        },
        center: {
            type: Boolean,
            default: false
        },
        justifyContent: {
            type: String,
            default: 'initial'
        },
        alignItems: {
            type: String,
            default: 'initial'
        }
    },
    computed: {
        styleObj() {
            return {
                'flex-direction': this.direction,
                'justify-content': this.center ? 'center' : this.justifyContent,
                'align-items': this.center ? 'center' : this.alignItems,
                'flex-grow': this.full ? 1 : 'initial'
            }
        }
    }
};

</script>
<style type="text/css">
@import '../../styles/flexbox.css';

</style>
