import React, { Component } from 'react'

//Components
import StudentCard from './StudentCard'
import WizForm from './WizForm'

export default class SearchContainer extends Component {


    state = {
        wizards: []
    }


    componentDidMount = async () => {
        const res = await fetch('http://localhost:3001/wizards')
        const wizards = await res.json()
        this.setState({ wizards })
    }

  
    render(){
        
   
        return (
            <div className="container mt-5">
                <WizForm/>
                <div className="form-group">
                    <label htmlFor="search-text">Search by House:</label>
                    <input type="text" className="form-control" id="search-text" placeholder="gryffindor sucks"/>
                </div>
               
                <div className="row justify-content-md-center">
                    {this.state.wizards.map(
                        wizard => <StudentCard wizard={wizard} key={wizard.id} />
                    )}
                </div>
            </div>
        )
    }
}

