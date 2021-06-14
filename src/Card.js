import React from 'react';
import ReactDOM from 'react-dom';  
import './Card.scss';
import './DarkMode.js';
class Card extends React.Component {
    // constructor(props) {
    //   super(props)
    //   this.state = { 
    //     darkMode: true
    //   }
    //   this.handleChange = this.handleChange.bind(this);
    // }
    
    // handleChange(event) {
    //   this.setState({ darkMode: !this.state.darkMode });
    // }
    // render() {
    //   const { title } = this.props;
    //   let modeClass = this.state.darkMode ? "dark-mode" : "light-mode";
    //   let checked = this.state.darkMode ? "checked" : "unchecked";
    //   // const body = document.body;

    //   // body.classList.add(modeClass);
     
    //   // const switchTheme = e =>{
    //   // if(modeClass==="dark-mode" || modeClass==="light-mode"){
    //   //  body.classList.replace("dark-mode", "light-mode");
    //   // }
    //   // else{
    //   //  body.classList.replace("light-mode", "dark-mode");
    //   // }
    //   // }

    //   return  <div className={`box content ${modeClass}`}>
    //     <h1>{title}</h1>
    //     <p>I was built with a Class component extending React.Component.</p>
    //     <label className="checkbox">
    //       <input 
    //         type="checkbox" 
    //         defaultChecked={checked} 
    //         onChange={this.handleChange} />
    //       {' '}Dark Mode
    //     </label>
    //   </div>;
    // }
    render(){
        return <div className="box">
          <h1>Hotel Dalgona</h1>
        </div>;
    }
  }
  
  const el = document.querySelector("#root");
  ReactDOM.render(<Card />, el);

  export default Card;