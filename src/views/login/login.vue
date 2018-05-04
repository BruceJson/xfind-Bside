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
                        <tab-item class='item' v-for='(item, index) in tabList' :tab-index='index' :key='index'>
                            <span class='text'>{{item}}</span>
                        </tab-item>
                    </tab>
                    <div class='login_content'>
                        <div class='password_login_box'>
                            <div class='line line1'>
                                <x-link class='a1' to='' :show-arrow='true' color='#333333'>没有账号？立即注册</x-link>
                            </div>
                            <div class='line line2 input_box'>
                                <input type="text" name="">
                            </div>
                            <div class='line line3 input_box'>
                                <input type="password" name="">
                            </div>
                            <flexbox align-items='center' class='line line4'>
                                <Checkbox v-model="remember" :color='colorVariable.commonFontColor2'>记住密码</Checkbox>
                                <flex-item :full='true'></flex-item>
                                <x-link class='a1' to='' :color='colorVariable.commonFontColor2' :show-arrow='true'>忘记密码？</x-link>
                            </flexbox>
                            <div class='line line5'>
                                <x-button class='xbtn_bradius btn_login' fontsize='16' color='#fff' width='100%'>登录</x-button>
                            </div>
                            <flexbox class='line line6' align-items='center'>
                                <p>快速登录</p>
                                <img src="@imgs/login/5.png">
                                <img src="@imgs/login/6.png">
                                <flex-item :full='true'></flex-item>
                                <x-link class='a1' to='' :show-arrow='true'>验证码登录</x-link>
                            </flexbox>
                        </div>

                    </div>
                </div>
            </flexbox>
        </flexbox>
    </div>
</template>
<script type="text/javascript">
import '@pages/login/login.css';
import colorVariable from '@/assets/style/variables.js';
export default {
    name: 'login',
    data() {
        return {
            curIndex: '0',
            tabList: ['登录', '注册'],
            remember: false,
            colorVariable
        };
    }
}

</script>
<style type="text/css">


</style>
