//import logo from './logo.svg';
import './App.css';
import Header from './component/header.js';
import Task1 from './component/task1.js';
import Empty from './component/empty.js';
import CustomerAdd from './component/customerAdd.js';
import CustomerView from './component/customerView.js';


function App() {
  return (
    <div className="App">
     <CustomerAdd/>
    </div>
    
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
