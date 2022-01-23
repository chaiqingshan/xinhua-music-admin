<template>
    <div class="fillcontain">
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                @expand='expand'
                :expand-row-keys='expendRow'
                :row-key="row => row.index"
                style="width: 100%">
                <el-table-column type="expand">
                  <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="ID">
                        <span>{{ props.row.Fsinger_id }}</span>
                      </el-form-item>
                      <el-form-item label="歌手姓名">
                        <span>{{ props.row.Fsinger_name }}</span>
                      </el-form-item>
                      <el-form-item label="歌手别名">
                        <span>{{ props.row.Fother_name }}</span>
                      </el-form-item>
                      <el-form-item label="歌手排名">
                        <span>{{ props.row.Fsort }}</span>
                      </el-form-item>
                      <el-form-item label="标签">
                        <span>{{ props.row.Fsinger_tag }}</span>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
                <el-table-column
                  label="ID"
                  prop="Fsinger_id">
                </el-table-column>
                <el-table-column
                  label="歌手姓名"
                  prop="Fsinger_name">
                </el-table-column>
                <el-table-column
                  label="歌手别名"
                  prop="Fother_name">
                </el-table-column>
                <el-table-column label="操作" width="160">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  </template>
                </el-table-column>
            </el-table>
            <div class="Pagination">
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="20"
                  layout="total, prev, pager, next"
                  :total="count">
                </el-pagination>
            </div>
            <el-dialog title="修改歌手信息" v-model="dialogFormVisible">
                <el-form :model="selectTable">
                    <el-form-item label="歌手姓名" label-width="100px">
                        <el-input v-model="selectTable.Fsinger_name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="歌手别名" label-width="100px">
                        <el-input v-model="selectTable.Fother_name"></el-input>
                    </el-form-item>
                    <el-form-item label="歌手排名" label-width="100px">
                        <el-input v-model="selectTable.Fsort" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="标签" label-width="100px">
                        <el-input v-model="selectTable.Fsinger_tag"></el-input>
                    </el-form-item>
                </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateSinger">确 定</el-button>
              </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import {baseUrl, baseImgPath} from '@/config/env'
    import {getSingerList} from '@/api/getData'
    export default {
        data(){
            return {
                baseUrl,
                baseImgPath,
                restaurant_id: null,
                city: {},
                offset: 0,
                limit: 20,
                count: 0,
                tableData: [{
                        Farea: "1",
                        Fattribute_3: "3",
                        Fattribute_4: "0",
                        Fgenre: "0",
                        Findex: "X",
                        Fother_name: "Joker",
                        Fsinger_id: "5062",
                        Fsinger_mid: "002J4UUk29y8BY",
                        Fsinger_name: "薛之谦",
                        Fsinger_tag: "541,555",
                        Fsort: "1",
                        Ftrend: "0",
                        Ftype: "0",
                        voc: "0"
                    },
                    {
                        Farea: "0",
                        Fattribute_3: "2",
                        Fattribute_4: "0",
                        Fgenre: "0",
                        Findex: "Z",
                        Fother_name: "Jay Chou",
                        Fsinger_id: "4558",
                        Fsinger_mid: "0025NhlN2yWrP4",
                        Fsinger_name: "周杰伦",
                        Fsinger_tag: "541,555",
                        Fsort: "2",
                        Ftrend: "0",
                        Ftype: "0",
                        voc: "0"
                    },
                    {
                        Farea: "2",
                        Fattribute_3: "5",
                        Fattribute_4: "0",
                        Fgenre: "0",
                        Findex: "B",
                        Fother_name: "빅뱅",
                        Fsinger_id: "11733",
                        Fsinger_mid: "004AlfUb0cVkN1",
                        Fsinger_name: "BIGBANG (빅뱅)",
                        Fsinger_tag: "645,663,676,679,694,703,710,713",
                        Fsort: "3",
                        Ftrend: "0",
                        Ftype: "2",
                        voc: "0"
                    },
                    {
                        Farea: "0",
                        Fattribute_3: "1",
                        Fattribute_4: "0",
                        Fgenre: "0",
                        Findex: "C",
                        Fother_name: "Eason Chan",
                        Fsinger_id: "143",
                        Fsinger_mid: "003Nz2So3XXYek",
                        Fsinger_name: "陈奕迅",
                        Fsinger_tag: "555",
                        Fsort: "4",
                        Ftrend: "0",
                        Ftype: "0",
                        voc: "0"
                    }
                ],
                currentPage: 1,
                selectTable: {},
                dialogFormVisible: false,
                expendRow: [],
            }
        },
        created(){
            // this.initData();
            this.getSingerList()
        },
    	components: {
    		headTop,
    	},
        methods: {
            async initData(){
                try{
                    const countData = await getSingersCount();
                    if (countData.status == 1) {
                        this.count = countData.count;
                    }else{
                        throw new Error('获取数据失败');
                    }
                    this.getSingerList()
                }catch(err){
                    console.log('获取数据失败', err);
                }
            },
            async getSingerList(){
                const singers=await getSingerList();
                console.log(singers)
            },
            tableRowClassName(row, index) {
		        if (index === 1) {
		        	return 'info-row';
		        } else if (index === 3) {
		        	return 'positive-row';
		        }
		        return '';
		    },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getFoods()
            },
            expand(row, status){
            	if (status) {
            		this.getSelectItemData(row)
            	}else{
                    const index = this.expendRow.indexOf(row.index);
                    this.expendRow.splice(index, 1)
                }
            },
            handleEdit(row) {
            	this.getSelectItemData(row, 'edit')
                this.dialogFormVisible = true;
            },
            async getSelectItemData(row, type){
            	const singer = await getSingerDetail(row.Fsinger_id);
                this.selectTable = {...row, ...{Fsinger_name: singer.Fsinger_name, Fother_name: singer.Fother_name, Fsort: singer.Fsort, Fsinger_tag:singer.Fsinger_tag}};

                this.tableData.splice(row.index, 1, {...this.selectTable});
                this.$nextTick(() => {
                    this.expendRow.push(row.index);
                })
            },
            handleSelect(index){
            	this.selectIndex = index;
            },
            async handleDelete(index, row) {
                try{
                    const res = await deleteSinger(row.item_id);
                    if (res.status == 1) {
                        this.$message({
                            type: 'success',
                            message: '删除歌手成功'
                        });
                        this.tableData.splice(index, 1);
                    }else{
                        throw new Error(res.message)
                    }
                }catch(err){
                    this.$message({
                        type: 'error',
                        message: err.message
                    });
                    console.log('删除歌手失败')
                }
            },
            async updateSinger(){
                this.dialogFormVisible = false;
                try{
                	const postData = {...this.selectTable};
                    const res = await updateSinger(postData)
                    if (res.status == 1) {
                        this.$message({
                            type: 'success',
                            message: '更新歌手信息成功'
                        });
                        this.getSingers();
                    }else{
                        this.$message({
                            type: 'error',
                            message: res.message
                        });
                    }
                }catch(err){
                    console.log('更新歌手信息失败', err);
                }
            },
        },
    }
</script>

<style lang="less">
	@import '../style/mixin';
    .demo-table-expand {
        font-size: 0;
    }
    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .table_container{
        padding: 20px;
    }
    .Pagination{
        display: flex;
        justify-content: flex-start;
        margin-top: 8px;
    }
</style>
