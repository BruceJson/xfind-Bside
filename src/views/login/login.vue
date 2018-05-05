<template>
    <div class='login_page'>
        <flexbox class='login_box1'>
            <flex-item :full='true' class='left width_0'></flex-item>
            <flexbox :full='true' direction='column' align-items='center' class='right width_0'>
                <div class='align_center'>
                    <img src="@imgs/login/4.png">
                </div>
                <div class='login_box'>
                    <tab class='login_tab' v-model='curIndex'>
                        <tab-item class='item' v-for='(item, index) in tabList' :tab-index='index' :islink='true' :path='item.path' :key='index'>
                            <span class='text'>{{item.name}}</span>
                        </tab-item>
                    </tab>
                    <div class='login_content'>
                        <router-view></router-view>
                    </div>
                </div>
            </flexbox>
        </flexbox>
    </div>
</template>
<script type="text/javascript">
import '@pages/login/login.css';
export default {
    name: 'login',
    data() {
        return {
            curIndex: '0',
            tabList: [{
                name: '登录',
                path: './'
            }, {
                name: '注册',
                path: './regist'
            }]
        };
    },
    watch: {
        $route(newVal, oldVal) {
            this.curIndex = newVal.name === 'login-regist' ? '1' : '0';
        }
    }
}

</script>
<style type="text/css">
.code {
    margin: 400px auto;
    width: 114px;
    height: 40px;
    border: 1px solid red;
}

</style>
