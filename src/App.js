import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import Pillar from './components/Pillar/Pillar';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route:'signin',
      name:'Dave',
      time:'',
      task:'Endurance x 30 minutes',
      isGuest:'no'
    }
  }

    onRouteChange = (route) =>{
      this.setState({route:route});
    }

    areTheyAGuest = (guest) => {
      this.setState({route:'home'});
      this.setState({guest:guest});
    }

  render(){
    return (
      <div className="App">
          <Header/>
          {this.state.route === 'signin'
            ?
            <Signin onRouteChange={this.onRouteChange} areTheyAGuest={this.areTheyAGuest}/>
            :(
            this.state.route === 'register'?
            <Register onRouteChange={this.onRouteChange}/>
            :(this.state.route === 'home' ?
            <div>
              <Greeting name = {this.state.name}/>
              <div className='pillar-master'>
                <Pillar title = {'Strength/Conditioning'} delay={'3.25s'} onRouteChange={this.onRouteChange}/>
                <Pillar title = {'Mobility'} delay={'3.75s'} onRouteChange={this.onRouteChange}/>
                <Pillar title = {'Nutrition'} delay={'4.25s'} onRouteChange={this.onRouteChange}/>
              </div>
            </div>
          :(
            this.state.route === 'Strength/Conditioning' 
            ?
            <div>
              <h2>Strength</h2>
              <div className='orm-container'>
                <h3>Your Current One Rep Max In:</h3>
              </div>
              <div className='weight-container'>
                <h3>Weights, Sets, and Reps For Your Next Workout</h3>
              </div>
              
            </div>
            : ( this.state.route === 'Mobility'
            ?
            <div>
              
            </div>

            : (
              this.state.route === 'Nutrition'
              ?
              <div>
                
              </div>
              :<div><h1>How'd You fuck this up bud </h1></div>
            )
            )
            
          )))}
          
      </div>
    );
  }
  
}

export default App;
