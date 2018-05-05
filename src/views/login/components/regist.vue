<template>
	<!-- 注册 -->
	<div class='content_login_box regist_login_box'>
		<div class='line line1'>
			<x-link class='a1' to='./' :show-arrow='true' color='#333333'>已有账号？立即登录</x-link>
		</div>
		<div class='line line2 input_box'>
			<input type="text" placeholder='邮箱或手机' name="">
		</div>
		<div class='line line3 input_box'>
			<input type="password" placeholder='密码' name="">
		</div>
		<flexbox align-items='center' class='line line4'>
			<flex-item class='input_box' :full='true'>
				<input type='text' placeholder='请输入验证码'>
			</flex-item>
			<x-button class='xbtn xbtn_fill xbtn_bradius' :padding='[0,0]' height='48' width='122'>获取验证码</x-button>
		</flexbox>
		<div class='line line5'>
			<x-button class='xbtn_bradius btn_login' fontsize='16' color='#fff' width='100%'>注册</x-button>
		</div>
		<flexbox class='line line6' align-items='center'>
			<p>注册代表您已同意</p>
			<x-link class='a1' to='' :show-arrow='false' color='#00d2ff'>《讯聘用户协议》</x-link>
		</flexbox>
	</div>
</template>
<script type="text/javascript">
export default {
	name: 'regist'
};

</script>
