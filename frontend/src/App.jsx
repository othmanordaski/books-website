import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx';
import Dashboard from './Components/Dashboard.jsx';
import CreateBook from './Components/CreateBook.jsx';
import GetAbook from './Components/GetAbook.jsx';
import UpdateBook from './Components/UpdateBook.jsx';
import DeleteBook from  './Components/DeleteBook.jsx'
import PrivateRoute,{UserRoute} from './utils/AuthRoutes.jsx'
function App() {
  return (
    <Router>
        <Routes>
          <Route element={<PrivateRoute/>}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/create-book" element={<CreateBook/>} />
            <Route path="/book/:id" element={<GetAbook/>} />
            <Route path="/book/:id/edit" element={<UpdateBook/>} />
            <Route path="/book/:id/delete" element={<DeleteBook/>} />


          </Route>

          <Route element={<UserRoute/>}>

            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            
          </Route>

        </Routes>
      </Router>
  );
}

export default App;
