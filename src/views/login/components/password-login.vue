<template>
	<!-- 密码登录 -->
	<div class='content_login_box password_login_box'>
		<div class='line line1'>
			<x-link class='a1' to='./regist' :show-arrow='true' color='#333333'>没有账号？立即注册</x-link>
		</div>
		<div class='line line2 input_box'>
			<input type="text" placeholder='已经注册过的邮箱或手机' name="">
		</div>
		<div class='line line3 input_box'>
			<input type="password" placeholder='请输入密码' name="">
		</div>
		<flexbox align-items='center' class='line line4'>
			<Checkbox v-model="remember" :color='colorVariables.commonFontColor2'>记住密码</Checkbox>
			<flex-item :full='true'></flex-item>
			<x-link class='a1' to='' :color='colorVariables.commonFontColor2' :show-arrow='true'>忘记密码？</x-link>
		</flexbox>
		<div class='line line5'>
			<x-button class='xbtn_bradius btn_login' fontsize='16' color='#fff' width='100%'>登录</x-button>
		</div>
		<flexbox class='line line6' align-items='center'>
			<p>快速登录</p>
			<img src="@imgs/login/5.png">
			<img src="@imgs/login/6.png">
			<flex-item :full='true'></flex-item>
			<x-link class='a1' to='./identify' :show-arrow='true'>验证码登录</x-link>
		</flexbox>
	</div>
</template>
<script type="text/javascript">
import colorVariables from '@style/variables.js';
export default {
	name: 'password-login',
	data() {
		return {
			remember: false,
			colorVariables
		}
	}
};

</script>
