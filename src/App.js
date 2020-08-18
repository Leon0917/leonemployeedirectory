import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Employee from './components/Employee';
import './App.css';

function App() {
  return (
    <div className="App">
    <h1>Leon's Bar-HR-System</h1>
    <Header></Header>
    <Employee></Employee>
    <Footer></Footer>
    </div>
  );
}

export default App;
