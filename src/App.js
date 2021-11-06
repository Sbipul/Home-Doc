
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from '../src/Pages/Shared/Header/Header/Header';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './AuthProvider/AuthProvider';
import Details from './Pages/Details/Details';
import Login from './Pages/Login/Login'
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Shared/Footer/Footer';
import Doctors from './Pages/Doctors/Doctors';
import SignUp from './Pages/SignUp/SignUp';
import PrivetRoute from './Pages/PrivetRoute/PrivetRoute';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header/>
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/home">
              <Home/>
            </Route>



            <Route path="/blog">
              <Blog/>
            </Route>

            
            <Route path="/sign">
              <SignUp/>
            </Route>

            <Route path="/log">
              <Login/>
            </Route>

            <Route path="/doctors">
              <Doctors/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

            <PrivetRoute path="/details/:id">
              <Details/>
            </PrivetRoute>
            
            <Route path="*">
              <ErrorPage/>
            </Route>

          </Switch>
          <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
