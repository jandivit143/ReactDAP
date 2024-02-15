import React, { Component } from 'react';

// state
// like props, state also hold some information about the component
// but the kind of information and the way to handle that information is
// going to be different in state as compared to props.

// state is changable.
class Checkbox extends Component {
    constructor(){
        super(); // call to the base / super class
        // Maintaining the state hence it is stateful component
        this.state = {
            checked: true,
            name: 'pqrs',
            mindNo: 9
        }
        // 2 binding outer this with handleChange this
        // this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        // Modify the state here
        // Never ever modify the state directly, always use method called as setState to modify the state
        // this.state.checked = !this.state.checked;

        // Synchronous Version of setState
        // this.setState({checked: !this.state.checked});

        // Asynchronous Version of setState
        this.setState((prevState, props) => {
            return {checked: !prevState.checked};
        })
    }
    render() {
        let msg = '';
        if(this.state.checked){
            msg = 'Checked';
        }else{
            msg = 'Unchecked';
        }
        return (
            <div>
                <input type='checkbox' defaultChecked={this.state.checked}
                // Synthetic Events
                // Cross Browser events works identical
                // Support of Event pooling
                // 1 bind outer this
                // onChange={this.handleChange.bind(this)}

                // 2 bind it in the constructor
                // onChange={this.handleChange}
                
                // 3 use Arrow function
                onChange={() => {
                    // actual code here but right now calling handleChange
                    this.handleChange();
                }}/>
                <h1>The box is '{msg}'!</h1>
            </div>
        );
    }
}

export default Checkbox;