import './App.css';
import Hello, { HelloII } from './components/hello';
import Hi from './components/hi';
import Checkbox from './components/welcome/old_checkbox_state';
import CheckboxNew from './components/welcome/checkbox_state';
import Greet, { Cars, HelloMsg, SimpleTitle } from './components/welcome/old_greet_props';
import GreetNew, { CarsNew, HelloMsgNew, SimpleTitleNew } from './components/welcome/greet_props';
import x, { welcome } from './components/welcome/welcome';
import Counter from './components/counter';
import LoginForm from './components/loginform';
import Todos from './components/todos';
import ControlledComponent from './components/controlled_uncontrolled';
import Layout from './components/layout';
import ParentComp from './components/ParentChildComp';
// import { ComponentOne } from './components/Demo_Context/01usingProps';
// import { ComponentOne } from './components/Demo_Context/02usingContext';
import DemoUseEffect from './components/Demo_useEffect/demo_useEffect';
// import { ComponentOne } from './components/Demo_Context/01usingProps';
import { ComponentOne } from './components/Demo_Context/02usingContext';
import GameComp from './components/Demo_Lifecycle_methods/01componentLifeCycle';
import GamePacks from './components/Demo_Lifecycle_methods/02componentWillUnmount';
import RESTFulCallTodos, { RESTFulCallUsers } from './components/Demo_Consuming_REST/01httpcalls';
import DisplayEmployees from './components/Demo_EventEmitter/displayemployees';

function App() {
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

            {/* on 25th September */}
            {/* <GreetNew />
            <GreetNew name="Abhijith" />
            <GreetNew name="Leela" />

            <hr/>

            <HelloMsgNew title="India">
                Hello India!
            </HelloMsgNew>
            <HelloMsgNew title="World">
                Hello World!
            </HelloMsgNew>
            <HelloMsgNew title="Universe">
                Hello Universe!
            </HelloMsgNew>

            <hr/>

            <CarsNew brand={{name:'Ford', model:'Mustang'}} />
            <CarsNew brand={{name:'Tata', model:'Safari'}} />
            <CarsNew brand={{name:'Mahindra', model:'Thar'}} />

            <hr/>

            <SimpleTitleNew showTitle={false} title='None' />
            <SimpleTitleNew showTitle={true} title='One' />
            <SimpleTitleNew showTitle title='Two' />

            <hr/> */}

            {/* <Checkbox /> */}

            {/* on 25th September */}
            {/* <CheckboxNew /> */}

            {/* Day 3 */}
            {/* <Counter /> */}
            {/* <LoginForm /> */}
            {/* <Todos /> */}
            {/* <ControlledComponent /> */}
            {/* <Layout /> */}

            {/* Day 4 */}
            {/* Convert LoginForm to work with only one state and that too of Object */}
            {/* <LoginForm /> */}

            {/* Another way of communication from parent to child which is instance method */}
            {/* <ParentComp /> */}

            {/* Any to any communication using Context */}
            {/* <ComponentOne /> */}

            {/* Lifecycle methods */}
            {/* <GameComp /> */}
            {/* <GameComp favGame='Football' /> */}
            {/* <GamePacks /> */}

            {/* useEffect Hook */}
            {/* <DemoUseEffect /> */}

            {/* Day 4 on 15th Oct */}
            {/* Convert LoginForm to work with only one state and that too of Object */}
            {/* <LoginForm /> */}

            {/* parent to child communication with the help of instance method */}
            {/* <ParentComp /> */}

            {/* Any to any communication using Context */}
            {/* <ComponentOne /> */}

            {/* Life Cycle Methods */}
            {/* <GameComp /> */}
            {/* <GameComp favGame='Hockey' /> */}
            {/* <GamePacks /> */}

            {/* useEffect Hook */}
            {/* <DemoUseEffect /> */}

            {/* Day 5 on 17th Oct 2023 */}
            {/* <RESTFulCallUsers />
            <hr/>
            <RESTFulCallTodos /> */}
            <DisplayEmployees />
      </div>
  );
}

export default App;
