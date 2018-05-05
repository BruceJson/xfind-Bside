import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		name: 'home',
		component: () =>
			import ('@/views/home/home')
	}, {
		path: '/login',
		name: 'login',
		component: () =>
			import ('@/views/login/login'),
		children: [{
			path: '',
			name: 'login-password',
			component: () =>
				import ('@/views/login/components/password-login'),
		}, {
			path: 'regist',
			name: 'login-regist',
			component: () =>
				import ('@/views/login/components/regist'),
		}, {
			path: 'identify',
			name: 'login-identify',
			component: () =>
				import ('@/views/login/components/identify-login'),
		}]
	}]
})
