import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css")
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css")
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      'pages/tx/index',
//      'pages/tx/order',
      'pages/ks/ks',
      'pages/kffw/index',
      'pages/tf/index',
      'pages/tf/success',
      'pages/pj/index'
    ],
    window: {
      navigationStyle:'custom'
      //backgroundTextStyle: 'none',
      //navigationBarBackgroundColor: '#fff',
      //navigationBarTitleText: '享住小程序',
      //navigationBarTextStyle: 'black'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.getSystemInfo({
  success: res => {
    let titleBarHeight = 0;
    if(res.system.indexOf("Android") !== -1){
      titleBarHeight = 68;
      global.fl = 0;
    }else{
      if(res.model.indexOf("iPhone X") !== -1){
        titleBarHeight = 88;
        global.fl = 43;
      }else{
        titleBarHeight = 64;
        global.fl=0;
      }
    }
    global.barHeight = titleBarHeight;
    global.barLineHeight = titleBarHeight + res.statusBarHeight;
    global.statusBar = res.statusBarHeight;
  }
})


Taro.render(<App />, document.getElementById('app'))
