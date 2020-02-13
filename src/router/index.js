import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const singerList = r => require.ensure([], () => r(require('@/page/singerList')), 'singerList');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const songList = r => require.ensure([], () => r(require('@/page/songList')), 'songList');
const addUser = r => require.ensure([], () => r(require('@/page/addUser')), 'addUser');
const addSinger = r => require.ensure([], () => r(require('@/page/addSinger')), 'addSinger');
const addSong = r => require.ensure([], () => r(require('@/page/addSong')), 'addSong');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/addUser',
			component: addUser,
			meta: ['添加数据', '添加用户'],
		},{
			path: '/addSinger',
			component: addSinger,
			meta: ['添加数据', '添加歌手'],
		},{
			path: '/addSong',
			component: addSong,
			meta: ['添加数据', '添加歌曲'],
		},{
			path: '/userList',
			component: userList,
			meta: ['数据管理', '用户列表'],
		},{
			path: '/singerList',
			component: singerList,
			meta: ['数据管理', '歌手列表'],
		},{
			path: '/songList',
			component: songList,
			meta: ['数据管理', '歌曲列表'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
