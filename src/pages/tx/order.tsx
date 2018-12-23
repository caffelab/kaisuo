import Taro,{Component,View,Text} from '@tarojs/taro';
import {AtModal, AtButton,AtModalContent,AtModalHeader} from "taro-ui";
import './order.scss';

export default class Order extends Component{
    constructor(props){
        super(props);
        var date = new Date();
        this.state = {
            date:date.toLocaleString()
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
                        <Text >姓名:</Text>
                        <Text>{this.props.name}</Text>
                    </View>
                    <View className="item">
                        <Text>联系电话:</Text>
                        <Text>{this.props.phone}</Text>
                    </View>
                    <View className="item">
                        <Text>身份证号:</Text>
                        <Text>{this.props.id}</Text>
                    </View>
                    <View className="item">
                        <Text>入住时间:</Text>
                        <Text>{this.state.date}</Text>
                    </View>
                    <View className="item">
                        <Text>退房时间:</Text>
                        <Text>{this.props.end_time}</Text>
                    </View>
                    <View className="">
                        <Text>总金额:</Text>
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