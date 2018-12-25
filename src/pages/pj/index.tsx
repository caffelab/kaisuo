import Taro,{Component,View,Text,Image} from '@tarojs/taro';
import './index.scss';
import { AtNavBar } from 'taro-ui';

export default class Pj extends Component{
    constructor(props){
        super(props);
    }

    handleBackClk(){
        Taro.navigateBack();
    }

    render(){
        return(
            <View>
                <AtNavBar
                color='#000000'
                leftIconType = 'chevron-left'
                onClickLeftIcon = {this.handleBackClk.bind(this)}
                title = '评价'
                />
                <View className="line1"/>
                <View className="jdInfo">
                    <Image className=""/>
                </View>
            </View>
        );
    }
} 