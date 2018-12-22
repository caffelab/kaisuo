import Taro,{View,Text,Button,Image,Component} from '@tarojs/taro';
import './index.scss';
import HomeImg from './img/hourse.png';
import MyImg from './img/my.png';


export default class Rz extends Component{
    
    constructor(){
        super(...arguments);
    }
    handleClick(value){
        this.setState({
                current:value
            });
        
    }

    handleRoom(value){

    }

    handleRzClick(){
        Taro.redirectTo({
            url: '../../pages/tx/tx'
        });
    }

    navigateTo(url){
        Taro.redirectTo({url:url});
    }

    render(){
        return (
            <View className="at-row bg"> 
                <Text className="at-col title">享住—小程序</Text>
                <View className='wcShadow'/>
                <View className="buttonRz" onClick={this.handleRzClick.bind(this)} >
                    <Text className="textValue">我要入住</Text>
                    <Button className="clkButton"/>
                </View>
                
                <View className="bottomMenu">
                    <View className="roomButton" onClick = {this.handleClick.bind(this)}>
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