import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Detection from './pages/Detection.jsx';
import About from './pages/About.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const Routes = () => {
  return (
    <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/detection" component={Detection} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
    </Router>
  );
};

export default Routes;
