import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Hello from './components/Hello';
import Card from './components/Card';
import { person } from './utils/person'
import Counter from './components/Counter'

function App() {
  return (
    <div>
      <Header/>
      <Content/>
      <Hello/>
      <p>Hello Guys.</p>
      {person.map((item) => {
        return (
          <Card 
            name={item.name}
            institution={item.institution}
            address={item.adrress}  
          />
        );
      })}

      <Counter/>
    </div>
  );
}

export default App;