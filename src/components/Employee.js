import React from 'react';
import data from './employee.json';

class Employee extends React.Component{
    state = {
        data,
        searchField:""
    }
    render(){
        let staffData =this.state.data
        return(
            <div>
                {staffData.map=(emp => {
                    return(
                        <h1>emp</h1>
                    )
                })}
            </div>
        )
    }
}

export default Employee;