<template>
  	<div class="login_page">
		<section style="color:#fff;padding-top:50px;">
			<el-row style="display:flex;justify-content:center;align-items: center;">
				<img style="width:60px;height:60px;margin-right:10px;" src="../assets/img/logo.png" alt="">
				<p style="font-size:50px;">新华全媒业务监控平台值班坐席</p>
			</el-row>
			<el-row style="display:flex;justify-content:center;padding-top:20px;">
				<p style="font-size:30px;">{{year}}年{{month}}月{{date}}日 {{week}} {{hour}}:{{min}}:{{sec}}</p>
			</el-row>
		</section>
		<section style='padding:50px 10px 10px 10px;'>
			<el-row :gutter='4' style='display:flex;'>
				<el-col style='flex:3'>
					<div :style="[baseStyle,(signer.xitong&&signer.xitong!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>系统平台部</p>
						<p>53896</p>
						<p>{{signer.xitong}}</p>
					</div>
				</el-col>
				<el-col style='flex:3'>
					<div :style="[baseStyle,(signer.caibian&&signer.caibian!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>采编技术部</p>
						<p>73177</p>
						<p>{{signer.caibian}}</p>
					</div>
				</el-col>
				<el-col style='flex:1'>
					<div :style="[baseStyle,(signer.caozuo1&&signer.caozuo1!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>操作席位1</p>
						<p>{{signer.caozuo1}}</p>
					</div>
				</el-col>
				<el-col style='flex:1'>
				</el-col>
				<el-col style='flex:1;margin-left:5px;'>
					<div :style="[baseStyle,(signer.caozuo2&&signer.caozuo2!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>操作席位2</p>
						<p>{{signer.caozuo2}}</p>
					</div>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.bangong&&signer.bangong!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>办公信息化部</p>
						<p>72715</p>
						<p>{{signer.bangong}}</p>
					</div>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.jichu&&signer.jichu!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>基础设施保障部</p>
						<p>54099</p>
						<p>{{signer.jichu}}</p>
					</div>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.yunwei&&signer.yunwei!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>监控平台运维</p>
						<p>54098</p>
						<p>{{signer.yunwei}}</p>
					</div>
				</el-col>
				<!-- <el-col style='flex:1'>
					<div :style="[baseStyle,(signer.yunwei2&&signer.yunwei2!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>大屏运维2</p>
						<p>{{signer.yunwei2}}</p>
					</div>
				</el-col> -->
			</el-row>
			<el-row :gutter='5' style='display:flex;padding-top:25px;'>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.chengkong&&signer.chengkong!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>程控电话部</p>
						<p>72000</p>
						<p>{{signer.chengkong}}</p>
					</div>
				</el-col>
				<el-col style='flex:1;margin:0 -2.5px;'>
					<div style="width:100%;height:200px;display:flex;justify-content:center;align-items:center;text-align:center;color:#fff;font-size:22px;"></div>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.gonggao&&signer.gonggao!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>供稿技术部</p>
						<p>73179</p>
						<p>{{signer.gonggao}}</p>
					</div>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.shujujishu&&signer.shujujishu!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>数据技术部</p>
						<p>76133</p>
						<p>{{signer.shujujishu}}</p>
					</div>
				</el-col>
				<el-col style='flex:1'>
					<div style="width:100%;height:200px;display:flex;justify-content:center;align-items:center;text-align:center;color:#fff;font-size:22px;writing-mode:vertical-lr;"></div>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.yinshipin&&signer.yinshipin!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>音视频技术部</p>
						<p>74737</p>
						<p>{{signer.yinshipin}}</p>
					</div>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.wangluo&&signer.wangluo!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>网络技术部</p>
						<p>73421</p>
						<p>{{signer.wangluo}}</p>
					</div>
				</el-col>
				<el-col style='flex:1'>
					<div style="width:100%;height:200px;display:flex;justify-content:center;align-items:center;text-align:center;color:#fff;font-size:22px;"></div>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.anquan&&signer.anquan!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>信息安全技术部</p>
						<p>54119</p>
						<p>{{signer.anquan}}</p>
					</div>
				</el-col>
			</el-row>
			<el-row :gutter='5' style='display:flex;padding-top:25px;'>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.fuwu&&signer.fuwu!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>技术服务部</p>
						<p>75678</p>
						<p>{{signer.fuwu}}</p>
					</div>
				</el-col>
				<el-col style='flex:3'>
					<div :style="[baseStyle,(signer.shujuyewu&&signer.shujuyewu!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>数据业务部</p>
						<p>{{signer.shujuyewu}}</p>
					</div>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.zhihui&&signer.zhihui!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>运行指挥中心</p>
						<p>73410</p>
						<p>{{signer.zhihui}}</p>
					</div>
				</el-col>
				<el-col style='flex:1'>
				</el-col>
				<el-col style='flex:2'>
					<div :style="[baseStyle,(signer.yanfa&&signer.yanfa!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>技术研发中心</p>
						<p>53893</p>
						<p>{{signer.yanfa}}</p>
					</div>
				</el-col>
				<el-col style='flex:3'>
					<div :style="[baseStyle,(signer.diantai&&signer.diantai!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>5971电台</p>
						<p>74875</p>
						<p>{{signer.diantai}}</p>
					</div>
				</el-col>
				<el-col style='flex:1'>
					<div :style="[baseStyle,(signer.caozuo3&&signer.caozuo3!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>操作席位3</p>
						<p>{{signer.caozuo3}}</p>
					</div>
				</el-col>
				<el-col style='flex:1'>
					<div :style="[baseStyle,(signer.caozuo4&&signer.caozuo4!=='')?signedStyle:'']">
						<div class="block"><i class="el-icon-user-solid" style="font-size:30px;"></i></div>
						<p>操作席位4</p>
						<p>{{signer.caozuo4}}</p>
					</div>
				</el-col>
			</el-row>
		</section>
  	</div>
