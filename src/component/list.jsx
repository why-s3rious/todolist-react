import React, { Component } from 'react';
import ToDo from "./todo";
class list extends Component {

    renderList = () =>{

        return this.props.list.map((obj,index)=>{

            return <ToDo obj={obj} key={index} DeleteNote={this.props.DeleteNote} editBtnClick={this.props.editBtnClick}/>

        });


    }

    render() {
        return (
            <div className="container">
                {this.renderList()}
            </div>
        );
    }
}

export default list;