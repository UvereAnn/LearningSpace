import './App.css';
import About from './components/About';
import Api from './components/Api';
import Categories from './components/Categories';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import Header from './components/Header';
import Login from './components/Login';
import Main from './components/Main';
import Quiz from './components/Quiz';
import Resources from './components/Resources';
import SignUp from './components/SignUp';
import StudentsTeacher from './components/StudentsTeacher';
import Testimonials from './components/Testimonials';
import VariousCourses from './components/VariousCourses';

function App() {
  return (
    <div className="App">
      {/*<Header/>
      <Main/>
      <About />
      <Courses/>
      <Categories/>
      <StudentsTeacher />
      <Testimonials/>
      <Clients/>
      <Contact/>
      <Footer/>
      <Login />
      <ForgotPassword />
      <SignUp />
      <Resources />
      <Quiz />
      <VariousCourses />*/}
      <Api />
      
      
    </div>
  );
}

export default App;
