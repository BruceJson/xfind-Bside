<template>
    <div class='x_flexbox' :style="{'flex-direction': direction, 'flex-grow': full ? 1 : 'initial'}">
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
        }
    }
};

</script>
<style type="text/css">
@import '../../styles/flexbox.css';

</style>
