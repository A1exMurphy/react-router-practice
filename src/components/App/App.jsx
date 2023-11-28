
import { HashRouter as Router, Route, Link } from 'react-router-dom/';
import axios from 'axios';
import './App.css';

import StudentList from '../StudentList/StudentList.jsx';
import Home from '../Home/Home.jsx';
import AllStudents from '../allStudents/allStudents.jsx';
import About from '../About/About.jsx'


function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <Router>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <Link to="/allStudents">
                    <span>Student Body</span>
                </Link>
                <Link to="/about">
                    <span>About</span>
                </Link>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/allStudents">
                    <AllStudents />
                </Route>

                <Route exact path="/about">
                    <About />
                </Route>
            </Router>


            <p>Student list:</p>
            <StudentList />
        </div>
    );
}

export default App;
