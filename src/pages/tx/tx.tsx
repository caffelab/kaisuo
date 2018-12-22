import Taro,{Config,Component,View,Text} from '@tarojs/taro';
import './tx.scss';
import {AtNavBar,AtInput, AtButton} from 'taro-ui';
import Order from './order';

export default class Tx extends Component{
    constructor(props){
        super(props);

        this.state = {
            name : '',
            phone: '',
            id :'',
            name_msg:'',
            phone_msg:'',
            id_msg :'',
            isOpened:false
        }
    }


    navigateTo(url){
        Taro.navigateTo({url:url});
    }

    handleNameBlr(name){
        if(name == ''){
            this.setState({
                name : '',
                name_msg : '名字不能为空'
            });
        }else{
            this.setState({
                name,
                name_msg:''
            });
        }
    }

    handlePhoneBlr(phone){
        var regex = /^[1][3,4,5,7,8][0-9]{9}$/; 
            if(regex.test(phone)){
                this.setState({
                phone,
                phone_msg:''
            })}else{
                this.setState({
                    phone:'',
                    phone_msg:'请输入正确的手机号'
                });
            
        }
        
    }

    handleIdBlr(id){
        var regex = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        if(regex.test(id)){
            this.setState({
                id,
                id_msg:''
            });
        }else{
            this.setState({
                id_msg:'请输入正确的身份证号码',
                id:''
            });
            
        }
    }

    handleNextClick(){
        this.setState({
            isOpended:`isOpened`
        });
    }

    render(){
        return(
            <View>
                <AtNavBar
                    className="headerNav"
                    color='#000000'
                    title = "填写订单信息"
                    leftIconType = 'chevron-left'
                    
                />
                <View className="drawLine"></View>
                <View className="item">
                    <Text className="label">姓名:</Text>
                    <AtInput
                        name = 'name'
                        className="input"
                        placeholder = "请输入您的真实姓名"
                        value = {this.state.name}
                        onBlur = {this.handleNameBlr.bind(this)}
                        style = {`color:red`}
                    />
                    <Text className="msg">{this.state.name_msg}</Text>
                </View>
                <View className="item">
                    <Text className="label">联系电话:</Text>
                    <AtInput
                        name = 'phone'
                        placeholder = "请输入您的有效联系方式"
                        className = "input"
                        type = 'number'
                        value = {this.state.phone}
                        onBlur = {this.handlePhoneBlr.bind(this)}
                        style ={{borderColor:(this.state.phone_msg==='')?`rgba(203,203,203,1)`:`red`}}
                    />
                    <Text className="msg">{this.state.phone_msg}</Text>
                </View>
                <View className="item">
                    <Text className="label">身份证号:</Text>
                    <AtInput
                        name = 'id'
                        className="input"
                        placeholder = "请输入您的身份证号码"
                        value = {this.state.id}
                        onBlur = {this.handleIdBlr.bind(this)}
                        style ={{borderColor:(this.state.id_msg==='')?`rgba(203,203,203,1)`:`red`}}
                    />
                    <Text className="msg">{this.state.id_msg}</Text>
                </View>
                <View className="Btn">
                    <AtButton
                        type='primary'
                        className='nextBtn'
                        onClick = {this.handleNextClick.bind(this)}
                    >
                    下一步
                    </AtButton>

                    <Order isOpended = {this.state.isOpened} className="floatLayer"/>
                </View>
            </View>
        )
    }
}

