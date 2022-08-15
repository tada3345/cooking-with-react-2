import React, {Component} from 'react'

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:this.props.initialCount
        }
    }
    render(){
        return(
            <div>
            <button onClick={()=>this.changeCount(-1)}>-</button>
            <span>{this.state.count}</span>
            <button onClick={()=>this.changeCount(+1)}>+</button>
            </div> 
        )
    }
    changeCount(amt){
        this.setState(prevState =>{return {count:prevState.count+amt}})
    }
}