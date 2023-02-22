import React    from "react";
import { TextBox } from '../../reusableComponents/TextBox';
import template from "./AddPatient.jsx";
import {store} from '../../appStore/store';
import ServerCall from "../../ServerCall.js";
const inputControls=[
  {
      lbl:'Full Name',
      type:'text',
      errorMsg:'Please Enter name',
      isShowError:false,
      value:'',
      name:'name'
  },
  {
    lbl:'Age',
    type:'number',
    errorMsg:'Please Enter age',
    isShowError:false,
    value:'',
    name:'age'
},
  {
    lbl:'Mobile No',
    type:'number',
    errorMsg:'Please Enter mobile',
    isShowError:false,
    value:'',
    name:'mobile'
},
{
    lbl:'Address',
    type:'textarea',
    errorMsg:'Please Enter Address',
    isShowError:false,
    value:'',
    name:'address'
}
 
]
class AddPatient extends React.Component {
  state={
    template:''
  }
  constructor(){
    super();
    this.data={}
  }
  componentDidMount(){
      this.fnPrepareTemplate()
  }
  fnChange=(eve)=>{
    const {value,name}=eve.target
    const inputObj=inputControls.find((obj)=>{
      return obj.name == name
    })
    inputObj.value=value;
    inputObj.isShowError=value== '' ? true : false;
    this.data[name]=value
    this.fnPrepareTemplate()
  }
  fnAddPatient=()=>{
    let isValid=true;
    inputControls.forEach((obj)=>{
       if(obj.value==''){
         isValid=false;
         obj.isShowError=true
       }else{
         obj.isShowError=false
       }
    })
    this.fnPrepareTemplate()

    if(!isValid)return;
    //ServerCall.fnPost('user',{data:this.data})
    ServerCall.fnGet('user')
    .then((res)=>{
      let result=res.data
      if(result.length > 0){
       sessionStorage.isLoggedIn=true
       sessionStorage.user=result[0].uid
       sessionStorage.token=result[0].token
       store.dispatch({
         type:'ADDPATIENT'
       })
      }else{
       alert('Please check ented uid or pwd')
     }
   })
   .catch((res)=>{
     alert('something went wrong')
   })

  
   
 }

 fnPrepareTemplate=()=>{
  let inputControlsArr= inputControls.map((obj,index)=>{
       return <TextBox key={index} obj={obj} fnChange={this.fnChange} />
   })
   this.setState({
     template:inputControlsArr
   })
 }

 render() {
   return template.call(this);
 }
}

export default AddPatient;
