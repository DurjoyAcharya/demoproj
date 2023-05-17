import './App.css';
import AwesomeFooter from './component/AwesomeFooter';
import AwessomeHeader from './component/AwessomeHeader';
import MyInfo from './component/MyInfo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AwessomeHeader/>
        <MyInfo/>
        <AwesomeFooter/>
      </header>
    </div>
  );
}
export default App;
