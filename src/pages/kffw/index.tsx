import Taro,{Component,View,Text,Textarea,Picker} from '@tarojs/taro';
import {AtNavBar,AtButton} from 'taro-ui';

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

    handleBackBtn(){
        Taro.navigateBack();
    }
    
    render(){
        return (
            <View className="title">
                <AtNavBar
                    className="headerNav"
                    color='#000000'
                    title = "客服服务填写"
                    leftIconType = 'chevron-left'
                    onClickLeftIcon = {this.handleBackBtn.bind(this)}
                />
                <View className="br"></View>
                <View className="timePicker">
                    <Text className="预期到达时间"></Text>
                    <Picker dateFormat='MM-DD' timeFormat="H:i:s"/>
                </View>
                <View className="bz">
                    <Text>备注:</Text>
                    <Textarea className='bzsr' placeholder='请写出您的需求，如需更换床单，需要洗簌用品等详情需求'/>
                </View>
                <View className='btn'>
                    <AtButton className='submit' type='primary'>提交申请</AtButton>
                </View>
            </View>
        );
    }
}