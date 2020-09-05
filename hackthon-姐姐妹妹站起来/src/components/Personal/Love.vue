<template>
  <div style="width:100%">
    <div v-for="i in project_detail" :key="i.proID">
      <el-row style="height: 110px">
      <el-col :span="2">
        <h1 style="color:red"><b>{{i.proID}}</b></h1>
      </el-col>
      <el-col :span="8">
        <img :src="i.imge" style="height:110px"/>
      </el-col>
      <el-col :span="8">
        <p>{{i.proName}}</p>
      </el-col>
      <el-col :span="6">
        <p style="color:grey">{{"热度:"+i.num}}</p>
        <el-button type="text" @click="gotoProjectDetail(i)">查看帖子</el-button>
      </el-col>
      </el-row>

      <el-row>
      <el-divider></el-divider>
      </el-row>
    </div>

    <div class="pages_element">
        <el-pagination
          background :hide-on-single-page="value"
          :page-size="5"
          layout="prev, pager, next"
          :total="project_list_response.proNum">
        </el-pagination>
      </div>

  </div>
</template>

<script>
import metoo from '../../assets/me-too.png';
import m1 from '../../assets/m1.png';
import m2 from '../../assets/m2.jpeg';
import m3 from '../../assets/m3.jpeg';
import m4 from '../../assets/m4.jpeg';

import axios from 'axios'
var root_url = 'http://localhost:9090'


export default {
  name: 'Love',
  data() {
    return {
      project_detail: {},
    };
  },
  created(){
    this.getParams()
    console.log(this.header_info)
    this.get_project_list_test()
    // 获取列表数据
    // this.get_project_list()
  },
  methods: {
    get_project_list_test(){
      this.project_list_response={
        "msg": "查询成功",
        "proList": [
          {
            "proID": 1,
            "proIntro": "我的丈夫醉酒打我了怎么办",
            "proName": "急需姐妹支招",
            "imge": metoo,
            "num": 5,
            "fund": "katherine"
          },
          {
            "proID": 2,
            "proIntro": "渣男曝光和反性骚扰",
            "proName": "渣男曝光和反性骚扰",
            "imge": m1,
            "num": 4,
            "fund": "kate"
          },
          {
            "proID": 3,
            "proIntro": "我的丈夫醉酒打我了怎么办",
            "proName": "急需姐妹支招",
            "imge": m2,
            "num": 7,
            "fund": "cindy"
          },
          {
            "proID": 4,
            "proIntro": "我的丈夫醉酒打我了怎么办",
            "proName": "急需姐妹支招",
            "imge": m3,
            "num": 6,
            "fund": "nancy"
          },
          {
            "proID": 5,
            "proIntro": "我的丈夫醉酒打我了怎么办",
            "proName": "急需姐妹支招",
            "imge": m4,
            "num": 3,
            "fund": "lily"
          }
        ],
        "proNum": 11,
        "status": 200
      }
      this.project_detail = this.project_list_response.proList
    },
    get_project_list(){
      axios.get(root_url+'/projects/prolist')
        .then((response)=>{
          console.log(response.data);
          this.re_status = response.status;
          this.show = response.data;
          console.log(root_url+'/projects/prolist')
          console.log(this.show)
          // this.project_list_response = response.data
          // this.project_detail = this.project_list_response.proList
        })
        .catch((error)=> {
          console.log(error);
        });
    },
    // gotoPage(path){
    //   console.log(path)
    // },
    getParams(){
      // 取到路由带过来的参数
      console.log('准备数据中。。。。。')
      // 将数据放在当前组件的数据内
      this.header_info  = this.$route.params
      // this.navi_info = this.$route.params
      this.header_info.height_line = 2
      console.log('数据已准备好！')
    },
    gotoProjectDetail(i) {
      //直接跳转
      window.console.log("查询成功", i);
      this.$router.push('/projectList/projectDetail/'+i.proID);
    }
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
