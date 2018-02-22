import React, { Component } from 'react';
class Track extends Component {
    constructor(props){
        super(props);
        this.handlePadClick = this.handlePadClick.bind(this);
        this.setState = {
            times_number: 16,
            times: [
                {
                    clicked: false
               },
               {
                   clicked: false
               }
            ]
        };
    }
    componentDidMount(){
        let times = [];
        for(let i = 0; i <= 16; i++){
            let time = {clicked: false};
            times.push(time);
        }
    }

    handlePadClick(){
        console.log("ok");
        alert("click pad");
    }   
    PadsList(){
        return (<h1>Hello Pad</h1>)
    };
    render(){
        let PadsList = this.PadsList;
        return(
            <div>
                <h2>{this.props.data.name}</h2>
                <PadsList />

            </div>
        )
    }
}

export default Track;