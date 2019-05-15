import React, { Component } from 'react';

class todo extends Component {
    render() {
            let {obj} = this.props;
        return (
        <div className="d-flex">
        <div className="card" style={{width:330,height:80,textAlign:"center",}}>
        <div className="card-body">{obj.title}</div>
        </div>
        <button className="btn btn-danger" onClick={()=>this.props.DeleteNote(this.props.obj)}>X</button>
        </div>
        
        );
    }
}

export default todo;