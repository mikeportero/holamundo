//Importacion Modulos
import React from "react";
import ReactDom from "react-dom";

// Crear componente
const App = () => {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}

//Renderizo de componente
ReactDom.render(
    <App/>,
    document.querySelector('#root')
)