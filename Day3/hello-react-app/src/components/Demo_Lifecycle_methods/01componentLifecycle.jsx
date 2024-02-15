import React, { Component } from 'react';

export default class GameComp extends Component{
    // 1 constructor - initialization
    constructor(props){
        super(props);
        this.state = {
            favoriteGame: 'Cricket'
        };
        console.log('constructor! ' + this.state.favoriteGame);
    }

    // 2 static getDerivedStateFromProps() - method is called right before
    // rendering the element in the DOM
    // This is the place where you can set the state object
    // based on initial props.
    static getDerivedStateFromProps(props,state){
        console.log('state getDerivedStateFromProps! props :- ' + props.favGame + ' state :- ' + JSON.stringify(state.favoriteGame));
        if(props.favGame){
            return {favoriteGame: props.favGame};
        }else{
            return {state};
        }
    }

    // 3 componentDidMount() method is called after the component is rendered.
    // You can do some side-effect kind of things here
    // anything happening in your application that is not related to UI rendering
    // HTTP call - Call to the RESTFul Service
    // Handling Timer Events
    // Calling Third Party libraries, frameworks.
    componentDidMount(){
        // timer related handling
        setTimeout(() => {
            this.setState({favoriteGame: 'Golf'})
        },2000);
        console.log('componentDidMount!');
    }
    // 4
    changeGame(){
        this.setState({favoriteGame: 'Tennis'});
        // this.getSnapshotBeforeUpdate.bind(this);
    }
    // 5 shouldComponentUpdate - return boolean value that specifies where React should continue with
    // rendering or not. By default it is true.
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate!');
        return true;
    }

    // 6 getSnapshotBeforeUpdate - method has access to props and state before update.
    getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById('div1').innerHTML = 'Before the update, the Favorite Game was: ' + `<b>${prevState.favoriteGame}</b>`;
        console.log('getSnapshotBeforeUpdate!');
        return null;
    }
    // 7 componentDidUpdate - method called after component is updated in the DOM.
    componentDidUpdate(){
        document.getElementById('div2').innerHTML = 'The updated Favorite Game is: ' + `<b>${this.state.favoriteGame}</b>`;
        console.log('componentDidUpdate!');
    }
    render(){
        return(
            <div style={{textAlign: 'left', marginLeft: '30%'}}>
                <h1>My Favorite Game is <b><i>{this.state.favoriteGame.toUpperCase()}</i></b></h1>
                <button type='button' className='btn btn-danger' onClick={this.changeGame.bind(this)}>Change Game!</button><br/>
                <div id='div1' className='text-success'></div><br/>
                <div id='div2' className='text-info'></div><br/>
            </div>
        )
    }
}