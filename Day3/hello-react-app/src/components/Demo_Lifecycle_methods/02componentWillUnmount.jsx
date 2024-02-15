import React from 'react';

export default class GamePacks extends React.Component{
    constructor(props){
        super(props);
        this.state = {show: true}
    }
    removeComp = () => {
        this.setState({show: false});
    }
    render(){
        let gameComp = null;
        if(this.state.show){
            gameComp = <Game />
        }
        return(
            <div>
                {gameComp}
                <button type='button' className='btn btn-danger' onClick={this.removeComp}>Unmount!</button>
            </div>
        )
    }
}

class Game extends React.Component{
    constructor(props){
        super(props);
        console.log('Game constructor - Initialization of resources!');
    }
    componentWillUnmount(){
        alert('Releasing the resources and Component Game is about to be unmounted!');
        console.log('componentWillUnmount! - Game - Releasing the resources');
    }
    render(){
        return(
            <h1 className='display-1 text-info'>Game World!</h1>
        )
    }
}