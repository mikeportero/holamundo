import React from "react";

import Regards from './Regards';

/* // Crear componente
const App = () => {
    return <div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </div>
}*/

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Miguel',
            lastName: 'Mendoza'
        }
        this.ChangeMiriam = this.ChangeMiriam.bind(this);
        this.ChangeHugo = this.ChangeHugo.bind(this);
        this.ChangeState = this.ChangeState.bind(this);
    }

    ChangeMiriam() {
        this.setState({
            name: 'Miriam',
            lastName: 'Rangel Tabares'
        })
    }

    ChangeHugo() {
        this.setState({
            name: 'Hector Hugo',
            lastName: 'Mendoza Rangel'
        })
    }

    ChangeState(objectName) {
        this.setState(objectName);
    }

    render() {
        return <div>
            {/* <h1>Hola {this.state.name + ' ' + this.state.lastName}</h1> */}
            <Regards objectName={this.state} />
            <button onClick={this.ChangeMiriam}>Miriam</button>
            <button onClick={this.ChangeHugo}>Hugo</button>
            <button onClick={ () => this.ChangeState({name: 'HH', lastName: 'Mendoza'})}>Hugo 2</button>
            <button onClick={ () => this.ChangeState({name: 'Carlos', lastName: 'Mendoza'})}>Carlos</button>
        </div>
    }
}

export default App