<template>
  <div style="padding:5%">
  <el-collapse v-model="activeNames" accordion>
  <el-collapse-item name="1">
    <template slot="title">
      <p style="font-size:24px"><b>性骚扰的定义</b></p>      
    </template>
    <div style="text-align:left">1、对你施加性相关的言语和行为，而且明示或暗示，是否与之合作或屈从是你个人在学习、进修、升学、就业、生活环境以及参与学校活动方面能否顺利得到机会或获取更多好处的前提条件。</div>
    <div style="text-align:left">2、有人对你，或者对于工作和学习环境里其他人，施加与性有关的语言与行为，影响了你们的学习、工作和生活环境，并且对于学习、深造、就业和生活方面造成了恐吓、威胁、冒犯、或迫害。要注意，性骚扰也可能发生于同性之间，受害者可能是任一性别。</div>
  </el-collapse-item>
  <el-collapse-item  name="2">
    <template slot="title">
      <p style="font-size:24px"><b>性骚扰的方式</b></p>      
    </template>
    <div style="text-align:left"><p style="font-size:16px"><b>性挑逗：</b></p>不受欢迎的、不合时宜的、冒犯的性接近，包括不受欢迎的性语言，个人关注，身体触碰和性举动。譬如以跟踪、挡住去路等方式进行施压；故意触碰对方的肢体（掀裙子、趁机抚摸胸部及其他身体的部分或暴露性器官等）等俗称“吃豆腐”的行为。</div>
    <div style="text-align:left"><p style="font-size:16px"><b>性贿赂：</b></p>以利益承诺、利诱方式要求他人从事与性有关的行为或与性相关的活动。譬如：厦大博导性骚扰女学生事件；校方、院系领导、学科带头人、任课教师或辅导员等，以约会或发生性接近行为，作为加分、及格、好的成绩、推荐升学、介绍就业等特别优待的条件。</div>
    <div style="text-align:left"><p style="font-size:16px"><b>性胁迫：</b></p>以利益承诺、利诱方式要求他人从事与性有关的行为或与性相关的活动。例如：老师以成绩、重修、开除学籍等威胁学生，要求学生提供性服务。</div>
    <div style="text-align:left"><p style="font-size:16px"><b>性迫害：</b></p>恶劣的性迫害（如强迫性的接触，抚摸，抓揉）或性侵害。性迫害在法律上已经构成强制猥亵或强奸。</div>
  </el-collapse-item>
  <el-collapse-item  name="3">
    <template slot="title">
      <p style="font-size:24px"><b>性骚扰维权渠道</b></p>      
    </template>
    <div style="text-align:left">
    <h2>一、公益机构</h2>
    <p>1. 广州性别教育中心</p>
    <p>2. 为平妇女权益机构</p>
    <p>3. 源众受暴妇女儿童法律咨询热线</p>
    <p>4. 广州新媒体女性</p>
    </div>
    <div style="text-align:left">
    <h2>二、公共部门</h2>
    <p>1. 全国妇联：12338</p>
    <p>2. 公安：110</p>
    </div>
    <div style="text-align:left">
    <h2>三、专项服务</h2>
    <p>1. 自杀干预：广州上馨心理生命24热线。</p>
    <p>2. 自杀干预：北京市心理援助热线：全球三大危机干预中心之一，亚洲最大的心理援助热线。</p>
    </div>
  </el-collapse-item>
  <el-collapse-item  name="4">
    <template slot="title">
      <p style="font-size:24px"><b>性骚扰证据收集指引</b></p>      
    </template>
    <div style="text-align:left">1. 如果是公共场所，留意事发现场或附近是否有监控，报警要求封存、调取视频（例如，广州有超过60万台监控，基本能达到全覆盖）。</div>
    <div style="text-align:left">2. 遭遇性骚扰后，详细记录时间、地点、人物、衣着、行为、感受等. </div>
    <div style="text-align:left">3. 证明发生过性骚扰的聊天记录、录音、邮件（最好可以展示出我方坚决反对态度）或物证。</div>
    <div style="text-align:left">4. 对方承认性骚扰的证据，例如保证书、录音、聊天记录等（第一次摊牌的很重要）。</div>
    <div style="text-align:left">5. 证人证言：事发时的目击证人（须记录目击证人的联系方式）；知情的同事、朋友、老师等（所以遇到性骚扰最好可以告诉别人，他人以后可以证明你为制止性骚扰所作的努力以及对你的影响）；其他遭遇过该施暴者性骚扰的受害者。</div>
    <div style="text-align:left">6. 向有关部门机构求助记录：如公安、妇联、用人单位、学校、公益机构等。</div>
    <div style="text-align:left">7. 证明精神损害程度的证据：精神科门诊病历、诊断证明、医疗发票、心理咨询记录（求助时应说明自己遭遇性骚扰的事实，让咨询师如实记录，以便法院推断性骚扰和精神损害的因果关系）。</div>
  </el-collapse-item>
