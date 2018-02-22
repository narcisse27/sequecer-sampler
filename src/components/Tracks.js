import React, { Component } from 'react';
import Track from './Track';
class Tracks extends Component {
    constructor(props){
        super(props);
        this.state = {
                    tracks: [
                        {
                            name: 'Kick',
                            volume: 1
                        },
                        {
                            name: 'Snare',
                            volume: 1
                        }
                    ]
        };
    }
    componentDidMount(){
    }
    setNewTrack(){
        console.log(this.state.tracks);
        var newTrack = {
            name: 'new track',
            volume: 1
        };
        var tracks = this.state.tracks;
        tracks.push(newTrack);
        console.log(tracks);
        this.setState({tracks: tracks });
    }
    render() {
      return (
        <div className="tracks">
            <h2>Tracks List</h2>
            <button onClick={this.setNewTrack.bind(this)}>+</button>            
            {
                this.state.tracks.map(track =>{
                    return <div className="track-wrap"><Track data={track}/></div>;
                })
            }
        </div>
      );
    }
  }
  
export default Tracks;