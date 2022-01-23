<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                highlight-current-row
                style="width: 100%">
                <el-table-column
                  type="index"
                  width="100">
                </el-table-column>
                <el-table-column
                  property="userCode"
                  label="用户编码"
                  width="220">
                </el-table-column>
                <el-table-column
                  property="userName"
                  label="用户姓名"
                  width="220">
                </el-table-column>
                <el-table-column
                  property="registe_time"
                  label="注册时间">
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {getUserList, getUserCount} from '@/api/getData'
    export default {
        data(){
            return {
                tableData: [{
                  registe_time: '2020-01-02',
                  username: 'chai',
                  city: '北京市西城区'
                }, {
                  registe_time: '2020-01-02',
                  username: 'qing',
                  city: '北京市西城区'
                }, {
                  registe_time: '2020-01-02',
                  username: 'shan',
                  city: '北京市西城区'
                }],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 0,
                currentPage: 1,
            }
        },
    	components: {
    		headTop,
    	},
        created(){
            // this.initData();
            this.getUsers();
        },
        methods: {
            async initData(){
                try{
                    const countData = await getUserCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    }else{
                        throw new Error('获取数据失败');
                    }
                    this.getUsers();
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getUsers()
            },
            async getUsers(){
                const Users = await getUserList();
                this.tableData = [];
                Users.forEach(item => {
                    const tableData = {};
                    tableData.userName = item.userName;
                    tableData.registe_time = item.meta.createAt;
                    tableData.userCode = item.userCode;
                    this.tableData.push(tableData);
                })
                // console.log(this.tableData)
            }
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .table_container{
        padding: 20px;
    }
</style>
