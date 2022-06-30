import React, {Component} from 'react'
import Table from './Table.js'

class App extends Component {
  render() {

    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]


    return (
      <div className="container">
//This passes data through to the table element, so it can now be called there. Curly braces used because its a JS expression
        <Table characterData={characters}/>
     </div> 
    )
  }
}

export default App
