import React from 'react';
import firebaseApp from '../firebase/firebase';
import {withRouter} from 'react-router-dom';

const usersRef = firebaseApp.database().ref("users");

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }

        usersRef.on("value", snapshot => {
            const userData = snapshot.val()
            const users = JSON.stringify(userData);
            localStorage.setItem("users", users);
        })
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        let userRef = firebaseApp.database().ref("users/");
        userRef.on("value",(snapshot)=>{
            const data = snapshot.val();
            if(this.state.email.replace(/\./g,",") in data){
                localStorage.setItem('currentUser',this.state.email.replace(/\./g,","));
                this.props.history.push("/chats");
            }else{
                alert("not present")
            }
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        Log in to chat-app
                    </h1><br />
                    <div>
                        <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                    </div>
                    <br />
                    <div>
                        <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                    </div>
                    <br />
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);