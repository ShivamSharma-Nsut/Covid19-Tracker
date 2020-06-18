import React, { Component } from 'react'
// import Rajya from './Rajya'
// import { BrowserRouter as Router, Route} from 'react-router-dom'
// import { Link } from 'react-router-dom'

class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             india: []
        }
    }
    componentDidMount(){
        fetch('https://api.covid19india.org/data.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    india : data.statewise
                })
            })

            
    }

    render() {
        return (
            <div>              
                <ul className="title">
                    {/* <li>S no.</li> */}
                    <li style={{color:"blue"}}>State</li>
                    <li style={{color:"purple"}}>Confirmed</li>
                    <li style={{color:"orange"}}>Active</li>
                    <li style={{color:"green"}}>Recovered</li>
                    <li style={{color:"red"}}>Deaths</li>
                    
                </ul>
                <br />
                 {this.state.india.map((rajya) => (

                    <ul className="state">
                            {/* <li>{index+1}</li> */}
                            <li className="rajya">{`# `+ rajya.state}</li>
                            <li>{rajya.confirmed}</li>
                            <li>{rajya.active}</li>
                            <li>{rajya.recovered}</li>
                            <li>{rajya.deaths}</li>
                
                    </ul>
                   
                    
                 ))} 
                

            </div>
        )
    }
}

export default Main
