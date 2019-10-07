import React from 'react'
import axios from 'axios'

// import './Player.css'
// import PlayerSelected from './PlayerSelected';



class Player extends React.Component {
        constructor(){
            super()
            this.state={
                edit: false,
                editName: '',
                editPosition: '',
                editImage: '',
            }
        }

        handleToggle = () => {
            this.setState({
                edit: !this.state.edit
            })
        }
    
            handleInput=(val)=>{
                this.setState({
                    editName: val
                })
            }
    
            handleUpdatePlayer=(id)=>{
                let updatedPlayer = {
                    id,
                    name: this.state.editName,
                    position: this.props.selectedPlayer.position,
                    image: this.props.selectedPlayer.image
                }
    
    
                axios.put(`/api/players/${id}`, updatedPlayer)
                .then(res =>{
                    this.props.updatePlayer(res.data)
                    // this.props.selectPlayer(this.props.players)
                    this.handleToggle()
                })
            }

    render() {
        console.log(this.state.edit)
        const {id, name, position, image} = this.props.players
        const {deletePlayer} = this.props
        return (
            <div className="player-container">
                <div id="btnflx"><button onClick={() => this.props.selectPlayer(this.props.players)}>Draft</button>
                <button onClick={() => this.props.deleteFunc(id)}>Retire</button>
                <button onClick={this.handleToggle}>Edit</button>
                
                </div><div>
                <h3>{name}</h3>
                <p>{position}</p>
                </div>
                <img src={image} alt="get"></img>
            </div>
           
        )
    }
}


// const Player = (props) => {
//     const {id, name, position, image} = props.players
//     const {deletePlayer} = props
//     return (
//         <div className="player-container">
//             <div id="btnflx"><button onClick={() => props.selectPlayer(props.players)}>Draft</button>
//             <button onClick={() => props.deleteFunc(id)}>Retire</button>
//             </div><div>
//             <h3>{name}</h3>
//             <p>{position}</p>
//             </div>
//             <img className="pic" src={image}></img>
//         </div>
       
//     )
// }

//edit functionality for name input of players array

//         {this.state.edit ? (
//     <button onClick={() => this.save()}>Save</button>
//     ) : (
//       <button onClick={this.handleToggle}>Edit</button>
//     )}
//   </div>

//   {this.state.edit ? (
//     <div>
//       <input />
//       <p>{position}</p>

//       <img src={image} alt="get"></img>
//     </div>
//   ) : (
//     <div>
//       <div>
//         <h3>{name}</h3>
//         <p>{position}</p>
//       </div>
//       <img src={image} alt="get"></img>
//     </div>
//   )}
// </div>
// );
// }
// }

//MAGIC JOHNSON https://pngimage.net/wp-content/uploads/2018/06/magic-johnson-png-5.png

export default Player