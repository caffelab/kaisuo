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
    render(){
        return(
            <View className="col bg">
                <Text className="at-col title">享住—小程序</Text>
                    <View className="centerView">
                        <View className="displayOr">
                            <View className="codeShow">
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
                                <View className='rowLine'></View>
                                <View className='columnLine'></View>
                            </View>
                                    
                                
                                <View className="menuItem1">
                                    <View className="">
                                        <Image className="serverIcon" src='http://imgs.guoxiaoge.cn/kffw@3x.png'/>
                                    </View>
                                    <View className="">
                                        <Image className="tf" src='http://imgs.guoxiaoge.cn/tf.png'/>
                                    </View>
                                </View>
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
                    
                    <View className="qc">
                        <View class="boder">
                            <Image src={Demo} className='demo'/>
                        </View>
                        <View className="rfmmView">
                            <Text className="rfmm">入房密码:123456</Text>
                        </View>
                        <View className="sxView">
                            <Text className="sx">(时效23时00分前)</Text>
                        </View>
                        <View className="close">
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
