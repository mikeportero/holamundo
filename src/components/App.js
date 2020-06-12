import React from "react";
import Faker from "faker";

import Regards from './Regards';
import Comments from './comments';
import Button from './button';

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
            lastName: 'Mendoza',
            comments: []
        }
        this.ChangeMiriam = this.ChangeMiriam.bind(this);
        this.ChangeHugo = this.ChangeHugo.bind(this);
        this.ChangeState = this.ChangeState.bind(this);
        this.addComment = this.addComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
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

    addComment() {
        let comment = {
            name: Faker.name.firstName(),
            userAvatar: Faker.image.avatar(),
            date: Date.now().toLocaleString(),
            comment: Faker.lorem.paragraph()
        }
        /* this.state.comments.push(comment); */
        let copystate = this.state.comments;
        copystate.push(comment);
        this.setState({ comments: copystate });
    }

    deleteComment(){
        let copystate = this.state.comments;
        copystate.pop();
        this.setState({ comments: copystate });
    }

    /* render() {
        return <div>
            <Regards objectName={this.state} />
            <button onClicknpm i Faker={this.ChangeMiriam}>Miriam</button>
            <button onClick={this.ChangeHugo}>Hugo</button>
            <button onClick={ () => this.ChangeState({name: 'HH', lastName: 'Mendoza'})}>Hugo 2</button>
            <button onClick={ () => this.ChangeState({name: 'Carlos', lastName: 'Mendoza'})}>Carlos</button>
        </div>
    } */

    render() {
        return <div>
            <Button onclick={() => this.addComment()} text={'Comentar'}/>
            <Button onclick={() => this.deleteComment()} text={'Borrar'}/>
            {
                this.state.comments.map((comment) => {
                    return <Comments
                        key={comment.name}
                        name={comment.firstName}
                        userAvatar={comment.userAvatar}
                        date={comment.date}
                        comment={comment.comment}
                    />
                })
            }

        </div>
    }
}

export default App