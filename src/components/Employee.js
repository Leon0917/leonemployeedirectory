import React from 'react';
import data from './employee.json';

class Employee extends React.Component{
    state = {
        data,
        searchField:"",
        sortDirection: "asc"
           }

           handleData = ()=>{
               if(this.state.sortDirection === "asc"){
               this.setState({data: this.state.data.sort((a,b)=> a.name > b.name ? 1 : -1),
            sortDirection: "desc"})
               }else{
                this.setState({data: this.state.data.sort((a,b)=> a.name > b.name ? -1 : 1), sortDirection:"asc"})
               }
           }

    render(){
        let staffData = this.state.data
        return(
            <div>
                <table className="table table-stripped">
                    <tr>
                        <th>
                            <button 
                            onClick={this.handleData}
                            >
                                Name
                            </button>
                        </th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Location</th>
                    </tr>
               <tbody>
                {staffData.map((emp ,key)=> {
                    return(<tr key={key}>
                        <th>{emp.name}</th>
                        <th>{emp.phoneNumber}</th>
                        <th>{emp.email}</th>
                        <th>{emp.location}</th>
                    </tr>
             
                    )
                })}
                </tbody>
                   </table>
            </div>
        )
    }
}

export default Employee;