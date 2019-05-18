import React, { Component } from 'react';

class add extends Component {

    constructor(props){
        super(props);
        this.state={
            title:"",
        }
    }

    onChange=(event) =>{
        this.setState({
            [ event.target.name]:event.target.value,
         });
    }
    componentWillReceiveProps(nextProps) { //nhan duoc gia tri 
        this.setState({
            title:this.props.editNote.title
        })
        // console.log("componentWillReceiveProps");
        // console.log(this.state.title);
    }
    

    onSubmit=(event) => {
        //  this.props.getInfo(this.state.title)
        
        // console.log(this.state.title);
        // console.log(this.state.title.length);

        if(this.state.title.length === 0) {
            return 0;
        }
        this.props.getInfo(this.state.title);

    }
    render() {
        return (
            <div className="container">

                <form onSubmit={(e) => {e.preventDefault()}}>
                    <div className="input-group " style={{width:500,marginTop:50}}>
                        <input type="text" className="form-control" placeholder="Your note" name="title" value={this.state.title} onChange={this.onChange}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" onClick={this.onSubmit}>add note</button>
                            <button className="btn btn-success" onClick={()=>this.props.editHandle(this.state.title)} >edit</button>
                            
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default add;