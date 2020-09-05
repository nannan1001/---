<template>
  <div style="padding:5%;text-align:left">
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="点赞记录" name="first">
      <div v-for="i in project_detail" :key="i.proID">
      <el-row style="height: 30px">
      <el-col :span="2">
        <p style="color:orange">{{i.proID}}</p>
      </el-col>
      <el-col :span="16">
        <p>{{i.dianzan}}</p>
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
    </el-tab-pane>

    <el-tab-pane label="发帖记录" name="second">
      <div v-for="i in project_detail" :key="i.proID">
      <el-row style="height: 30px">
      <el-col :span="2">
        <p style="color:orange">{{i.proID}}</p>
      </el-col>
      <el-col :span="16">
        <p>{{i.fatie}}</p>
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
    </el-tab-pane>

    <el-tab-pane label="回帖记录" name="third">
      <div v-for="i in project_detail" :key="i.proID">
      <el-row style="height: 30px">
      <el-col :span="2">
        <p style="color:orange">{{i.proID}}</p>
      </el-col>
      <el-col :span="16">
        <p>{{i.huitie}}</p>
      </el-col>
      <el-col :span="6">
        <p>{{"第"+i.louceng+"楼"}}</p>
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

    </el-tab-pane>
    
    <el-tab-pane label="我要发帖" name="fourth">
      <p>发帖标题</p> <el-input style="width:460px"></el-input>
      <p class="demander_info">是否匿名&nbsp;&nbsp;
            <span v-if="if_anonymous">是&nbsp;</span>
            <span v-else>否&nbsp;</span>
            <el-switch
              v-model="if_anonymous"
              active-color="#ff4949"
              inactive-color="#C0CCDA">
            </el-switch>
      </p>
      <p>发帖内容</p>
      <el-input type="textarea" style="width:460px" :rows="6"></el-input>
      <p></p>
      <el-button type="danger" round @click="open">提交帖子</el-button>
    </el-tab-pane>
  </el-tabs>

  </div>
</template>

<script>
import metoo from '../../assets/me-too.png';
import metoo1 from '../../assets/me-too1.jpeg';
import metoo2 from '../../assets/me-too2.jpeg';

import axios from 'axios'
var root_url = 'http://localhost:9090'


export default {
  name: 'Love',
  data() {
    return {
      project_detail: {},
      if_anonymous:false
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
    open() {
        this.$alert('你已成功发帖！快去看看大家的留言吧！', '成功提交', {
          confirmButtonText: '确定',
    });
    },
    get_project_list_test(){
      this.project_list_response={
        "msg": "查询成功",
        "proList": [
          {
            "proID" : 1,
            "dianzan": "被上司骚扰了",
            "fatie": "我的丈夫醉酒打我了怎么办",
            "huitie": "怎么拒绝酒吧搭讪",
            "louceng": 6,
            "imge": metoo,
            "num": 5,
            "fund": "katherine"
          },
          {
            "proID" : 2,
            "dianzan": "我的丈夫醉酒打我了怎么办",
            "fatie": "被上司骚扰了",
            "huitie": "急需姐妹支招",
            "louceng": 11,
            "imge": metoo1,
            "num": 4,
            "fund": "kate"
          },
          {
            "proID" : 3,
            "dianzan": "职场性骚扰应该举报吗",
            "fatie": "怎么拒绝酒吧搭讪",
            "huitie": "职场性骚扰应该举报吗",
            "louceng": 2,
            "imge": metoo2,
            "num": 7,
            "fund": "cindy"
          },
          {
            "proID" : 4,
            "dianzan": "我的丈夫醉酒打我了怎么办",
            "fatie": "今天男朋友让我穿多一点，我应该这样做吗",
            "huitie": "今天男朋友让我穿多一点，我应该这样做吗",
            "louceng": 7,
            "imge": metoo,
            "num": 6,
            "fund": "nancy"
          },
          {
            "proID" : 5,
            "dianzan": "今天男朋友让我穿多一点，我应该这样做吗",
            "fatie": "职场性骚扰应该举报吗",
            "huitie": "急需姐妹支招",
            "louceng": 2,
            "imge": metoo1,
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