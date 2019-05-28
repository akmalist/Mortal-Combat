import React, {Component} from "react";

class Mortalcard extends Component {

    render(){
        const{name, id,img, strenght, experience, wins} = this.props;

        return (
            <div>
                <h1>{name}</h1>
                <div><img src="{img}" alt={name}/></div>
                <div>Strength:{strenght}</div>
                <div>Exp:{experience}</div>
                <div>Wins:{wins}</div> 
            </div>
        )
    }
}

export default Mortalcard;
