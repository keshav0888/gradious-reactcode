import logo from './logo.svg';
import './App.css';
import { Table } from './component/Table'
import { AddData } from './component/AddData';
import {BookAppoinmentForm} from "./component/BookAppoinmentForm"
const App=()=> {
  return (
    <div className="App">
       <h1 className='header'>Welcome to Gradious Apppointment Booking</h1> 
       <BookAppoinmentForm/>
       <Table/>
    </div>
  );
}

export default App;
