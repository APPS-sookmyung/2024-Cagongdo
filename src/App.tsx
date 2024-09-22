import './App.css'; // 스타일을 임포트합니다.
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './route';

const App = () => {
  return (
    <Router>
      <div className="App">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
