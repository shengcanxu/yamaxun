import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import indexApp from './index.vue'

Vue.use(ElementUI);

Vue.component('ordertable', {
  //订单表组件
  props: ['datasource'],
  template:
        '<el-table :data="datasource" border style="width: 100%"> \
            <el-table-column label="日期" prop="date"> \
            </el-table-column> \
            <el-table-column label="姓名" prop="name"> \
            </el-table-column> \
            <el-table-column label="操作" prop="address"> \
          </el-table>'
});

var app2 = new Vue({
    el: '#content',

    data: {
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
});



