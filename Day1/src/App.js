import './App.css';
import Hello, { HelloII } from './components/hello';

function App(){
    return (
        <div className="App">
            <h1>Hello World!</h1>
            <Hello />
            <HelloII />
        </div>
    );
}

export default App;