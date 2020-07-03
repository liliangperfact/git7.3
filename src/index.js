// import indexCss from './public/css/index.css'
// import imgSrc from './public/img/16.jpg'


// console.log(666)
// let p = document.createElement('p')
// p.innerHTML="我爱你"
// document.getElementById("root").appendChild(p)
// console.log(666111);
// let as = "梁哥好帅啊"
// console.log(as)
// let imgNode = new Image()
// imgNode.src = imgSrc
// document.body.appendChild(imgNode)
import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
new Vue({
  el:'#root',
  // components:{
  //   App
  // },
  // template:'<App/>'
  //render:h => h(App),//注册APP文件，并且进行渲染，returnonly版本可以使用
  render:function(h){
    return h(App)
  }
})


