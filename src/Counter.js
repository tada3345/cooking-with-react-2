import React, {Component} from'react';
import {ThemeContext} from './App'

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            count:this.props.initialCount
        }
    }
    render(){
        return(
            <ThemeContext.Consumer>
            {style=>(
                <div>
                <button style={style} onClick={()=>this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button style={style} onClick={()=>this.changeCount(+1)}>+</button>
                </div>
        )}
                
            </ThemeContext.Consumer>
        )
    }
    changeCount(amt){
        this.setState(prevState=>{return{
            count:prevState.count+amt
        }})
    }
}