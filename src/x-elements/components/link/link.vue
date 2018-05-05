<template>
    <router-link class='x_link' :to='to' :style='styles'>
        <slot></slot>{{showArrow ? '>>' : ''}}</router-link>
</template>
<script type="text/javascript">
import colorVariables from '@style/variables.js';
import '../../styles/link.css';
export default {
    name: 'x-link',
    props: {
        to: {
            type: String,
            default: ''
        },
        showArrow: {
            type: Boolean,
            default: false
        },
        fontSize: {
            type: String,
            default: '14'
        },
        color: {
            type: String,
            default: colorVariables.mainColor
        }
    },
    computed: {
        styles() {
            return {
                'font-size': this.fontSize,
                'color': this.color
            };
        }
    }
};

</script>
