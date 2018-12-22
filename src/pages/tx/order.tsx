import Taro,{Component,View,Text} from '@tarojs/taro';
import {AtModal} from "taro-ui";
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
                        <Text></Text>
                    </View>
                    <View className="item">
                        <Text>联系电话:</Text>
                        <Text></Text>
                    </View>
                    <View className="item">
                        <Text>身份证号:</Text>
                        <Text></Text>
                    </View>
                    <View className="item">
                        <Text>入住时间:</Text>
                        <Text></Text>
                    </View>
                    <View className="item">
                        <Text>退房时间:</Text>
                        <Text></Text>
                    </View>
                    <View className="item_je">
                        <Text>总金额:</Text>
                        <Text></Text>
                    </View>
                </AtModalContent>
            </AtModal>
        );
    }
}