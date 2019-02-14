import Vue from 'vue'
// .vue文件就是一个组件(html+css+js)
import App from './App.vue'

//引入样式
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./assets/css/index.css"




// 引入
new Vue({
    el: '#app',

    //App组件内容和div#app替换
    render: h => h(App)
})



// main.js  入口文件
// 职责：引入(其他文件都会用)包