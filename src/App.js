import React,{Component} from 'react';
import Main from './components/MainComponent';
import css from './App.css';
class App extends Component {
  /*In this code the Menu component is called which is taking the dishes state inside it. now this state 
  is used as a prop here so it will be passed as a prop to the menu component in the menucompnent file.
  */ 
  render(){
    return (
      <div className="css">
        <Main />
      </div>
    );
  }
}
export default App; 
