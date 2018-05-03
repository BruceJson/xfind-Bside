<template>
    <div class='x_flex_item' :style="styleObj">
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'flex-item',
    props: {
        full: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        styleObj() {
            return {
                'flex-grow': this.full ? 1 : 'initial'
            }
        }
    }
};

</script>
