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
            type: [String, Number]
        }
    }
};

</script>
