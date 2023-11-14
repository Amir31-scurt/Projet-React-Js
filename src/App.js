import React, { useEffect, useState } from "react";
import Picture from "./components/picture";
/*function App( {titre} ){
    return <h1 className = "text-center text-red-700 text-4xl">{titre}</h1>
}*/

function App(){
    const [title, setTitle] = useState("Hello World");
    const [show, setShow] = useState(false);

    useEffect(() => console.log("Component Mount"), []);

    function handleClick(){
        setShow(!show);
    }
    return(
        <div>
            <h1 className="text-4xl text-blue-700 my-5">{title}</h1>
            <button className="bg-blue-600 py-2 text-white px-3 m-3 rounded"
             onClick = {handleClick} >Cliquer</button>
            {show ? <Picture/> : null}
        </div>
    )
}

/*class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {show : false, title : 'Hello World'};
    }

    componentDidMount(){
        this.setState({title : "Le composant a bien monté"})
    }
    render(){
        return <div>
            <h1 className="text-4xl text-blue-700 my-5">{this.state.title}</h1>
            <button className="bg-blue-600 py-2 text-white px-3 m-3 rounded" onClick={() => this.setState({show : !this.state.show})}>Cliquer</button>
            {
                this.state.show?
                <Picture/>
                : null
            }
        </div>
    }
}*/
export default App;