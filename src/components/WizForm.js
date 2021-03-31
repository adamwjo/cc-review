import React, { Component } from 'react'
const URL = "http://localhost:3001/wizards"

export default class WizForm extends Component {

   
    render() {
        return (
            <>
            <h3>Add yourself:</h3>
            <form className="mb-4 p-3 border border-primary">
                <div className="form-group">
                    <label htmlFor="wiz-name">Name</label>
                    <input type="text" className="form-control" id="wiz-name"placeholder="Enter email"/>    
                </div>
                <div className="form-group">
                    <label htmlFor="wiz-image">Picture</label>
                    <input type="text" className="form-control" id="wiz-image"placeholder="image URL"/>    
                </div>
                <div className="form-group">
                    <label htmlFor="wiz-house">House</label>
                    <input type="text" className="form-control" id="wiz-house"placeholder="Enter email"/>    
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </>
        )
    }
}
