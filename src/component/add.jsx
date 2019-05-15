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

    onSubmit=(event) => {
        //  this.props.getInfo(this.state.title)
        event.preventDefault();
        // console.log(this.state.title);
        // console.log(this.state.title.length);

        if(this.state.title.length===0)
        {
            return 0;
        }
        this.props.getInfo(this.state.title);

    }

    render() {
        return (
            <div className="container">

                <form >
                    <div className="input-group " style={{width:500,marginTop:50}}>
                        <input type="text" className="form-control" placeholder="Your note" name="title" onChange={this.onChange}/>
                        <div className="input-group-append">
                            <button className="btn btn-primary" onClick={this.onSubmit}>add note</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default add;