</template>

<script>
    import {getSigner} from '@/api/getData'
	export default {
	    data(){
			return {
				year:'',
				month:'',
				date:'',
				hour:'',
				min:'',
				sec:'',
				week:'',
				signer:{
				},
				jichu:'',
				baseStyle:{
					width:'100%',
					height:'200px',
					backgroundColor:'#909399',
					display:'flex',
					flexDirection:'column',
					justifyContent:'center',
					alignItems:'center',
					color:'#fff',
					fontSize:'22px',
					textAlign: 'center'
				}
			}
		},
		mounted(){
				// setInterval(() => {
				// 	this.signer=JSON.parse(localStorage.getItem('signer'));
				// 	this.getTime();
				// }, 1000);
				setInterval(() => {
					this.getSigner();
					this.getTime();
				}, 1000);
				// this.getSigner();
		},
		computed: {
			signedStyle(){
				return{
					// backgroundColor:'#67C23A'
					backgroundColor:'#248830'
				}
			}
		},
		methods: {
			getTime(){
				let d=new Date();
				this.year=d.getFullYear();
				this.month=d.getMonth()+1;
				this.date=d.getDate();
				this.hour=(d.getHours()<10)?('0'+d.getHours()):d.getHours();
				this.min=(d.getMinutes()<10)?('0'+d.getMinutes()):d.getMinutes();
				this.sec=(d.getSeconds()<10)?('0'+d.getSeconds()):d.getSeconds();
				let day = d.getDay();
                let weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
                this.week = weeks[day];
			},
			async getSigner(){
				const signers=await getSigner();
				// console.log(signers)
				signers.forEach(item=>{
					this.$set(this.signer,item.dept,item.name)
				})
				// console.log(this.signer)
			}
		},
		watch: {

		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
		background-color: #000;
	}
	.el-col{
		// border:1px solid #fff;
	}
</style>
