import Taro,{Component,View,Text,Image} from '@tarojs/taro';
import {AtNavBar, AtButton} from 'taro-ui';
import './success.scss';
import Dui from './image/dui.png'

export default class Success extends Component{
    constructor(props){
        super(props);
    }

    handleBackClk(){
        Taro.navigateBack();
    }

    handlePjClk(){
        
    }
    render(){
        return (
            <View >
                <View style={{marginTop:`${global.fl}px`}}>
                    <AtNavBar
                    color='#000000'
                    leftIconType = 'chevron-left'
                    onClickLeftIcon = {this.handleBackClk.bind(this)}
                    
                    />
                </View>
                <View className="Icon">
                    <Image src={Dui} className="duiIcon"/>
                    <View>
                        <Text className="hyxc">退房成功</Text>
                    </View>
                    <View>
                        <Text className="tfInfo">欢迎下次光临</Text>
                    </View>
                    <View>
                        <View className="pjbtn" onClick={this.handlePjClk.bind(this)}>
                            <Text className="pj">去评价</Text>
                        </View>
                        <View className="pjInfo">
                            <Text className="pjMsg">评价后会有惊喜哦!</Text>
                        </View>
                        
                    </View>
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