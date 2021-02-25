import React from 'react';
import {usersList} from '../utils';
import './ChatWith.css';
import {withRouter} from 'react-router-dom';
import { currentUser } from '../utils';
import firebaseApp from '../firebase/firebase';

class ChatWith extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            messages: [],
            content: "",
            currentUser: currentUser,
        }
        this.user2 = this.props.match.params.id ;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
            firebaseApp.database().ref("/messages/"+ currentUser + this.user2).on("value", snapshot => {
                let messages = [];
                snapshot.forEach((snap) => {
                    messages.push(snap.val());
                });
                this.setState({ messages });
            });
    }

    handleChange(event){
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        firebaseApp.database().ref("/messages/"+ currentUser + this.user2).push({
            content: this.state.content,
            timestamp: new Date(Date.now()).toString(),
            currentUser: this.state.currentUser
        })
        this.setState({
            content: ""
        })
    }

    render(){
        return(
            <div className="root">
            <h1>Chat with {this.user2}</h1>
                <div>
                    {this.state.messages.map(msg => {
                        return <div><div className="msgStyle" key={msg.timestamp}>{msg.content}</div><p className = "timeStyle">{msg.timestamp}</p></div> 
                    })}
                </div>
                <form className="formStyle" onSubmit={this.handleSubmit}>
                <textarea className="textareaStyle" name= "content" placeholder="write your message" value= {this.state.content} onChange={this.handleChange}/>
                <button type = "submit">Send</button>
             </form>
        </div>
        )
    }
}

export default withRouter(ChatWith);

