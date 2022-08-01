import './App.css';
import Customers from './components/Customers/Customers';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerForm from './components/CustomerForm/CustomerForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Customers />} />
          <Route path='/edit' element={<CustomerForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
