<template>
  <div>
      <el-header>
        <MainTop :header_info="header_info"></MainTop>
      </el-header>
      <!--<SearchBar :navi_info="navi_info"></SearchBar>-->
      <div style="margin-top:-20px">
        <el-divider></el-divider>
      </div>


    <el-container>
      <el-aside width="30%" v-bind="donor_info">
        <el-col :span="18" :offset="2">
          <el-menu default-active="$route.path" router
                   background-color="rgba(70, 76, 91, 1)" text-color="#ccc"
                   style="border-radius: 2px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);margin-bottom:60px">
            <el-menu-item index="presonal" @click="$router.push('/Maincontrol/personalcenter/'+user_id)">推荐</el-menu-item>
            <el-menu-item index="love" @click="$router.push('/Maincontrol/love/'+user_id)">热榜</el-menu-item>
            <el-menu-item>
            <el-dropdown>
              <span class="el-dropdown-link" style="color:#ccc">
                分类<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item index="label1" @click.native="$router.push('/Maincontrol/label1/'+user_id)">性挑逗</el-dropdown-item>
                <el-dropdown-item index="label2" @click.native="$router.push('/Maincontrol/label2/'+user_id)">性贿赂</el-dropdown-item>
                <el-dropdown-item index="label3" @click.native="$router.push('/Maincontrol/label3/'+user_id)">性协迫</el-dropdown-item>
                <el-dropdown-item index="label4" @click.native="$router.push('/Maincontrol/label4/'+user_id)">性迫害</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            </el-menu-item>
            <el-menu-item index="noRedictDonate" @click="$router.push('/Maincontrol/noRedictDonate/'+user_id)">指南</el-menu-item>
            <el-menu-item index="person" @click="$router.push('/Maincontrol/person/'+user_id)">个人中心</el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-main width="70%">
        <el-col :span="22" :offset="1"
                style="border-radius: 2px; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);margin-top:-28px;margin-bottom:60px;min-height:700px">
          <router-view></router-view>
        </el-col>
      </el-main>
    </el-container>

    <el-footer>
      <el-col :span="24"></el-col>
      <MainBottom></MainBottom>
    </el-footer>
  </div>
</template>

<script>
import '../../assets/baseStyle.css'
import MainTop from "../MainTop";
import MainBottom from "../MainBottom";
import axios from "axios";
var root_url = 'http://localhost:9090'
import SearchBar from "../SearchBar";

export default {
  name: 'Maincontrol',
  components: {SearchBar, MainTop, MainBottom},
  data() {
    return {
      header_info: {
        height_line: -1,
        if_login: true,
        user_type: '0', // 0 is donator, 1 is reciver
        if_show_navi: false
      },
      navi_info:{
        if_searchBar:false,
        navi_list:[
          {name: '首页',path:'/'},
          // {name: '项目列表',path: ''}
        ],
        now_place:'个人中心'
      },
      donor_info: {}
    }
  },
  created() {
    this.user_id = this.$route.params.user_id
    console.log('loading personal center', this.user_id)
    // this.getParams()
    // this.get_center_info_test()

  },
  methods: {
    get_center_info_test() {
      var res = {
        donor_id: 2,
        data: {
          "donorHistory": [
            {
              "TargetId": 2,
              "DonorId": 2,
              "Category": 2,
              "DonateMaterials": "电热毯：20",
              "IfStandard": 1,
              "IfAudit": 1,
              "DonateTime": "2020-06-29T16:20:58.177748+08:00",
              "MatchPro": 2,
              "IfAnonymous": 0,
              "Message": "要开心"
            },
            {
              "TargetId": 3,
              "DonorId": 2,
              "Category": 3,
              "DonateMaterials": "蜡笔：10",
              "IfStandard": 1,
              "IfAudit": 1,
              "DonateTime": "2020-06-29T16:21:02.502261+08:00",
              "MatchPro": 3,
              "IfAnonymous": 0,
              "Message": "快快乐乐！"
            }
          ],
          "donorInfo": {
            "DonorID": 2,
            "Account": "123457",
            "Password": "111",
            "Nickname": "bob",
            "Name": "bob",
            "IdNumber": "123457",
            "CurResidence": "湖南长沙",
            "City": "长沙",
            "Avatar": "",
            "LoveValue": "100",
            "Profile": ""
          },
          "msg": "查询成功",
          "proList": [
            {
              "materials": "电热毯：50；热水袋：50；保暖衣：100",
              "proId": "2",
              "proIntro": "养老院a现需要电热毯，热水袋若干，为老人的冬天带来温暖",
              "proName": "为老人献爱心",
              "rec_donation_num": "2"
            },
            {
              "materials": "水彩笔：30套；蜡笔：30套；画本：100本",
              "proId": "3",
              "proIntro": "给自闭症儿童一只展现自己的画笔",
              "proName": "孩子们的是艺术道路",
              "rec_donation_num": "1"
            }
          ],
          "status": 200
        }
      }
      this.proList = res.data.proList
      this.donorInfo = res.data.donorInfo
      this.donorHistory = res.data.donorHistory
    },
    get_center_info() {
      //api请求方法
      let data = {"donor_id ": this.user_id};
      // axios.post(`${this.$url}/test/testRequest`,data)
      axios.get(root_url + `/donor/personalCenter`, {
        params: {
          donor_id: this.user_id,
        }
      })
        .then(res => {
          console.log('res=>', res);
          if (res.status === 200) {
            //登陆成功，直接跳转到个人中心
            this.proList = res.proList
            this.donorInfo = res.donorInfo
            this.donorHistory = res.donorHistory
          } else {
            this.$message.error('获取信息失败~');
          }
        })
    },
    getParams() {
      // 取到路由带过来的参数
      console.log('presonal center 准备数据中。。。。。', this.$route.params.jum)
      // 将数据放在当前组件的数据内
      const routerParams = this.$route.params.jum
      this.header_info = routerParams.header_info
      this.donor_info = routerParams.donor_info
      this.header_info.height_line = -1//哪一个link 块被选中，即表示当前页
      this.header_info.if_show_navi = false
      this.header_info.if_login = true
      console.log('数据已准备好！')
    },
    gotoPage(a, b, c) {
      console.log('123454657')
      console.log(a)
      console.log(b)
      console.log(c)
    },
    go() {
      this.$router.push("/Maincontrol/label1");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .findpassword {
    background-color: #F1F1F1;
  }
</style>
