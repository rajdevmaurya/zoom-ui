import React    from "react";
import template from "./PatientList.jsx";
import ServerCall from '../../ServerCall';
class PatientList extends React.Component {
  constructor(){
    super();
    this.state={
      'headers':["ID","NAME", "PHONE"],
      'keys':['id','name','phone'],
      'totalData':[],
      'tableData':[]
    }
    this.fnGetTableData=this.fnGetTableData.bind(this);
  }
  componentWillMount(){
    ServerCall.fnGet('users')
    .then((res)=>{
      this.setState({
        'totalData':res.data,
        'tableData':res.data.slice(0,5)
      })
    },(res)=>{
      this.setState({
        'data':[]
      })
    })
    
  }
  render() {
    return template.call(this);
  }

  fnGetTableData(tableData){
    debugger;
      this.setState({
        'tableData':tableData
      })
  }
}

export default PatientList;
