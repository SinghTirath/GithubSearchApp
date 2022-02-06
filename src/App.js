import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

//Components
import UserInfo from './components/UserInfo';
import SearchPage from './components/SearchPage';


const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={ <SearchPage />} />
        <Route path="/user/:name" element={<UserInfo />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;