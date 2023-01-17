import React, { Component } from 'react'


class RobotForm extends Component {

    constructor(){
		super()
		this.state = {
            name: '',
            type: '',
            mass: ''
		}
	}
    
    handleAdd = () => {
        const newRobot = {
          name: this.state.name,
          type: this.state.type,
          mass: this.state.mass
        }
        this.props.onAdd(newRobot)
    }
    


    render() {
		return (
			<form>
                <input type="text" id="name" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <input type="text" id="type" name="type" value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })} />
                <input type="number" id="mass" name="mass" value={this.state.mass} onChange={(e) => this.setState({ mass: e.target.value })} />
                <button value="add" onClick={this.handleAdd}> Add</button>
			</form>
		)
	}
}


export default RobotForm;