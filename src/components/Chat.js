import React from 'react';
import firebaseApp from '../firebase/firebase';
import {usersList} from '../utils';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';


class Chat extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(user){
        this.props.history.push('/chat-with/' + user);
    }


    render(){
        return(
            <div>
            <ul>
                {Object.keys(usersList).map((user) => {
                        return <li>
                            <button onClick={()=>this.handleClick(user)} >{user}</button>
                        </li>
                    })} 
            </ul>
            </div>
        )
    }
}

export default withRouter(Chat);

