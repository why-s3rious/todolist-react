import React, { Component } from 'react';
import Add from "./component/add";
import List from "./component/list";
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      list:[
        {title:"go to school",stt:1}
      ],

      editNote:{title:'',stt:0}
    }


  }
  componentWillMount() {// khi reset lai trang se lay du lieu ra
    localStorage.getItem('listItem') && this.setState({
      list:JSON.parse(localStorage.getItem('listItem')),
          
    });

  }
  editBtnClick=(note)=>{ // gui du lieu qua ben form input
    console.log(note);
    this.setState({},()=>{ 
      this.setState({
        editNote:note
      });
    });
    console.log(this.state.editNote);
  }

  editHandle =(note) => { // nhan du lieu moi cap nhat ben form ve 
    
    let temp=this.state.editNote;// doi tuong note
    temp.title=note;
    let tempList=this.state.list;
    tempList[tempList.findIndex(ob => ob === temp)]=temp; //cap nhat vo mang
    this.setState({
      list:tempList
    })
  }




  componentWillUpdate(nextProps, nextState) { // sau khi update se luu vao localstorage
    console.log("componentWillUpdate")
    localStorage.setItem('listItem',JSON.stringify(nextState.list));
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
             <List list ={this.state.list} DeleteNote={this.DeleteNote} editBtnClick={this.editBtnClick}/>
             <Add getInfo={this.getInfo} editNote={this.state.editNote} editHandle={this.editHandle} />
      </div>
    );
  }
}

export default App;