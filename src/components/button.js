import React from "react";

class Button extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <button onClick={() => this.props.onclick()} class="ui primary button">
                {this.props.text}
            </button>
        )
    }
}

export default Button;