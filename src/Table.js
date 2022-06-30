import React, {Component} from 'react';

// This is a simple component
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = () => {
  return (
    <tbody/>
     
  )
}

//This is a class component. A class component must include render(), and the return can only return one parent element.
class Table extends Component {
  
  render() {
// data passed to Table element in App.js (e.g. <Table characterData={characters}/>), this is set as properties for this element as follows
     const {characterData} = this.props

    return (
      
      <table>
       <TableHeader/>
// this is now passed to the TableBody and can be accessed in its simple component
       <TableBody characterData={characterData} />
      </table>

    )
  }
}

export default Table