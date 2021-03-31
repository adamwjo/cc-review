import React, { Component } from 'react'

//Components
import StudentCard from './StudentCard'
import WizForm from './WizForm'

export default class SearchContainer extends Component {


    state = {
        wizards: [],
        searchText: ""
    }


    componentDidMount = async () => {
        const res = await fetch('http://localhost:3001/wizards')
        const wizards = await res.json()
        this.setState({ wizards })
    }

    filterWizards = () => this.state.wizards.filter(wiz => wiz.name.includes(this.state.searchText))

    addNewWiz = (newWiz) => this.setState({wizards: [newWiz, ...this.state.wizards]})




    render(){
        
   
        return (
            <div className="container mt-5">
                <WizForm addNewWiz={this.addNewWiz}/>
                <div className="form-group">
                    <label htmlFor="search-text">Search by House:</label>
                    <input onChange={(event) => {this.setState({searchText: event.target.value})}} type="text" className="form-control" id="search-text" placeholder="gryffindor sucks"/>
                </div>
               
                <div className="row justify-content-md-center">
                    {this.filterWizards().map(
                        wizard => <StudentCard wizard={wizard} key={wizard.id} />
                    )}
                </div>
            </div>
        )
    }
}

