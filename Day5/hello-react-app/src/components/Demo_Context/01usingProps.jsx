import { useState } from "react";

export const ComponentOne = () => {
    const [name, setName] = useState('Sachin');
    return(
        <>
            <input type="text" value={name} style={{margin: '10px'}}
            onChange={(evt) => {setName(evt.target.value)}}/>
            <h1 className="text-info">
                Component One!
            </h1>
            <h3 className="text-success">
                {`Welcome ${name}!`}
            </h3><br/>
            <ComponentTwo name={name} />
        </>
    )
}

export const ComponentTwo = ({name}) => {
    return(
        <>
            <h1 className="text-info">
                Component Two!
            </h1>
            <h3 className="text-success">
                {`Welcome ${name}!`}
            </h3><br/>
            <ComponentThree name={name} />
        </>
    )
}

export const ComponentThree = ({name}) => {
    return(
        <>
            <h1 className="text-info">
                Component Three!
            </h1>
            <h3 className="text-success">
                {`Welcome ${name}!`}
            </h3><br/>
            <ComponentFour name={name} />
        </>
    )
}

export const ComponentFour = ({name}) => {
    return(
        <>
            <h1 className="text-info">
                Component Four!
            </h1>
            <h3 className="text-success">
                {`Welcome ${name}!`}
            </h3><br/>
            <ComponentFive name={name} />
        </>
    )
}

export const ComponentFive = ({name}) => {
    return(
        <>
            <h1 className="text-info">
                Component Five!
            </h1>
            <h3 className="text-success">
                {`Welcome ${name}!`}
            </h3>
        </>
    )
}