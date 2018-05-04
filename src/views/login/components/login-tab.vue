<template>
    <div class='login_tab'>
        <div class='item'>
            <span></span>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'login-tab',
    props: {
        value: {
            type: String,
            default: '0'
        }
    },
    computed: {
        tabIndex: {
            get() {
                return this.value;
            },
            set(val) {
                this.$emit('input', val);
            }
        },
        
    }
};

</script>
