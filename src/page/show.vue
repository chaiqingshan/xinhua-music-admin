<template>
  	<div class="login_page fillcontain">
		<section>
			<el-row>
				<el-col :span="6">
					<div :style="[baseStyle,jichuStyle]">
						<p>基础设施保障部</p>
						<p>{{jichu}}</p>
					</div>
				</el-col>

			</el-row>
		</section>
  	</div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
	export default {
	    data(){
			return {
				// jichu:localStorage.getItem('基础设施保障部'),
				baseStyle:{
					width:'100%',
					height:'150px',
					// backgroundColor:'#67C23A',
					display:'flex',
					flexDirection:'column',
					justifyContent:'center',
					alignItems:'center',
					color:'#fff',
					fontSize:'30px'
				}
			}
		},
		mounted(){
			// setTimeout(() => {
			// 	window.location.reload();
			// }, 3000);
		},
		computed: {
			...mapState(['jichu']),
			jichuStyle(){
				return{
					backgroundColor:this.jichu==''?'#909399':'#67C23A'
				}
			}
		},
		methods: {
			...mapActions(['getJichu']),
		},
		watch: {

		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
		background-color: #fff;
	}
</style>
