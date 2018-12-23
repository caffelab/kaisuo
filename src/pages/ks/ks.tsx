import Taro,{Component,View,Text,Image} from '@tarojs/taro';
import './index.scss';
import HomeImg from '../index/img/hourse.png';
import MyImg from '../index/img/my.png';
export default class Ks extends Component{
    render(){
        return(
            <View className="col bg">
                <Text className="at-col title">享住—小程序</Text>
                <View className="centerView">
                    <View className="codeShow">
                        <View className="password">入房密码：123456</View>
                        <View className="gqsj">时效：23时00分前</View>
                        <View>
                            <Image class="qccode"/>
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
