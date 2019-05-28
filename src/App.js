import React, {Component} from 'react';
// import Mortalcard from "./Mortalcard"
// import Mortaldex from "./Mortaldex"
 
import './App.css';
import Mortalcard from './Mortalcard';
import Mortaldex from './Mortaldex';

const mortalApi ="https://freepngimg.com/thumb/mortal_kombat/20102-1-mortal-kombat-x-picture.png"

class App extends Component{
  static default Props = {
    fighters: [
    { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
    { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
    { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
    { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
    { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
    { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
    { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }]
  }
  
  render(){
    const {id, name, race, experience} = this.props

    return (
      
      <div>Hello Mortal Combat
      <Mortalcard
      id={id}
      name ={name}
      race = {race}
      base-experience = {experience}
      />
      {/* <Mortaldex/> */}
      </div>
    )
  }
}

export default App;
