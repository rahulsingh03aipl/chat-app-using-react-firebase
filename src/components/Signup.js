import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom';
import firebaseApp from '../firebase/firebase';
import {withRouter} from 'react-router';

class Signup extends Component{

    constructor(props){
        super(props);
        this.state ={
            name:"",
            email:"",
            password:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        let usersRef = firebaseApp.database().ref("users").orderByKey().limitToLast
        firebaseApp.database().ref(`users/${this.state.email.replace(/\./g, ',')}`).set({ "name": this.state.name, "email": this.state.email, "password": this.state.password});
        this.setState({
            name:"",
            email:"",
            password:""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>
                        Sign Up to chat-app
                    </h1>
                    <p>Fill in the form below to create an account.</p><br />
                    <div>
                        <input placeholder="Name" name="name" type="text" onChange={this.handleChange} value={this.state.name}></input>
                    </div><br />
                    <div>
                        <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
                    </div>
                    <br />
                    <div>
                        <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
                    </div>
                    <br />
                    <div>
                        <button type="submit">Sign up</button>
                    </div>
                    <hr></hr>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup);

