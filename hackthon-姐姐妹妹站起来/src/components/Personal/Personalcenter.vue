<template>
  <div>
    <el-main style="width: 100%">
      <el-col :span="24" :offset="0">


      <div v-for="i in project_detail" :key="i.proID" class="project_card">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span><b>{{ i.proName }}</b></span>
            <el-button style="float: right; padding: 3px 0" type="text" @click="gotoProjectDetail(i)">查看帖子</el-button>
          </div>
          <el-row>
            <el-col :span="12">
              <img :src="i.imge" style="width:80%">
            </el-col>  
            <el-col :span="12">
              <el-row>
              <div class="text item">
                {{ i.proIntro }}
              </div>
              </el-row>
            </el-col>         
          </el-row>
          <el-row>
                <nobr class="footprint_info">{{"参与人次："+i.num}}</nobr>
                <nobr class="footprint_info">{{"楼主："+i.fund}}</nobr>
          </el-row>
        </el-card>
      </div>
<!--      10 item for one page-->
      <div class="pages_element">
        <el-pagination
          background :hide-on-single-page="value"
          :page-size="5"
          layout="prev, pager, next"
          :total="project_list_response.proNum">
        </el-pagination>
      </div>
      </el-col>
    </el-main>
    <el-footer>
      <MainBottom></MainBottom>
    </el-footer>

  </div>
</template>

<script>
import MainTop from "../MainTop";
import MainBottom from "../MainBottom";
import SearchBar from "../SearchBar";

import project from '../../assets/project.png';
import metoo from '../../assets/me-too.png';
import m1 from '../../assets/m1.png';
import m2 from '../../assets/m2.jpeg';
import m3 from '../../assets/m3.jpeg';
import m4 from '../../assets/m4.jpeg';

import axios from 'axios'
var root_url = 'http://localhost:9090'

export default {
  components: {MainTop, MainBottom,SearchBar},
  name: "ProjectList",
  data(){
    return{
      value:true,
      project_detail: {},
      img_url:project,
      header_info:{
        height_line:2,
        if_login: false,
        user_type: '0', // 0 is donator, 1 is reciver
        if_show_navi:true
      },
      navi_info:{
        if_searchBar:false,
        navi_list:[
          {name: '首页',path:'/'},
          // {name: '项目列表',path: ''}
        ],
        now_place:'项目列表'
      }
    };
  },
  created(){
    this.getParams()
    console.log(this.header_info)
    this.get_project_list_test()
    // 获取列表数据
    // this.get_project_list()
  },
  mounted(){
    //api GET方法：localhost:9090/projects/prolist
    // this.get_project_list()
  },
  methods: {
    get_project_list_test(){
      this.project_list_response={
        "msg": "查询成功",
        "proList": [
          {
            "proID": 1,
            "proIntro": "今天有一位学妹遭遇了一样的事情。她比我更勇敢我很佩服她。我希望这个世界上的所以女孩子都不要收到伤害。不管是来自于性骚扰本身的还是说周遭人给你的。遇到不公正的事情就应该勇敢说出来。还有人说什么一个巴掌拍不响。老师作为一个成年人并且是在社会摸爬滚打这么久的人在面对未成年的时候本就应该正确教导并对待这件事。他们没做好就是受害者想接近就是“一个巴掌拍不响嘛？”在画室 学生作为消费者提出自己的改进意见本来就是一件正常的事情。老师和学生是有距离的。这种。来自上层的不正当的邀约难道非要接受吗？",
            "proName": "你有过被老师性骚扰的经历吗？且你是怎样排除心理阴影的？",
            "imge": metoo,
            "num": 5,
            "fund": "katherine"
          },
          {
            "proID": 2,
            "proIntro": "我自己的亲身经历，在事业单位有个领导是个50多岁的离异老男人，在那儿他就属于一手遮天的内种。刚开始是对我明显的比别人要好，薪资待遇都和干了十几年的同事要持平了，我觉得特别焦虑，因为本不是我应该得到的。总是滥用职权把我叫到会议室聊天，刨根问底想挖我的隐私，诸如有没有男朋友，交过几个男朋友，喜欢什么类型的异性，还有家庭状况。真的让我特别反感。",
            "proName": "身为女下属，被男上司性骚扰，怎么办？",
            "imge": m1,
            "num": 4,
            "fund": "kate"
          },
          {
            "proID": 3,
            "proIntro": "前不久外出活动时，领导在微信上打了擦边球，我装傻充愣，这事儿也就过去了。但再遇到他，我总会觉得尴尬，哭也不是，笑也不是，好久以后才算能正常说话。在很多人眼里年轻的他前途远大，真不知道该如何与他继续相处。请公周指点迷津。",
            "proName": "领导年轻有为却对我性骚扰，手握微信截图我该举报吗？",
            "imge": m2,
            "num": 7,
            "fund": "cindy"
          },
          {
            "proID": 4,
            "proIntro": "我爸对我的性骚扰，给我带来了很大的影响，我开始回想 开始反思 也开始思考，发现这些事情对我的影响比我想象中的要大得多。他性骚扰我的时候，我已经上大学了。他从小特别疼我，我也是个活泼开朗，懂事的孩子，我特别信任他，小时候就觉得他是我世界里的超人，长大了也觉得他是这个世界上最好的男人，事业有成，为人处世也很好，还顾家，以前还说找男朋友就要找像他这样的人。但万万没有想到，我最亲近最信任的人，却在我长大了之后性骚扰我伤害我，感觉心里某个地方崩塌了。",
            "proName": "你们有被家人性骚扰的经历吗？",
            "imge": m3,
            "num": 6,
            "fund": "nancy"
          },
          {
            "proID": 5,
            "proIntro": "不知道大家还记不记得2018年13岁小孩在泳池侵犯一名女医生，最后家属利用舆论压力逼死该受害者。据媒体报道，女医生姓安，是德阳市中西医结合医院的儿科医生。事情发生在8月20日，四川德阳。",
            "proName": "被熊孩子性骚扰怎么办？",
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
};
</script>

<style scoped>
  .box-card {
    /*width: 60%;*/
  }
  .project_card{
    text-align: left;
    /*margin-left: 20%;*/
  }
  .pages_element{
    margin-top: 20px;
  }
  .footprint_info {
    color: gray;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 15px;
  }
</style>
