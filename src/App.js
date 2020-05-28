import React from 'react';
import axios from 'axios';
import Logo from './images/logo.png';
import './App.css';

class App extends React.Component{
	
	state = {advice : '', errorMsg: null, loading: false}

	componentDidMount(){
		this.fetchAdvice();
	}

// http request to fetch api
fetchAdvice = () => {
	this.setState({loading: true, errorMsg: null});
	axios.get('https://api.adviceslip.com/advice')
	.then(
      res => {
      	this.setState({loading: false});
      	const {advice} = res.data.slip;
        this.setState({advice}); 
      })
      .catch(error => {if(error){
		this.setState({errorMsg: error, loading: false})
	}})
      
}

	render(){ 
		const {loading, errorMsg, advice} = this.state;
		const cardText = errorMsg ? "Oops! Check your internet connection and try again." : advice;
		return (
			<div className="app">
				<div className="logo"><img src={Logo} alt="Azeem Ansari" /></div>	
        <div className="card">
          <h1 className="heading">{cardText}</h1>
          <button className="button" onClick={this.fetchAdvice}>{loading ? "Loading..." : errorMsg ? "Reload" : "GIVE ME ADVICE!"}</button>
        </div>
      </div>
			)
	}
}

export default App;