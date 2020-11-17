import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

/* MEMAKAI CLASS COMPONENT */
// class App extends Component {
//   state = {
//     users: [],
//   };

//   componentDidMount() {
//     // fetch("https://jsonplaceholder.typicode.com/users") (Menggunakan fetch <- Cara Lama)
//     //   .then((response) => response.json())
//     //   .then((json) => this.setState({users : json}));
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => this.setState({ users: response.data }));
//   }

//   render() {
//     return (
//       <>
//       {
//         this.state.users.map((item) => {
//           return (
//             <Card 
//             id={item.id} 
//             name={item.name}
//             username={item.username} 
//             email={item.email} 
//             phone={item.phone}/>
//           );
//         })
//       } 
//       </>
//     ); 
//   }
// }


/* Menggunakan Functional Component */
const App = () => {

  const [users, setUsers] = useState([]);
  
  useEffect(() => { /* useEffect sama seperti ComponentDidMount dalam Class Component*/
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => setUsers(response.data));    
  }, []);
 
  return (
    <>
    {
      users.map((item) => {
        return (
          <Card 
            id={item.id} 
            name={item.name}
            username={item.username} 
            email={item.email} 
            phone={item.phone}
          />
        )
      })
    }
    </>
  )
}

export default App;
