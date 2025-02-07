import React, { Component } from 'react';
import 'reset-css'
import axios from 'axios'
import './App.css'
//components
import Player from './components/Player'
import PlayerSelected from './components/PlayerSelected'
import {Link} from 'react-router-dom'
//
//stylesheets
// const title = 'Open Gem'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      name: '',
      position: '',
      selectedPlayer: []
    }
  }

  componentDidMount(){
    this.getPlayers()
    
  }
  

  getPlayers = () => {
    axios.get('api/players')
    .then((response) => {
      this.setState({
        players: response.data
      })
    })
    .catch(err =>{
      console.log(err)
  })
  }

  handleImage = (val) => {
    this.setState({
        playerImage: val
    })
}

handleName = (val) => {
    this.setState({
        playerName: val
    })
}

handlePosition = (val) => {
  this.setState({
      playerPosition: val
  })
}

handleSelectPlayer = (player) => {
  this.setState({
    selectedPlayer: [...this.state.selectedPlayer, player]
  })
}

handleAddPlayer = () => {
    axios.post('/api/players',  {name: this.state.playerName, position: this.state.playerPosition, image: this.state.playerImage})
   .then(res => {
       this.setState({
           players: res.data
       })
   })
   this.setState({playerName: ''})
   this.setState({playerPosition: ''})
   this.setState({playerImage: ''})
   
}

handleDeletePlayer = (id) => {
  axios.delete(`/api/players/${id}`)
  .then(res => {
    this.setState({
      players: res.data
    })
  })
  .catch(err =>{
    console.log(err)
})
}

updatePlayer = async(data) => {
    await this.setState({
    players: data
    },() => {console.log(this.state.players)})

}

removeFromTeam = (index) => {
  let newTeam = this.state.selectedPlayer.filter((e, i) => {
    if(i !== index){
      return true
    }
  })
  this.setState({
    selectedPlayer: newTeam
  })

}
  
  render() { 
    console.log(this.state.selectedPlayer)
    const mappedPlayers = this.state.players.map((players, index) => {
      return <Player key={index} players={players} selectPlayer={this.handleSelectPlayer} deleteFunc={this.handleDeletePlayer}/>
    })

   
      const mappedSelectedPlayer = this.state.selectedPlayer.map((selectedPlayer, index) => {
      return <PlayerSelected key={index} selectedPlayer={selectedPlayer}updatePlayer={this.updatePlayer} removePlayer = {this.removeFromTeam} selectPlayer={this.handleSelectPlayer} index={index}/>
 
  })




    return (
<div className="App">
  
  
          {/* <header className='top-header'>  
            <div className="title">Open Gem
            <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/03/59/19/2157a40289c9d05.jpg" alt='basketball' /></div>
          </header> */}
              <nav>
          <img id="nba" src="https://cdn.freebiesupply.com/images/large/2x/nba-logo-transparent.png" alt="nba" width={25} height={42} />
          <div className="button-ol-container">
            <ol className="button">Home</ol>
            <ol className="button">MyTeam</ol>
            <Link to='/stats'><ol className="button">Stats</ol></Link>
            <ol className="button">More</ol>
          </div>
        </nav>    
          

      <div className="players-container-header">

      </div>
      <div className="parent-div">
        <div className="player-objects">
          {mappedPlayers}
        </div>
        <div className="drafted-container">
        <div className="add-a">
        <input id="txtPos" placeholder="Name" onChange={(e)=>this.handleName (e.target.value)} value={this.state.playerName}></input>
        <input id="txtPos" placeholder="Position" onChange={(e)=>this.handlePosition (e.target.value)} value={this.state.playerPosition}></input>
        <input id="txtPos" placeholder="Image" onChange={(e)=>this.handleImage (e.target.value)} value={this.state.playerImage}></input>
        <button onClick={this.handleAddPlayer}>Add Player</button>
        </div>
          <header className="build">Team Builder</header>
          
          <div className='team'>
            {mappedSelectedPlayer}
          </div>
        </div>
        
        </div>
        {/* <div className="add-a">
        <input id="txtPos" placeholder="Name" onChange={(e)=>this.handleName (e.target.value)} value={this.state.playerName}></input>
        <input id="txtPos" placeholder="Position" onChange={(e)=>this.handlePosition (e.target.value)} value={this.state.playerPosition}></input>
        <input id="txtPos" placeholder="Image" onChange={(e)=>this.handleImage (e.target.value)} value={this.state.playerImage}></input>
        <button onClick={this.handleAddPlayer}>Add Player</button>
        </div> */}
        
</div>
    );
  }
}
 
export default App;
