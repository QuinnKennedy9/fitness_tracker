import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Greeting from './components/Greeting/Greeting';
import TodaysTask from './components/TodaysTask/TodaysTask';
import Pillar from './components/Pillar/Pillar';
import Orm from './components/Orm/Orm';
import Weight from './components/Weight/Weight';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route:'home',
      name:'Dave',
      time:'',
      task:'Endurance x 30 minutes'
    }
  }

    onRouteChange = (route) =>{
      this.setState({route:route});
    }

  render(){
    return (
      <div className="App">
          <Header/>
          {this.state.route === 'home' ?
            <div>
              <Greeting name = {this.state.name}/>
              <TodaysTask task = {this.state.task}/>
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
                <Orm exercise={'Benchpress'} weight={'200 Pounds'}/>
                <Orm exercise={'Pullups'} weight={'5 reps'}/>
                <Orm exercise={'Squats'} weight={'200 pounds'}/>
                <Orm exercise={'Deadlifts'} weight={'200 pounds'}/>
              </div>
              <div className='weight-container'>
                <h3>Weights, Sets, and Reps For Your Next Workout</h3>
                <Weight exercise={'Benchpress'} weight={'200 Pounds'}/>
                <Weight exercise={'Pullups'} weight={'5 reps'}/>
                <Weight exercise={'Squats'} weight={'200 pounds'}/>
                <Weight exercise={'Deadlifts'} weight={'200 pounds'}/>
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
            
          )}
          
      </div>
    );
  }
  
}

export default App;
