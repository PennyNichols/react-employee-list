import './App.css';
import Header from './components/header/Header';
import Counter from './components/counter/Counter';
import List from './components/list/List';

function App() {
  return (
    <div style={{position:'relative'}}>
      <div className="App" style={{backgroundColor:'violet', height:'100%', paddingTop:'5rem', paddingBottom:'5rem'}} >
        <div className="container" style={{backgroundColor:'white', width: '30rem', margin: '0 auto', boxShadow:'3px 3px 10px 0px black', borderRadius:'.5rem', padding: '2rem'}}>
          <Header title='Employee List'/>
          <Counter/>
          <List/>
        </div>
      </div>
    </div>
  );
}

export default App;
