import './welcome.css';
import newStyle from './welcome.module.css';

const x = 55;
export default x;

//css module
const hStyle = {
    color: 'green',
    border: 'solid 5px yellowgreen',
    fontSize: '15px',
    padding: '10px'
}

export const welcome = (
    <div>
        <h2>Hello World!</h2>
        <h2 style={{color: 'indigo', backgroundColor: 'aqua'}}>Welcome to React.js!</h2>
        {/* from css file */}
        <h2 className="myClass">class from .css file!</h2>
        {/* using css module */}
        <h2 style={hStyle}>using css module from same file!</h2>
        {/* using css module from .css file */}
        <h2 className={newStyle.newClass}>using css module from .css file!</h2>

    </div>
)