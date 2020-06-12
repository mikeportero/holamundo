import React from "react";

class Comments extends React.Component {

    constructor(props) { 
        super();
        this.state = {
            userAvatar: props.userAvatar,
            name: props.name,
            date: props.date,
            comment: props.comment 
        }

    }

    componentWillMount(){
        console.log('Antes del renderizado');        
    }

    componentDidMount(){
        console.log('Despues del renderizado');
        
    }

    componentWillUnmount(){
        console.log('Componente borrado');
        
    }

    render() {
        return (
            <div class="ui comments">
                <div class="comment">
                    <a class="avatar">
                        <img src={this.state.userAvatar} alt="Imagen de Usuario"/>
                    </a>
                        <div class="content">
                            <a class="author">{this.state.name}</a>
                            <div class="metadata">
                                <div class="date">{this.state.date}</div>
                                <div class="rating">
                                    <i class="star icon"></i>
          {this.state.comment}
        </div>
                            </div>
                        </div>
  </div>
                </div>
        )
    }
}

export default Comments;