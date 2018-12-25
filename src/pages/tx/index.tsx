import Taro,{Component,View,Text,Input} from '@tarojs/taro';
import './index.scss';
import {AtNavBar, AtButton} from 'taro-ui';
import Order from './order';

export default class Tx extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            name : '',
            phone: '',
            ids :'',
            name_msg:'',
            phone_msg:'',
            id_msg :'',
            isOpened:false,
            orderString:'',
            name_color:'#9d9d9d',
            phone_color:'#9d9d9d',
            id_color:'#9d9d9d'
        }
    }

 
    navigateTo(url){
        Taro.navigateTo({url:url});
    }

    handleNextClk(){
        if(this.state.isOpened){
            this.setState({isOpened:false});
        }else{
            this.setState({isOpened:true});
        }
    }

    handleNameBlr(val){
        var value = val.detail['value'];
        if(value === ''){
            this.setState({
                name:'',
                name_msg : '名字不能为空',
                name_color: '#ff0000'
            });
            console.log(value,'验证不通过');
        }else{
            this.setState({
                name:value,
                name_msg:'',
                name_color:'#9d9d9d'
            });
        }
    }

    handlePhoneBlr(val){
        var phone = val.detail['value'];
        var regex = /^[1][3,4,5,7,8][0-9]{9}$/; 
            if(regex.test(phone)){
                this.setState({
                phone,
                phone_msg:'',
                phone_color:'#9d9d9d'
            })}else{
                this.setState({
                    phone:'',
                    phone_msg:'请输入正确的手机号',
                    phone_color:'#ff0000'
                });
            
        }
        
    }

    handleIdBlr(val){
        var ids = val.detail['value'];
        var regex = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if(regex.test(ids)){
            this.setState({
                ids,
                id_msg:'',
                id_color:'#9d9d9d'
            });
            console.log(ids);
        }else{
            this.setState({
                id_msg:'请输入正确的身份证号码',
                ids:'',
                id_color:'#ff0000'
            });
            console.log(ids);
        }
    }

    handleBackClk(){
        Taro.navigateTo({url:'../index/index'});
    }

    render(){
        return(
            <View style={{marginTop:`${global.fl}px`}}>
                <View  className="top">
                   <AtNavBar
                    className="headerNav"
                    color='#000000'
                    title = "填写订单信息"
                    leftIconType = 'chevron-left'
                    onClickLeftIcon = {this.handleBackClk.bind(this)}
                    /> 
                </View>
                
                <View className="drawLine"></View>
                <View className="item">
                    <Text className="label">姓名:</Text>
                    <Input
                        name = 'name'
                        className="input"
                        placeholder = "请输入您的真实姓名"
                        value = {this.state.name}
                        onBlur = {this.handleNameBlr.bind(this)}
                        style = {{borderColor:`${this.state.name_color}`}}
                    />
                    <Text className="msg">{this.state.name_msg}</Text>
                </View>
                <View className="item">
                    <Text className="label">联系电话:</Text>
                    <Input
                        name = 'phone'
                        placeholder = "请输入您的有效联系方式"
                        className = "input"
                        type = 'number'
                        value = {this.state.phone}
                        onBlur = {this.handlePhoneBlr.bind(this)}
                        style={{borderColor:`${this.state.phone_color}`}}
                    />
                    <Text className="msg">{this.state.phone_msg}</Text>
                </View>
                <View className="item">
                    <Text className="label">身份证号:</Text>
                    <Input
                        name = 'ids'
                        className="input"
                        placeholder = "请输入您的身份证号码"
                        value = {this.state.ids}
                        onBlur = {this.handleIdBlr.bind(this)}
                        style = {{borderColor:`${this.state.id_color}`}}
                    />
                    <Text className="msg">{this.state.id_msg}</Text>
                </View>
                <View className="Btn">
                    <AtButton
                        type='primary'
                        className='nextBtn'
                        onClick = {this.handleNextClk.bind(this)}
                    >
                    下一步
                    </AtButton>
                </View>
                {this.state.isOpened ? <Order name={this.state.name} ids={this.state.ids} phone={this.state.phone}/>:''}
            </View>
        )
    }
}

