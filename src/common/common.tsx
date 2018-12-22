import Taro,{Component,View} from '@tarojs/taro'；
import './common.scss';

export default class Common extends Component{
    constructor(){
        super(...arguments);
        this.state = {
            windowHeight:0
        }
    }
    componentDidMount () { 
        var that = this;
        wx.getSystemInfo({
          success: function(res) {
            console.log(res.windowHeight);
            that.setState({
              windowHeight: res.windowHeight
            })
          },
        })
      }

    render(){
        return(
            <View className="nav-wrap" style={{height:`${this.state.windowHeight}*2+20`px;}}>
                <View className="nav-title" style={{line-height:`${this.state.windowHeight}*2+44`px;}}>{this.props.title}</View>
                <View style={{display: flex; justify-content: space-around;flex-direction: column}}>

                </View>
            </View>
        );
    }
}