<template>
  	<div class="login_page fillcontain">
		<section style="color:#fff;padding-top:50px;">
			<el-row style="display:flex;justify-content:center;">
				<img style="width:60px;height:60px;" src="../assets/img/logo.png" alt="">
				<p style="font-size:40px;">新华全媒业务监控平台</p>
			</el-row>
			<el-row style="display:flex;justify-content:center;">
				<p style="font-size:40px;">值班管理系统</p>
			</el-row>
		</section>
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		    	<el-form :model="loginForm">
					<el-form-item prop="dept">
						<el-select v-model="dept" placeholder="请选择部门" style="width:100%;">
							<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item prop="name">
						<el-input v-model="name" placeholder="请输入姓名"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary" @click="signIn()" >签到</el-button>
						<el-button type="warning" @click="signOut()">签退</el-button>		  	
					  </el-form-item>
				</el-form>
	  		</section>
	  	</transition>
  	</div>
</template>

<script>
	import {login, getAdminInfo} from '@/api/getData'
	import {mapActions, mapState} from 'vuex'

	export default {
	    data(){
			return {
				dept:'',
				options:[
					{
						label:'基础设施保障部',
						value:'jichu'
					},
					{
						label:'技术研发中心',
						value:'jishu'
					}
				],
				name:'',
				showLogin: false,
			}
		},
		mounted(){
			this.showLogin = true;
			if (!this.adminInfo.id) {
    			this.getAdminData()
    		}
		},
		computed: {
			...mapState(['adminInfo']),
		},
		methods: {
			signIn(){
				localStorage.setItem(this.dept,this.name);
			},
			signOut(){
				localStorage.setItem(this.dept,'');
			}
		},
		watch: {
			adminInfo: function (newValue){
				if (newValue.id) {
					this.$message({
                        type: 'success',
                        message: '检测到您之前登录过，将自动登录'
                    });
					this.$router.push('manage')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
		background-color: #324057;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
		p{
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
		.wh(320px, 210px);
		.ctp(320px, 210px);
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 100%;
			font-size: 16px;
		}
	}
	.tip{
		font-size: 12px;
		color: red;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
