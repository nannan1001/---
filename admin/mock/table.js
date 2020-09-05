const Mock = require('mockjs')

function randomWord(){
     var str = "",
       range = 4,
       arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
     // 随机产生
     range = Math.round(Math.random() * (12-4)) + 4;
     for(var i=0; i<range; i++){
       pos = Math.round(Math.random() * (arr.length-1));
       str += arr[pos];
     }
     return str;
}

//随机生成身份证ID
function getId_no(){
  var coefficientArray = [ "7","9","10","5","8","4","2","1","6","3","7","9","10","5","8","4","2"];// 加权因子
  var lastNumberArray = [ "1","0","X","9","8","7","6","5","4","3","2"];// 校验码
  var address = "420101"; // 住址
  var birthday = "19810101"; // 生日
  var s = Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString() + Math.floor(Math.random()*10).toString();
  var array = (address + birthday + s).split(""); 
  var total = 0;
  for(i in array){
    total = total + parseInt(array[i])*parseInt(coefficientArray[i]);
  } 
  var lastNumber = lastNumberArray[parseInt(total%11)];
  var id_no_String = address + birthday + s + lastNumber;
  // document.write(id_no_String);
  return id_no_String;
}
			
//随机生成帖子简介
// function random_post(){
//   var index = Math.floor(Math.random() * (3 - 1 + 1) + 1);
//   var post_category = ["求助", "注水","警示"];
//   var warning_content = ["正能量校园反性骚扰互助","羞辱：好莱坞的性骚扰","渣男曝光和反性骚扰","抗击性骚扰","教育部表态“零容忍”，反性骚扰大功告成了吗？","反性骚扰绝不该是一场网络罗生门"]
//   var flowWater_content = ["新人报道贴","注水贴细则","吐槽一下。【别杠，杠就你对，我不会吵架，谢谢。】","大家的兴趣爱好","开个水贴，水经验","水水水水水水水","随便写写","水，升级必水贴"]
//   var help_content = ["怎么样去面对职场的性骚扰？有什么好的方法吗？","领导年轻有为却对我性骚扰，手握微信截图我该举报吗？",
//   "上班时遭到男同事的语言性骚扰怎么办？","你有过被老师性骚扰的经历吗？且你是怎样排除心理阴影的？","如何看待来自男友的性骚扰？",
//   "多次被性骚扰导致心理阴影该怎么办？","你们有被家人性骚扰的经历吗？","被熊孩子性骚扰怎么办？","被驾校教练性骚扰怎么办？","父亲对女儿性骚扰，女儿该怎么办？"]
//   var content = [help_content,warning_content,flowWater_content];
//   var post_content = content[index];
//   var randomContent = post_content[Math.floor(Math.random() *post_content.length)];
//   return [randomContent,post_category[index]];
// }

//随机生成帖子简介
function random_post(){
  var post_content = ["正能量校园反性骚扰互助","羞辱：好莱坞的性骚扰","渣男曝光和反性骚扰","抗击性骚扰","教育部表态“零容忍”，反性骚扰大功告成了吗？","反性骚扰绝不该是一场网络罗生门",
  "新人报道贴","注水贴细则","吐槽一下。【别杠，杠就你对，我不会吵架，谢谢。】","大家的兴趣爱好","开个水贴，水经验","水水水水水水水","随便写写","水，升级必水贴",
  "怎么样去面对职场的性骚扰？有什么好的方法吗？","领导年轻有为却对我性骚扰，手握微信截图我该举报吗？",
  "上班时遭到男同事的语言性骚扰怎么办？","你有过被老师性骚扰的经历吗？且你是怎样排除心理阴影的？","如何看待来自男友的性骚扰？",
  "多次被性骚扰导致心理阴影该怎么办？","你们有被家人性骚扰的经历吗？","被熊孩子性骚扰怎么办？","被驾校教练性骚扰怎么办？","父亲对女儿性骚扰，女儿该怎么办？"]
  var randomContent = post_content[Math.floor(Math.random() *post_content.length)];
  return randomContent;
}

//随机生成投诉信息
function random_complain(){
  var complain_content = ["垃圾营销","涉黄信息","不实信息","人身攻击","有害信息","内容抄袭","违法信息","诈骗信息","地域歧视","种族宗教歧视",
  "平台内恶意投诉","暴恐血腥","侮辱英烈","虐杀动物"];
  var randomComplain = complain_content[Math.floor(Math.random() *complain_content.length)];
  return randomComplain;
}

