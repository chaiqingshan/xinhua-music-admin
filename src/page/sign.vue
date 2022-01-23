<template>
  	<div class="login_page fillcontain">
		<section style="color:#fff;padding-top:50px;">
			<el-row style="display:flex;justify-content:center;align-items: center;">
				<img style="width:60px;height:60px;margin-right:10px;" src="../assets/img/logo.png" alt="">
				<p style="font-size:50px;">新华全媒业务监控平台</p>
			</el-row>
			<el-row style="display:flex;justify-content:center;">
				<p style="font-size:50px;">值班签到系统</p>
			</el-row>
		</section>
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		    	<el-form>
					<el-form-item prop="dept" label="部门">
						<el-select v-model="dept" placeholder="请选择部门" style="width:80%;">
							<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item prop="name" label="姓名">
						<el-input v-model="name" placeholder="请输入姓名" style="width:80%;"></el-input>
					</el-form-item>
					<el-form-item prop="password" label="签到码">
						<el-input v-model="password" placeholder="请输入签到码" show-password style="width:75%;"></el-input>
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
	import {signIn,signOut} from '@/api/getData'
	import {mapActions, mapState} from 'vuex'

	export default {
	    data(){
			return {
				signer:{},
				dept:'',
				options:[
					{
						label:'监控平台运维',
						value:'yunwei'
					},
					{
						label:'系统平台部',
						value:'xitong'
					},
					{
						label:'采编技术部',
						value:'caibian'
					},
					{
						label:'办公信息化部',
						value:'bangong'
					},
					{
						label:'基础设施保障部',
						value:'jichu'
					},
					{
						label:'程控电话部',
						value:'chengkong'
					},
					{
						label:'供稿技术部',
						value:'gonggao'
					},
					{
						label:'数据技术部',
						value:'shujujishu'
					},
					{
						label:'音视频技术部',
						value:'yinshipin'
					},
					{
						label:'网络技术部',
						value:'wangluo'
					},
					{
						label:'信息安全技术部',
						value:'anquan'
					},
					{
						label:'技术服务部',
						value:'fuwu'
					},
					{
						label:'数据业务部',
						value:'shujuyewu'
					},
					{
						label:'运行指挥中心',
						value:'zhihui'
					},
					{
						label:'技术研发中心',
						value:'yanfa'
					},
					{
						label:'5971电台',
						value:'diantai'
					},
					{
						label:'操作席位1',
						value:'caozuo1'
					},
					{
						label:'操作席位2',
						value:'caozuo2'
					},
					{
						label:'操作席位3',
						value:'caozuo3'
					},
					{
						label:'操作席位4',
						value:'caozuo4'
					}
				],
				name:'',
				password:'',
				showLogin: false,
			}
		},
		mounted(){
			this.showLogin = true;
		},
		computed: {
			...mapState(['adminInfo']),
		},
		methods: {
			async signIn(){
				if(this.dept==''){
					this.$message.error('请选择部门');
					return;
				}
				if(this.name==''){
					this.$message.error('请输入姓名');
					return;
				}
				if(this.password==''){
					this.$message.error('请输入签到码');
					return;
				}
				if(this.dept=='xitong'&&this.password!=='xitong'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='caibian'&&this.password!=='caibian'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='bangong'&&this.password!=='bangong'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='jichu'&&this.password!=='jichu'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='chengkong'&&this.password!=='chengkong'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='gonggao'&&this.password!=='gonggao'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='shujujishu'&&this.password!=='shujujishu'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='yinshipin'&&this.password!=='yinshipin'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='wangluo'&&this.password!=='wangluo'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='anquan'&&this.password!=='anquan'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='fuwu'&&this.password!=='fuwu'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='shujuyewu'&&this.password!=='shujuyewu'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='zhihui'&&this.password!=='zhihui'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='yanfa'&&this.password!=='yanfa'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='diantai'&&this.password!=='diantai'){
					this.$message.error('签到码错误');
					return;
				}
				
				// Object.defineProperty(this.signer, this.dept, {
				// 	value : this.name,
				// 	writable : true,
				// 	enumerable : true,
				// 	configurable : true
				// });
				// localStorage.setItem('signer',JSON.stringify(this.signer));
				// this.$message({
				// 	message: '签到成功',
          		// 	type: 'success'
				// })
				const res = await signIn({dept: this.dept, name: this.name})
				if (res.code == 0) {
							this.$message({
		                        type: 'success',
		                        message: '签到成功'
		                    });
				}else{
							this.$message({
		                        type: 'error',
		                        message: res.msg
		                    });
				}
			},
			async signOut(){
				if(this.dept==''){
					this.$message.error('请选择部门');
					return;
				}
				if(this.password==''){
					this.$message.error('请输入签到码');
					return;
				}
				if(this.dept=='xitong'&&this.password!=='xitong'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='caibian'&&this.password!=='caibian'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='bangong'&&this.password!=='bangong'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='jichu'&&this.password!=='jichu'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='chengkong'&&this.password!=='chengkong'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='gonggao'&&this.password!=='gonggao'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='shujujishu'&&this.password!=='shujujishu'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='yinshipin'&&this.password!=='yinshipin'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='wangluo'&&this.password!=='wangluo'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='anquan'&&this.password!=='anquan'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='fuwu'&&this.password!=='fuwu'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='shujuyewu'&&this.password!=='shujuyewu'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='zhihui'&&this.password!=='zhihui'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='yanfa'&&this.password!=='yanfa'){
					this.$message.error('签到码错误');
					return;
				}
				if(this.dept=='diantai'&&this.password!=='diantai'){
					this.$message.error('签到码错误');
					return;
				}
				// let localSigner=JSON.parse(localStorage.getItem('signer'));
				// Object.defineProperty(localSigner, this.dept, {
				// 	value : '',
				// 	writable : true,
				// 	enumerable : true,
				// 	configurable : true
				// });
				// localStorage.setItem('signer',JSON.stringify(localSigner));
				// this.$message({
				// 	message: '签退成功',
          		// 	type: 'success'
				// })
				const res = await signOut({dept: this.dept, name: ''})
				if (res.code == 0) {
							this.$message({
		                        type: 'success',
		                        message: '签退成功'
		                    });
				}else{
							this.$message({
		                        type: 'error',
		                        message: res.msg
		                    });
				}
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
	.el-form-item{
		margin-top:30px;
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
		.wh(380px, 280px);
		.ctp(380px, 280px);
		padding: 30px;
		margin-top: -115px;
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
