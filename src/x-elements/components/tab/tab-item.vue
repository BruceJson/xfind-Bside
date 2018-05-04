<template>
    <div class='x_tab_item' :class='[selected ? activeClass : "", selected? "active": ""]' @click='onItemClick'>
        <slot></slot>
    </div>
</template>
<script type="text/javascript">
import '../../styles/tab-item.css';
export default {
    name: 'x-tab-item',
    props: {
        'tabIndex': {
            type: [Number, String]
        },
        'tabObj': {
            type: Object
        },
        'activeClass': {
            type: String
        }
    },
    methods: {
        onItemClick() {
            if (this.selected) {
                return;
            }

            this.selected = true;

            this.$parent.$emit('input', this.tabIndex);

            this.$emit('on-item-click', this.tabIndex);
        }
    },
    data() {
        return {
            selected: false
        };
    }
};

</script>
