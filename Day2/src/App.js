import './App.css';
import Hello, { HelloII } from './components/hello';
import Hi from './components/hi';
import Checkbox from './components/welcome/checkbox_state';
import Greet, { Cars, HelloMsg, SimpleTitle } from './components/welcome/greet_props';
import x, { welcome } from './components/welcome/welcome';

function App(){
    return (
        <div className="App">
            {/* <h1>Hello World!</h1>
            <Hello />
            <HelloII />
            <Hi />
            <h2>{x}!</h2>
            {welcome} */}

            {/* <h1 id='hOne'>Hello</h1>
            <Greet />
            <Greet name="Abhijith"/>
            <Greet name="Leela"/>

            <hr />

            <HelloMsg title="India">
                Hello India!
            </HelloMsg>
            <HelloMsg title="World">
                Hello World!
            </HelloMsg>
            <HelloMsg title="Universe">
                Hello Universe!
            </HelloMsg>

            <hr />

            <Cars brand={{name: 'Ford', model: 'Mustang'}} />
            <Cars brand={{name: 'Tata', model: 'Safari'}} />
            <Cars brand={{name: 'Mahindra', model: 'XUV 700'}} />

            <hr />

            <SimpleTitle showTitle={false} title='None' />
            <SimpleTitle showTitle={true} title='One' />
            <SimpleTitle showTitle title='Two' />

            <hr /> */}

            <Checkbox />
        </div>
    );
}

export default App;