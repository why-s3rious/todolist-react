import React, { Component } from 'react';

class todo extends Component {
    render() {


        let {obj} = this.props;
        return (
        <div className="d-flex">
            <div className="card" style={{width:330,height:80,textAlign:"center",}}>
                <div className="card-body"> 
                <button className="btn" 
                        style={{borderRadius:500,
                                marginRight:20,
                                background: "#46d9ab",
                                color: "white",
                                position: "relative",
                                left: -60,
                                }}>
                    <i class="fa fa-power-off"></i>
                </button>{obj.title}</div>
                </div>
            <button className="btn btn-danger" onClick={()=>this.props.DeleteNote(this.props.obj)}>X</button>
            <button className="btn btn-primary" onClick={()=>this.props.editBtnClick(this.props.obj)}><i class="fa fa-pencil"></i></button>
        </div>
        
        );
    }
}

export default todo;