</el-collapse>


  </div>
</template>

<script>
import MainTop from "../MainTop";
import MainBottom from "../MainBottom";
import SearchBar from "../SearchBar";
import ProjectCard from "../project/ProjectCard"
import axios from 'axios'
var root_url = 'http://localhost:9090'

export default {
  name: "NoRedictDonateList",
  data() {
    return {
      activeNames: '1',
      donate_msg: '',
      donateSuppliesFormVisible: false,
      supplies_list: [],
      form: {
        type:false,
        supply_name: '',
        supply_type: '',
        supply_rule:'',
        amount: 0,
        img_info: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
        identitfy: false,
      },
      formLabelWidth: '120px',
      supply_type_list: [
        {supply_id: '10001', type: '医用护目镜', rules: 'GB 14866 2006 <个人用眼护具技术要求》'},
        {supply_id: '10002', type: '医用手套', rules: 'GB0213-200/I10 119399 1:2002《一次性使用医用橡胶检查手套》'},
        {supply_id: '10003', type: '医用手术帽', rules: 'YY/T 1642-2019 《一次性使用医用防护帽》'},
        {supply_id: '10004', type: '医用鞋套', rules: 'YY/T 1633-2019 《一次性使用医用防护鞋套》'},
        {supply_id: '10005', type: '医用消毒巾', rules: 'GB 15979-2002 《一次性使用卫生用品卫生标准》'},
        {supply_id: '10006', type: '医用消毒剂', rules: 'WS 628 2018《消毒产品卫生安全评价技术要求》卫生部'},
        {supply_id: '10007', type: '红外测温仪', rules: 'GB/T 21417 1-2008《医用红外体温计 第1部分，耳腔式》'},
        {supply_id: '10008', type: '医用口罩', rules: 'YY/T 0969 2013 《一次性使用医用口罩》'},
        {supply_id: '10009', type: '医用防护服', rules: 'GB 19082-2009 《医用一次性防护服技术要求》'},
      ],
      donor_info: {},
      form_type: false,
      if_anonymous:false
    }
  },
  created() {
    this.user_id = this.$route.params.user_id
    console.log('donor_info!', this.user_id)
    this.get_personal_info()
    // this.if_anonymous=false
    console.log(this.donor_info)

  },
  methods: {
    get_personal_info() {
      if (window.sessionStorage.getItem('if_login')) {
        this.donor_info = JSON.parse(window.sessionStorage.getItem('donor_info'))
        console.log('json data', this.donor_info)
      } else {
        this.$message.error('获取信息失败，请重新登录~');
        this.$router.push('/login');
      }
    },
    handleChange(value) {
      console.log(value);
      console.log(this._data)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(fileList);
    },
    selectSupplyType(value) {
      var i;
      for (i of this.supply_type_list) {
        if (i.supply_id === value) {
          this.form.supply_type = i.type;
          this.form.supply_rule = i.rules;
        }
      }
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
          supply_name: '',
          supply_type: '',
          supply_rule:'',
          amount: 0,
          img_info: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
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
      this.$confirm('此操作将永久删除该物资, 是否继续?', '提示', {
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
    identifySupply() {
      console.log('This is identify supply fuction')
      this.form.identitfy = true
    },
    gotoDonateFinished() {
      this.$message({
        type: 'success',
        message: '提交成功'
      });
      this.$router.push("/Maincontrol/" + this.user_id);

    }
  }
}
</script>

<style scoped>
  .project_info > span {
    margin-right: 10px;
  }

  .demander_detail {
    font-size: 20px;
    line-height: 23px;
  }

  .donate_block {
    border-bottom: 1px solid gray;
  }

  .supply_info {
    background: #F1F1F1;
    margin: 2%;
  }

  .supply_item {
    padding: 1%;
    line-height: 100px;
    text-align: center;
  }
</style>
