import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/LoginStatusContext';
import Home from './page/Home';
import Login from './page/Login';
import Todo from './page/Todo';
import Memo from './page/Memo';
import NotFound from './page/NotFound';
import './style/style.css';
import Header from './component/Header';

function App() {
  return (
    <div className='App'>
      <UserProvider>
        <BrowserRouter>
          <Header />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/todo' element={<Todo />} />
              <Route exact path='/memo' element={<Memo />} />

              <Route exact path='*' element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
