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
- {characterData} is used as variable name, because we are only passing one prop and this defines which prop
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
- Use MAP to pass PROPS through as a parameter
- Add key index to each row for id purposes
- Pass it to a row variable which will return as an expression:

```
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}
```

- Component cannot change props, this is done by state.

## State

- Props are a one way data flow:
-  const characters --> `<Table/>` --> const {characterData} --> <TableBody/> --> const rows --> map to `<td/>` --> return mapped `<tbody/>`
-  Need to use state to change data in props
- Create a state then move const characters array to state to create `state.characters`:

```
class App extends Component {

  state={
    characters:[
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
    ],
  }
```
Create method called `removeCharacter`:

```
removeCharacter = (index) => {
  const {characters} = this.state

  this.setState({
    characters: characters.filter((character, i) => {
      return i !== index
    }),
  })
}
```
- To retrieve state use `this.state` not sure why she said : `this.state.characters`
- To update state use `this.state()`
- Filter array based on index. Testing an index vs. all indicies in arrayand returning all but the one that is passed through
- Filter does not mutate but creates a new array- preferred method for modifying arrays in JS.

-Pass `removeCharacter` function through as a prop to `Table`:

```
render() {
  const { characters } = this.state

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={this.removeCharacter} />
    </div>
  )
}
```
