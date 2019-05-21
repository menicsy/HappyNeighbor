import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Registered from '@/pages/Registered'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/jiefang/index',
			name: 'Index',
			component: Index
		},
		{
			path: '/jiefang/registered',
			name: 'Registered',
			component: Registered
		}
	]
})
