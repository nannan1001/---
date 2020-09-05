<template>
  <div style="padding:5%;text-align:left">
  <div>
			<h1>抢劫罪中暗示性胁迫如何界定</h1>
      <img src="../../assets/label3.jpeg"/>
      <br></br>
		
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 根据我国刑法的划定,抢劫罪,是指以暴力,胁迫或者其他方法强行劫取公私财物的行为。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 胁迫是指对被害人以当场实施暴力相威胁,来迫使被害人当场交出则一物或当场夺走财物的行为."刑法将胁迫作为与暴力相提并列的抢劫罪的手段之一,充分说明抢劫罪的胁迫并不是轻度意义上的胁迫,也不是广义上的一切胁迫,而是有其严格的界限:即行为人实施胁迫行为,必需是以实施人身暴力相威胁,且这种暴力是可以"当场”入行的。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 抢劫罪"胁迫”的特征第一,胁迫方法具有暴力性。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 假如一种胁迫行为并不是以侵犯人身权利的暴力相威胁,而是采用其他方式,如以毁坏名誉或者是散布隐私为内容吓唬被害人交出财物,则这种胁迫方法就不是抢劫罪中的胁迫而是巧取豪夺罪中的胁迫。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 另外,胁迫方法的内容同样要求达到一定的程度,一般是以殴打,伤害,杀害相威胁,以至足以按捺被害人的反抗。 <br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 抢劫罪中的威胁是为了使被害人当场受到精神强制,使其完全丧失反抗的意志,除将财产当场交出外,没有其它考察,选择的余地。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 第二,胁迫方法具有当场性,即后续的暴力行为和取财行为都是在当场予以实施。 <br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 这是抢劫罪与巧取豪夺罪的最大区别。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 抢劫罪的胁迫要符合两个"当场”,即"当场”当面对被害人以实施暴力相威胁——假如不是当面威胁,则不足以按捺被害人的反抗;"当场”可以将威胁的内容付诸实施——假如胁迫行为固然是当面发出,但所胁迫的暴力付诸实施却是在将来入行,也不能定为抢劫罪。 <br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 胁迫”的特殊情形——暗示暗示主要是指用凶狠的眼神逼迫被害人至墙角后强行取财的行为。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 根据我国《刑法》第二百六十七条第二款的划定:携带凶器抢夺的,依照抢劫罪定罪处罚。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 立法者可能是基于行为人携带的凶器固然没有使用或出示,但有可能对被害人造成暗示性的胁迫从而威胁到被害人的人身安全及财产权利的考虑,才如斯划定了抢劫罪的转化情形。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 因此,可以望出立法者是承认暗示性胁迫的存在的。 <br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 但是并不是所有的暗示性的胁迫行为都可构成抢劫罪,而是要符合一定的前提:其一,暗示的胁迫也必需具有暴力性——只要对被害人传递出"以暴力相威胁”的信息,且被害人也能够感触感染到危险的存期近可。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 其二,暗示的胁迫也必需达到被害人不敢反抗的程度,即已经对被害人的精神造成了巨大的压力;除了当场给付财物外,没有其他办法可供被害人选择。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 可见,暗示的胁迫方法也能构成抢劫罪。<br/>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 总之,认定胁迫是很复杂的,既不能把胁迫仅仅理解成直白的语言或显而易见的动作,也不能将没有任何潜伏性危险的语言和动作理解成暗示的胁迫,而应当从胁迫行为的本质特征入行分析和认定。<br/>
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
  name: "Label3",
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
