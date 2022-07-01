# React Tutorial

## Components
2 types: 

### Class Components

- Uses Class keyword 
- Must Render
- Return can only return one parent element

```
class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}
```

### Simple Components 

- A function 
- Does NOT use class keyword

```
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
```
If return contained on one line it does not need parenthesis.

## Create App.js and App component with PROPS and Array of objects defined

- Array of objects defined in App class component (at this stage) as a variable called `characters`. 
- This can be passed as a PROP to the Table component by adding it to the `<Table/>` element in the App (not sure if this can only be done in class components).
- These props can now be called in the Table.js file/component. 
- We can call property whatever we want, below `characterData` is choosen. 
- the variable name `characters` is put into curly brackets because it is a JS expression

```
 <Table characterData={characters}/>
```
The App.js will look like this:  
```
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
{/* This passes data through to the table element, so it can now be called there. Curly braces used because its a JS expression */}
        <Table characterData={characters}/>
     </div> 
    )
  }
}

export default App

```
- These props can now be called in the Table.js file/component. Can see the data in React Components:

![This is an image](https://github.com/robhami/react-tutorial/blob/main/readme%20data/props_in_table.PNG)


- Can also call it with `this.props`, i.e. can do a `console.log(this.props)` to see what is in the props.





- Create a variable that contains const {characterData} = this.props
```
class Table extends Component {
  render() {
    const {characterData} = this.props

    return (
      <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
    )
  }
}
```

