<template>
  <div>
    <el-header>
      <MainTop :header_info="header_info"></MainTop>
    </el-header>

        <el-main style="width:1440px;background:#F1F1F1 ">
      <el-row>
        <el-col :span="12" :offset="3">
          <div style="background: white;height: 360px">
            <el-row>
              <el-col :span="12">
                <div style="width: 90%;margin: 5%;text-align:center;vertical-align:middle;">
                  <img src='../../assets/me-too1.jpeg' class="image"
                       style="height:280px;margin-top:10px">
                </div>
              </el-col>
              <el-col :span="12">
                <div style="margin: 5%;">
                  <div class="need_staff" style="text-align: left">
                    <p class="project_name">{{project_detail.proName}}</p>
                    <p class="project_info">
                      <span>
                        <i class="el-icon-location" style="color: red"></i>
                        {{project_detail.RecAddress}}
                      </span>
                    </p>
                    <p class="project_info">
                      <span>{{demander_info.company}}</span>
                    </p>
                    <p class="project_info">
                      <span>
                        热度：
                        <i v-for="i in project_detail.emergency" :key="i" class="el-icon-star-on"
                           style="color: red"></i>
                      </span>
                    </p>
                    <p class="project_info">
                      <span>{{"参与度： "+project_detail.participantsNumber +" 人次"}}</span>
                    </p>
                  </div>
                  <div>
                    <p style="font-size:10px;text-align:left">高中很喜欢化学老师，很敬重，他的课堂很生动，我现在大二，也学化学。我毕业时加了他QQ，他隔段时间会找我聊天。高中很喜欢化学老师，很敬重，他的课堂很生动，我现在大二，也学化学。我毕业时加了他QQ，他隔段时间会找我聊天。可谁知道他居然那样说。我一想到那些字句，心都发沉，喘不过来气。</p>
                  </div>

                </div>

                <el-button type="danger" round @click="donateSuppliesFormVisible = true">回复</el-button>

              </el-col>
            </el-row>

          </div>
        </el-col>


        <el-col :span="5" :offset="1">
          <div style="background: white;height: 320px">

            <div class="block">
              <el-row>
                <img src="../../assets/katherine.png" style="margin: 10%; height: 100px;border-radius:50%"/>
              </el-row>
              <el-row>
                <span>{{demander_info.company}}</span>
              </el-row>
            </div>
            <el-row>
              <p style="margin-right: 5%;margin-left: 5%;text-align: center;line-height: 30px">
                {{demander_info.profile}}
              </p>
            </el-row>

          </div>
        </el-col>
      </el-row>

      <el-row style="margin-top: 1%">
        <el-col :span="12" :offset="3">

          <div v-for="i in ldetial" :key="i.idlou" class="project_card">
          <el-row style="margin-top: 1%">
          <div style="background: white;text-align: left;">
            <div style="padding: 5%">
              <nobr class="demander_detail" style="margin-top: -50px">{{"第"+i.idlou+"楼"}}</nobr>
              <nobr style="margin-left:70%;margin-top: -50px"><img :src="i.img" style="height:40px;margin-top:10px;border-radius:50%"/></nobr>
              <nobr class="footprint_info" style="margin-left:">{{i.name}}</nobr>
               
                <div class="demander_info" style="margin-top: 1%">
                  <!--<div v-for="(item,idx) in project_detail.materials.split('；')">-->
                    <el-row>
                    <el-col :span="6">
                    <nobr class="demander_type">{{i.title}}</nobr>
                    </el-col>
                    <el-col :span="6" :offset="10">
                    <nobr class="footprint_info" style="margin-left:50%">{{i.time}}</nobr>
                    </el-col>
                    </el-row>
                    <el-row>
                    <p>{{i.text}}</p>
                    </el-row>
                    <!--<p>{{'需求数量：'+project_detail.materials.item.split('：')[1]}}</p>
                    <p>{{'剩余需求：'+item.split('：')[1]}}</p>-->
                  <!--</div>-->
                </div>
                <el-badge :value="2" class="item">
                  <el-button size="small">评论</el-button>
                </el-badge>

            </div>

          </div>
          </el-row>
          </div>

          <div>
            <el-row v-for="(item,index) in supplies_list" :key="item.supply_id" class="supply_info">
              <div style="background: white;text-align: left;margin-top: 1%;padding: 5%">
              <el-row>             
              <nobr class="demander_detail" style="margin-top: -10px">{{"第"+(item.amount+1)+"楼"}}</nobr>
              <nobr style="margin-left:70%;margin-top: -30px"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></nobr>
              <nobr class="footprint_info" style="margin-left:">{{item.username}}</nobr>
              </el-row>
              <el-row>
              <div class="demander_info" style="margin-top: 1%">
                  <!--<div v-for="(item,idx) in project_detail.materials.split('；')">-->
                  <el-col :span="19">
                  <nobr class="demander_type">{{item.title}}</nobr>
                  </el-col>
                  <el-col :span="4">
                    <nobr class="footprint_info" style="text-align:right">{{item.time}}</nobr>
                  </el-col>
                    <!--<p>{{'需求数量：'+project_detail.materials.item.split('：')[1]}}</p>
                    <p>{{'剩余需求：'+item.split('：')[1]}}</p>-->
                  <!--</div>-->
                </div>
              </el-row>
              <el-row>
              <p>{{item.text}}</p>
              <p class="supply_item" style="line-height: normal">
                <img :src="item.img_info[0].url" style="width: 20%">
              </p>
                
              </el-row>
              <el-row>
              <el-col :span="6" class="supply_item">
                <el-badge class="item">
                  <el-button size="small">评论</el-button>
                </el-badge>
              </el-col>
              <el-col :span="3" class="supply_item">
                <i class="el-icon-delete" style="color: red" @click="openDelete(index)"></i>
              </el-col>
              </el-row>
              </div>
            </el-row>
          </div>

          

        </el-col>
        <el-col :span="5" :offset="1">
          <div style="background: white;text-align: left">
            <div class="footprint_titel">
              她刚刚来过
            </div>
            <div v-for="(l,i) in donate_footprint" :key="i" style="padding: 2%" class="footprint_card">
              <el-row>
                <el-col :span="4">
                  <div>
                    <img :src="l.img" style="height:40px;margin-top:10px;border-radius:50%"/>
                  </div>
                </el-col>
                <el-col :span="20">
                  <p class="footprint_info">{{l.name}} 来看了一眼</p>
                  <p class="footprint_info">{{l.donorTime.split('T')[0]}}</p>
                  <!--<p class="footprint_info">{{l.donateMaterials}}</p>-->
                </el-col>
              </el-row>
              <el-row>
                <div v-if="l.massage">
                  <el-collapse v-model="activeNames" @change="handleChange">
                    <!--<el-collapse-item title="爱心留言" style="border-bottom: 0">
                      <p>{{l.massage}}</p>
                    </el-collapse-item>-->
                  </el-collapse>
                </div>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>

      <!--                弹窗-->
      <el-dialog title="回复帖子" :visible.sync="donateSuppliesFormVisible" style="text-align: left">
        <el-form :model="form">
          <el-form-item label="" :label-width="formLabelWidth">
            <el-form-item label="小标题" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="form.title" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="回复内容" :label-width="formLabelWidth">
                <el-input type="textarea" v-model="form.text" autocomplete="off"></el-input>
            </el-form-item>
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemoveItem"

              list-type="picture">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="closeNoAdd">取消</el-button>
          <el-button type="primary" @click="closeAdd">添加</el-button>
        </div>
      </el-dialog>


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
import axios from "axios";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import h5 from "../../assets/h5.png";
import h4 from "../../assets/katherine.png";

