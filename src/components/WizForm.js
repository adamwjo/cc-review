import React, { Component } from 'react'
const URL = "http://localhost:3001/wizards"

export default class WizForm extends Component {


    state = {
        name: "",
        image: "",
        house: ""
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newWiz = {
            name: this.state.name,
            image: this.state.image,
            house: this.state.house,
            points: 0
        }

        const reqObj = {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(newWiz)
        }

        fetch(URL, reqObj)
            .then(r => r.json())
            .then((newWiz) => {
                this.props.addNewWiz(newWiz);
                this.setState({
                        name: "",
                        image: "",
                        house: ""
                    })
            })
    }

 
    render() {
        return (
            <>
            <h3>Add yourself:</h3>
            <form onSubmit={this.handleSubmit} gclassName="mb-4 p-3 border border-primary">
                <div className="form-group">
                    <label htmlFor="wiz-name">Name</label>
                    <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} type="text" className="form-control" id="wiz-name"placeholder="Enter email"/>    
                </div>
                <div className="form-group">
                    <label htmlFor="wiz-image">Picture</label>
                    <input value={this.state.image}  onChange={(e) => this.setState({image: e.target.value})} type="text" className="form-control" id="wiz-image"placeholder="image URL"/>    
                </div>
                <div className="form-group">
                    <label htmlFor="wiz-house">House</label>
                    <input value={this.state.house}  onChange={(e) => this.setState({house: e.target.value})} type="text" className="form-control" id="wiz-house"placeholder="Enter email"/>    
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </>
        )
    }
}
