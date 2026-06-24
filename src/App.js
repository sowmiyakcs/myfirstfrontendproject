//import logo from './logo.svg';
import './App.css';
import Header from './component/header.js';
import Task1 from './component/task1.js';
import Empty from './component/empty.js';
import CustomerAdd from './component/customerAdd.js';
import CustomerView from './component/customerView.js';
import { Provider } from 'react-redux'
import {store} from "./component/store"


function App() {
  return (
      <Provider store = {store}>
  <h1>Redux Toolit</h1>
    <CustomerAdd></CustomerAdd>
    <CustomerView></CustomerView>
   </Provider>
    
  );
}

export default App;


/*import logo from './logo.svg';
import './App.css';
import Header from './component/header.js';
import Task1 from './component/task1.js';
import Empty from './component/empty.js';


function App() {
  return (
    <div className="App">
      <Header />
      Basic React App
<Task1 />
<Empty/>
    </div>
    
  );
}

export default App;*/