var root_url = 'http://localhost:9090'
export default {
  components: {MainTop, MainBottom, SearchBar},
  name: "ProjectDetail",
  data() {
    return {
      circleUrl: "../../assets/katherine.png",
      img_url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      activeNames: ['0'],
      donateSuppliesFormVisible: false,
      supplies_list: [],
      header_info: {
        height_line: -1,
        if_login: false,
        user_type: '0', // 0 is donator, 1 is reciver
        if_show_navi: false
      },
      form: {
        type:false,
        text: "",
        username: 'candy',
        time:'2020-06-29 17:23:58',
        title:"",
        amount: 5,
        img_info: [{
          name: '',
          url: ''
        }],
        identitfy: false,
      },
      navi_info: {
        if_searchBar: false,
        navi_list: [
          {name: '首页', path: '/'},
          {name: '项目列表', path: '/projectList'},
          // {name:'项目详情',path:''}
        ],
        now_place: '项目详情'
      },
      demander_info: {},
      donate_footprint: {},
      project_detail: {},
      ldetial: {}
    }
  },
  created() {
    this.pro_id = this.$route.params.pro_id
    this.get_project_detail_test()

    var t = 5 - Number(this.project_detail.emergency)
    console.log('t:', t)
    console.log('this.project_detail.emergency:', this.project_detail.emergency)
    this.project_detail.emergency = t

    this.navi_info.now_place = this.project_detail.proName

    this.project_detail.demander_name = this.demander_info.company
    // this.project_detail.demander_id = this.demander_info.id
    // this.getParams()
    console.log('this.navi_info', this.navi_info)

  },
  methods: {
    get_project_detail_test() {
      var res = {
        "donorInfo": [
          {
            "donorTime": "2020-06-29 16:20:58",
            "name": "bob",
            "img": h1
          },
          {
            "donorTime": "2020-06-29 17:23:58",
            "name": "nancy",
            "img": h2
          },
          {
            "donorTime": "2020-06-29 17:23:58",
            "name": "katherine",
            "img": h3
          },
          {
            "donorTime": "2020-06-29 17:23:58",
            "name": "kate",
            "img": h4
          },
          {
            "donorTime": "2020-06-29 17:23:58",
            "name": "cindy",
            "img":h5
          }
        ],
        "msg": "项目详情如下",
        "ldetial":[
          {
            "title": "抱抱答主",
            "time": "2020-06-29 17:23:58",
            "text": "其实很佩服答主这样女孩子，我闺蜜也受到过骚扰，她可没有答主这样的应对，她男朋友和她异地，两人在一起的时候没人敢骚扰她。之前她被房东骚扰过，她男朋友去了一次那房东就老实了，后来到期了就搬走了，作为闺蜜，我很难让她变成答主这样，只是希望我们都能更强壮一些，别人不敢怎么她。话说前几天劝架，单臂把同学拎走也是挺自豪的，呼呼",
            "idlou": "1",
            "name": "katherine",
            "img": h1
          },
          {
            "title": "嘿嘿",
            "time": "2020-06-29 17:23:58",
            "text": "谢谢，楼主也脚着自己很棒。占便宜被揭穿还装傻充愣，企图把我的智商拉至同一水平线，哼！这种人渣就是欠收拾，只骂他两句算是轻的。",
            "idlou": "2",
            "name": "bob",
            "img": h2
          },
          {
            "title": "jio得生气",
            "time": "2020-06-29 17:23:58",
            "text": "为什么有些人可以色的这么肮脏，毫不知耻。而且还不是一点点人，这个世界实在太可怕了。",
            "idlou": "3",
            "name": "candy",
            "img": h3
          },
          {
            "title": "想要爱情哼",
            "time": "2020-06-29 17:23:58",
            "text": "爱情本身是一种神圣的东西，却要以肮脏挂钩。",
            "idlou": "4",
            "name": "nancy",
            "img": h4
          },
          {
            "title": "心情好多了",
            "time": "2020-06-29 17:23:58",
            "text": "感觉和大家这样一聊心情好多了哈哈(^-^)",
            "idlou": "5",
            "name": "katherine",
            "img": h5
          }
        ],
        "proDetails": {
          "RecAddress": "广州",
          "category": "2",
          "emergency": "0",
          "intro": "养老院a现需要电热毯，热水袋若干，为老人的冬天带来温暖",
          "materials": "电热毯：50；热水袋：50；保暖衣：100",
          "title": "大家觉得我应该怎么办呢",
          "text": "楼主今年结婚两年，孩子刚满月，最近发现我丈夫。。。",
          "participantsNumber": "5",
          "proId": "2",
          "proName": "你有过被老师性骚扰的经历吗？且你是怎样排除心理阴影的？"
        },
        "recipientInfo": {
          "company": "楼主：Katherine",
          "profile": "大二化学喵"
        },
        "status": 200
      }
      this.project_detail = res.proDetails
      this.demander_info = res.recipientInfo
      this.donate_footprint = res.donorInfo
      this.ldetial = res.ldetial

      // this.project_detail.materials =
    },
    closeNoAdd() {
      this.donateSuppliesFormVisible = false;
    },
    closeAdd() {
      this.donateSuppliesFormVisible = false;
      this.supplies_list.push(this.form);
      // 初始化
      console.log(this.form);
      this.form={
        type:false,
          type:false,
          text: "",
          username: 'candy',
          time:'2020-06-29 17:23:58',
          title:"",
          amount: 5,
          img_info: [{
          name: 'food.jpeg',
          url: ''
        }],
          identitfy: false,
      }
      console.log(this.form);
    },
    editSupplyInfo(index) {
      // 修改添加的物资信息
      console.log('this is edit supply function~')
      console.log(this.supplies_list[index])
      this.donateSuppliesFormVisible = true
      this.form = this.supplies_list[index]
      console.log(this.supplies_list)
    },
    openDelete(index) {
      this.$confirm('此操作将永久删除该回复, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        console.log(this.supplies_list[index])
        this.supplies_list.splice(index, 1)
        console.log(this.supplies_list)

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    get_project_detail() {
      //api请求方法
      // let data = {"pro_id ": };
      axios.get(root_url + `/projects/prodetails`, {
        params: {
          pro_id: this.pro_id,
        }
      })
        .then(res => {
          console.log('res=>', res);
          if (res.status === 200) {
            //登陆成功，直接跳转到个人中心
            this.project_detail = res.proDetails
            this.demander_info = res.recipientInfo
            this.donate_footprint = res.donorInfo
          } else {
            this.$message.error('获取信息失败~');
          }
        })
    },
    getParams() {
      // 取到路由带过来的参数
      console.log('准备数据中。。。。。')
      // 将数据放在当前组件的数据内
      // console.log(this.$route.params)
      const routerParams = this.$route.params.jum
      this.header_info = routerParams.header_info
      this.header_info.height_line = -1//哪一个link 块被选中，即表示当前页
      this.header_info.if_show_navi = false
      console.log('数据已准备好！')
    },
    handleChange(val) {
      console.log(val);
    },
    gotoDonate(e) {
      //判断是否登录，如果未登录需要跳转登录页
      console.log('if login')
      console.log(this.header_info.if_login)
      // this.$router.push('/login');
      if (this.header_info.if_login) {
        //直接跳转
        window.console.log("跳转填写页");
        // 保存页面信息
        var test_data = JSON.stringify(this.project_detail)
        console.log('json data', test_data)
        window.sessionStorage.setItem('pro_detail', test_data)
        var donor_info = JSON.parse(window.sessionStorage.getItem('donor_info'))
        console.log('json data donor_info', this.donor_info)
        this.$router.push("/donateList/input/" + this.pro_id + "/" + donor_info.donor_id);
      } else {
        //直接跳转到个人中心
        this.$message({
          type: 'info',
          message: '请先登录~'
        });
        this.$router.push('/login');
      }

    }
  }
}
</script>

<style scoped>
  .project_name {
    font-size: 20px;
    line-height: 26px;
    color: crimson;
  }

  .project_info {
    font-size: 12px;
    line-height: 12px;
    color: gray;
  }

  .project_info > span {
    margin-right: 10px;
  }

  .demander_detail {
    font-size: 20px;
    line-height: 23px;
  }

  .demander_type {
    color: crimson;
  }

  .footprint_titel {
    line-height: 23px;
    font-size: 20px;
    color: crimson;
    text-align: center !important;
    padding: 5%;
  }

  .footprint_info {
    color: gray;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 15px;
  }

  .footprint_card {
    border-bottom: 1px solid #ffb6c1;
  }

  .footprint_card:last-child {
    border-bottom: 0px;
  }

  .el-collapse-item__header, .el-collapse-item__wrap,
  .el-collapse-item:last-child {
    border-bottom: 0px !important;
  }

  .el-collapse {
    border: 0px !important;
  }
</style>
