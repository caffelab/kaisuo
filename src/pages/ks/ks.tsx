import Taro,{Component,View,Text,Image} from '@tarojs/taro';
import './index.scss';
import HomeImg from '../index/img/hourse.png';
import MyImg from '../index/img/my.png';
import QcCode from '../ks/img/erweima.png';
import Demo from '../ks/img/demo.jpg';
import Close from '../ks/img/close.png';
/**
 * 本页面实现入房密码页面功能
 * @author ZCX
 * @since 2018年12月24日
 * @version 0.1
 */
export default class Ks extends Component{
    constructor(props){
        super(props);
        this.hight = global.fl+700;
        this.setState({
            lay_1:'display',
            lay_2:'none'
        });
    }
    handleShowClk(){
        this.setState({
            lay_1:'none',
            lay_2:'display'
        });
    }
    handleHiddenClk(){
        this.setState({
            lay_1:'display',
            lay_2:'none'
        });
    }
    handleKffwClk(){
        //Taro.navigateTo({url:'../kffw/index'});
    }
    handleTfClk(){
        Taro.navigateTo({url:'../tf/index'});
    }
    render(){
        return(
            <View className="col bg">
                <View style={{marginTop:`${global.fl}px`}}>
                    <Text className="at-col title">享住—小程序</Text> 
                </View>
               
                    <View className="centerView">
                        <View className="displayOr" style={{display:`${this.state.lay_1}`}}>
                            <View className="codeShow" onClick={this.handleShowClk.bind(this)}>
                                <View className="date">
                                    <View className="password">入房密码：123456</View>
                                    <View className="gqsj">时效：23时00分前</View>
                                </View>
                                <View className='qccodeIcon'>
                                    <Image src={QcCode} className='qccode'/>
                                </View>
                            </View>
                        
                            <View className='menuView'>
                            <View className='lineTable'>
                                
                                <View className='columnLine'/>
                            </View>
                                    
                                
                                <View className="menuItem1">
                                    <View className="" >
                                        <Image className="serverIcon" src='http://imgs.guoxiaoge.cn/kffw@3x.png' onClick={this.handleKffwClk.bind(this)}/>
                                    </View>
                                    <View className="">
                                        <Image className="tf" src='http://imgs.guoxiaoge.cn/tf.png' onClick={this.handleTfClk.bind(this)}/>
                                    </View>
                                </View>
                                <View className='rowLine'/>
                                <View className='menuItem2'>
                                    <View className="">
                                        
                                        <Image className='yqIcon' src="http://imgs.guoxiaoge.cn/yq.png"/>
                                    </View>
                                    <View className="">
                                        <Image src='http://imgs.guoxiaoge.cn/kf.png' className='kfIcon'/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    
                    <View className="qc" style={{display:`${this.state.lay_2}`}}>
                        <View class="boder">
                            <Image src={Demo} className='demo'/>
                        </View>
                        <View className="rfmmView">
                            <Text className="rfmm">入房密码:123456</Text>
                        </View>
                        <View className="sxView">
                            <Text className="sx">(时效23时00分前)</Text>
                        </View>
                        <View className="close" onClick={this.handleHiddenClk.bind(this)}>
                            <Image src={Close} className="closeIcon"/>
                        </View>
                    </View>
                </View>
                <View className="bottomMenu">
                    <View className="roomButton" >
                        <Image className="iconStyle" src={HomeImg}/>
                        <Text className="textStyle">房间</Text>
                    </View>
                    <View className="myButton">
                        <Image className="iconStyle" src={MyImg}/>
                        <Text className="textStyle">我的</Text>
                    </View>
                </View>
            </View>
        );
    }
}
