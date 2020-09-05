<template>
  <div style="padding:5%;text-align:left">
<div >
			<h1>性挑逗</h1>
				<h2>性暗示，即通过言语、行为举止甚至于服装穿着及其他事物，隐藏性地让人联想到性相关事物的一种暗示。</h2>
				<h2>亲密关系间有意的性暗示可调节气氛，而非亲密关系的性暗示很可能构成性骚扰，触犯到法律条例。</h2>
			<ul>
        <img src="../../assets/label1.jpeg"/>
				<li><h2>意义</h2></li>
				<h3>夫妻之间不同形式的性暗示都是有积极作用的，它可以营造一个良好的性爱氛围，使欢爱以更新鲜的方式开始。但是在公共场合使某些人感觉不悦甚至感受到侵犯的性暗示则很可能构成性骚扰。在很多国家，性骚扰被视为一种犯罪行为。</h3>
				<li><h2>误会</h2></li>
				<h3>无意的性暗示多指不经意的行为举动及言语或其他事物让某些人联想到性相关事物的一种暗示。 这例如无意识的舔舌头，不适当的措辞及过于性感的着装等等，都很容易让某些人误会为性暗示。
	男性易将女性友谊看作性暗示许多女性都有这种经历：自己把某个男子当作普通的异性朋友，但是他却把自己对他的好感当成性暗示。在一项最新的心理学研究中，研究人员发现，在大学阶段，男生误将女性身体语言和面部表情错认为是性暗示的比率是12%，而大学女生错误判断男性示好的比率只有8.7%，这一研究发表在四月号的《心理学》月刊上。</h3>
			</ul>
		</div>


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
  name: "Label",
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
