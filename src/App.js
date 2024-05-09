import React, { Component } from 'react';
import NVHProductlist from './components/NVHproductlist';
import NVHproductadd from './components/NVHproductadd';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      products:[
      {title: 'nguyen van huynh', id:2210900031, status:1},
      {title: 'cabbage', id:1, status:1},
      {title: 'garlic', id:2, status:0},
      {title: 'apple', id:3, status:0},
      {title: 'samsung', id:4, status:1},
      ]
    }
  }
  nvhhandlesubmit = (param)=>{
    console.log("app:",param);
    let {products} =this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>nguyen van huynh - render data - event form</h1>
        <hr/>
        <NVHProductlist renderproducts={this.state.products}/>
        <hr/>
        <NVHproductadd onsummit ={this.nvhhandlesubmit}/>
      </div>
    );
  }
}

export default App;
