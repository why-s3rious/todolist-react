import React, { Component } from 'react';
import Add from "./component/add";
import List from "./component/list";
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      list:[
        {title:"go to school",stt:1}
      ]
    }
  }

  DeleteNote=(note)=>
  {
    let temp =this.state.list;
    console.log(temp);
    console.log(temp.findIndex(e => e.stt == note.stt));
    
    temp.splice(temp.findIndex(e => e.stt ===note.stt),1);
    // console.log(temp);
    this.setState({
      list:temp,
    });

  }

  getInfo=(note)=>{


    let x ={title:note,stt:this.state.list.length+1}
    let temp =this.state.list;
    temp.push(x);
    // 
    this.setState({
      list:temp
    });
    console.log(this.state.list);
  }
  render() {
    return (
      <div>
             <List list ={this.state.list} DeleteNote={this.DeleteNote}/>
             <Add getInfo={this.getInfo}/>
      </div>
    );
  }
}

export default App;