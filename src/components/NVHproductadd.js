import React, { Component } from 'react';

class NVHproductadd extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:0,
            title:'',
            status:0
        }
    }
    nvhhandlechange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    nvhhandlesubmit = (ev)=>{
        ev.preventdefault();
        this.props.onsummit(this.state)
    }
    render() {
        return (
            <div>
                <h2>them san pham moi</h2>
                <form className='col-md-6'>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            id
                        </span>
                        <input
                        type="text"
                        className="form-control"
                        
                        name='id'
                        value={this.state.id}
                        onChange={this.nvhhandlechange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon2">
                            title
                        </span>
                        <input
                        type="text"
                        className="form-control"
                        
                        name='title'
                        value={this.state.title}
                        onChange={this.nvhhandlechange}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon3">
                            status
                        </span>
                        <input
                        type="text"
                        className="form-control"
                       
                        name='status'
                        value={this.state.status}
                        onChange={this.nvhhandlechange}
                        />
                    </div>
                    <button className='btn btn-success'>ghi lai</button>
                </form>
            </div>
        );
    }
}

export default NVHproductadd;
