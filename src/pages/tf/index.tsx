import Taro,{ Component,View,Text,Button} from '@tarojs/taro';
import {AtIcon} from 'taro-ui';
import './index.scss';

export default class Tf extends Component{
    constructor(props){
        super(props);
    }

    handleBackClk(){
        Taro.navigateBack();
    }

    handleTfClk(){
        Taro.navigateTo({url:'../tf/success'});
    }
    render(){
        return (
            <View className="bg" >
            <View style={{marginTop:`${global.fl}px`}}>
                <View  className="icon">
                    <AtIcon value='chevron-left' size='30' color='#fff' onClick= {this.handleBackClk.bind(this)}></AtIcon>
                </View>
                </View>
                <View className="buttonTf" onClick={this.handleTfClk.bind(this)} >
                    <Text className="textValue">我要退房</Text>
                    <Button className="clkButton"/>
                </View>
                <View className="Info">
                    <Text className="ts ">温馨提示:</Text>
                    <View>
                        <Text className='ts1 ts'>1.一旦确定退房您的入住密码和二维码都是即刻失效</Text>
                    </View>
                    <View>
                        <Text className="ts2 ts">2.您的贵重物品都确定带走</Text>
                    </View>
                    <View>
                        <Text className="ts3 ts">3.您进行有效评价后，赠送100元入住基金</Text>
                    </View>
                    
                </View>
            </View>
        );
    }
}

