import Taro,{Component,View,Text,Picker} from '@tarojs/taro';
import {AtNavBar,AtCalendar} from 'taro-ui';

/**
 * @todo 开房服务填写及提交页面
 * @author zcx
 * @since 2018年12月24日
 * @version 0.1
 */
export default class Index extends Component{
    constructor(props){
        super(props);
        this.setState({
            yjsj : '',//预计到达时间
            bz : ''//备注
        });
    }

    
    render(){
        return (
            <View className="title">
                <AtNavBar
                    className="headerNav"
                    color='#000000'
                    title = "客服服务填写"
                    leftIconType = 'chevron-left'
                />
                <View className="br"></View>
                <View className="timePicker">
                    <Text className="预期到达时间"></Text>
                    <Picker mode='date' onChange={this.onDateChange.bind(this)}>
                    </Picker>
                    <Picker mode="time" onChange={this.onTimeChange.bind(this)}>
                    </Picker>
                </View>
            </View>
        );
    }
}