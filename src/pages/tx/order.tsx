import Taro,{Component,View,Text} from '@tarojs/taro';
import {AtModal, AtButton} from "taro-ui";
import { AtModalContent, AtModalHeader } from 'dist/npm/taro-ui/dist/weapp';

export default class Order extends Component{
    constructor(props){
        super(props);
    }
    handleClose(){

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
                        <Text>{this.props.start_time}</Text>
                    </View>
                    <View className="item">
                        <Text>退房时间:</Text>
                        <Text>{this.props.end_time}</Text>
                    </View>
                    <View className="item">
                        <Text>总金额:</Text>
                        <View>
                            <Text className='doller_icon'>￥</Text>
                            <Text className="value">{this.props.price}</Text>
                        </View>
                    </View>
                    <View className="">
                        <AtButton
                            className="submit"
                        >
                            确定入住
                        </AtButton>
                    </View>
                </AtModalContent>
            </AtModal>
        );
    }
}