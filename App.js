import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentTbl from './StudentTbl';
import CreateStudent from './CreateStudent';
import EditStudent from './EditStudent';
import ViewDetails from './ViewDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<StudentTbl/>}></Route>
      <Route path='/student/create' element={<CreateStudent/>}></Route>
      <Route path='/student/edit/:studentid' element={<EditStudent/>}></Route>
      <Route path='/student/view/:studentid' element={<ViewDetails/>}></Route>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
