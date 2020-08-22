import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Employee from './components/Employee';
import './App.css';
import data from "./employee.json";

class App extends Component {
  state={
    search:"",
    data,
    sortDirection:"asc"
       }
handleChange= (e)=>{
  const newData= data.filter(person => person.name.substr(0, e.target.value.length).toLowerCase() === e.target.value.toLowerCase() )
  this.setState({
    search: e.target.value,
    data:newData
  })
}

handleData = () => {
  if (this.state.sortDirection === "asc") {
    this.setState({
      data: this.state.data.sort((a, b) => (a.name > b.name ? 1 : -1)),
      sortDirection: "desc",
    });
  } else {
    this.setState({
      data: this.state.data.sort((a, b) => (a.name > b.name ? -1 : 1)),
      sortDirection: "asc",
    });
  }
};


render(){
  return (
    <div className="App">
    <h1 className="bg-secondary">Leon's Bar-HR-System</h1>
    <Header search={this.state.search} handleChange={this.handleChange}/>
    <Employee search={this.state.search} data={this.state.data} handleData={this.handleData} />
    <Footer/>
    </div>
  );
}
}
export default App;