function random_name(){


}


// 用户信息（捐赠方）
const donator_data = Mock.mock({
  'items|30': [{
    id: '@id',
    'status|1': ['published', 'draft', 'deleted'],
    account: randomWord(),
    donate_times: '@integer(1,100)' // 参与捐赠（次） = 发帖数
  }]
})

// 申请人信息（受赠方）
const demander_data = Mock.mock({
  'items|10': [{
    id: '@id',
    'status|1': ['审核通过', '待审核', '审核未通过'],
    account: randomWord(), //account = 账号
    name: '@cname',   //法人代表 = 真实姓名
    credit_code: getId_no(),   //统一信用代码 = 身份证号
    company:'123@163.com'    //机构名称 = 邮箱
    // com_category:'医疗慈善机构',    //机构类别
    // com_address:'@province()'+'@city()',     //地址
    // com_profile:'@csentence(2,20)'         //机构简介
  }]
})



// 帖子信息（项目管理）
const project_data = Mock.mock({
  'items|50': [{
    id: '@id',
    // pro_name:'@cword(2,7)',    //项目名称
    demander_id:'@integer(1,100)',   //demander_id(发起机构) = 帖子序号
    introduction:random_post(),   //introduction(项目简介) = 帖子简介
    'category|1': ['求助', '注水','警示'],    //帖子类别
    // rec_address:'@province()'+'@city()'+'@cword(2,3)'+'街',   //项目地址
    //materials: '@cword(2,7)',   //materials(需求物资)
    init_time:'@date(yy-mm-dd)'+' 00:00:00',   //开始时间 = 发帖时间
    // end_time:'@date(yy-mm-dd)'+ ' 23:59:59',  //截止时间
    'status|1': ['已封贴', '讨论中','待审核','待发布'],
  }]
})

//投诉信息 （物资管理）
const supplies_data = Mock.mock({
  'items|50': [{
    id: '@id',
    'status|1': ['极端激进', '违反法律'],    //类别
    name:randomWord(),
    standard:random_complain(),   //规格 = 投诉理由
  }]
})

// 捐赠单
// const target_donation_data = Mock.mock({
//   'items|50': [{
//     id: '@id',
//     taget_id:'@id',
//     donator_id:'@id',
//     project_id:'@id',
//     // 'if_anonymous|1':['Yes','No'],
//     if_anonymous:'@integer(0,1)',
//     donate_materials: '@cword(2,5)'+'@integer(1,50)'+'个；'+'@cword(2,5)'+'@integer(1,50)'+'个；'+'@cword(2,5)'+'@integer(1,50)'+'个',
//     message:'@csentence(5,50)',
//     donate_time:'@date(yy-mm-dd)'+'@time(hh-mm-ss)',
//     'status|1': ['已完成', '进行中','待审核'],
//   }]
// })

// const no_target_donation_data = Mock.mock({
//   'items|50': [{
//     id: '@id',
//     taget_id:'@id',
//     donator_id:'@id',
//     if_anonymous:'@integer(0,1)',
//     donate_materials: '@cword(2,5)'+'@integer(1,50)'+'个；'+'@cword(2,5)'+'@integer(1,50)'+'个；'+'@cword(2,5)'+'@integer(1,50)'+'个',
//     message:'@csentence(5,50)',
//     donate_time:'@date(yy-mm-dd)'+'@time(hh-mm-ss)',
//     'status|1': ['待匹配','待审核'],
//   }]
// })



module.exports = [
  {
    url: '/donate-admin-sys/table/donatorList',
    type: 'get',
    response: config => {
      const items = donator_data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/donate-admin-sys/table/demanderList',
    type: 'get',
    response: config => {
      const items = demander_data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/donate-admin-sys/table/suppliesList',
    type: 'get',
    response: config => {
      const items = supplies_data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/donate-admin-sys/table/projectList',
    type: 'get',
    response: config => {
      const items = project_data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/donate-admin-sys/table/targetDonationList',
    type: 'get',
    response: config => {
      const items = target_donation_data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
  {
    url: '/donate-admin-sys/table/noTargetDonationList',
    type: 'get',
    response: config => {
      const items = no_target_donation_data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  },
]


