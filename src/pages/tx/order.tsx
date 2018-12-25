import Taro,{Component,View,Text} from '@tarojs/taro';
import {AtModal, AtButton,AtModalContent,AtModalHeader} from "taro-ui";
import './order.scss';

export default class Order extends Component{
    constructor(props){
        super(props);
        var date = new Date();
        var mt = new Date();
        mt.setDate(mt.getDate()+1);
        this.state = {
            date:date.toLocaleString(),
            mt:mt.toLocaleString() 
        }
    }
    handleClose(){

    }

    handleSubmitClk(){
        Taro.redirectTo({
            url:'../ks/ks'
        });
    }
    render(){
        return(
            <AtModal
                isOpened
                onClose = {this.handleClose}
                className = "floatLayer"> 
                <AtModalHeader>确定订单信息</AtModalHeader>  
                <AtModalContent>
                    <View className='item'>
                        <Text className='label'>姓&#8195;&#8195;名:</Text>
                        <Text className="text">{this.props.name}</Text>
                    </View>
                    <View className="item">
                        <Text className='label'>联系电话:</Text>
                        <Text className="text">{this.props.phone}</Text>
                    </View>
                    <View className="item">
                        <Text className='label'>身份证号:</Text>
                        <Text className="text">{this.props.ids}</Text>
                    </View>
                    <View className="item">
                        <Text className='label'>入住时间:</Text>
                        <Text className="text">{this.state.date}</Text>
                    </View>
                    <View className="item">
                        <Text className='label'>退房时间:</Text>
                        <Text className="text">{this.state.mt}</Text>
                    </View>
                    <View className="">
                        <Text <Text className='label'>总金额:</Text>
                        <View className="item_je">
                            <Text className='doller_icon'>￥</Text>
                            <Text className="value">666</Text>
                        </View>
                    </View>
                    <View className="">
                        <AtButton
                            className="submit" 
                            onClick = {this.handleSubmitClk.bind(this)}
                        >
                            确定入住
                        </AtButton>
                    </View>
                </AtModalContent>
            </AtModal>
        );
    }
}