import React, { Component } from 'react';
import TracksList from './Tracks';
class Sequencer extends Component {
    constructor(props){
        super(props);
        this.state = {
                    bpm: 60,
        };
    }
    componentDidMount(){
    }

    handleBpm(e){
        this.setState({bpm:  Number(e.target.value)});
    }

    
    render(){
      return (
        <div className="sequencer">
            <h1>oye! oye! captain sound</h1>
            <form>
                <label>BPM</label>
                <input type="number" id="bpm-input" name="bpm" min="60" max="200" onChange={this.handleBpm.bind(this)} />
            </form>
            <div id="tracks-list" className="tracks">
                <TracksList bpm={this.state.bpm}/>
            </div>
        </div>
      );
    }
  }
  
export default Sequencer;