import React, {Component} from "react";

import Mortalcard from "./Mortalcard";




class Mortaldex extends Component{
    static defaultProps ={
        fighters : {
            
        }
    }
    render(){
        return (
            <div>
              <h4>Total Experience:{this.props.exp}</h4>
            </div>
        )
    }
}

export default Mortaldex;
