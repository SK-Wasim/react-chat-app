import React, {useRef , useState , useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { ChatEngine } from 'react-chat-engine';

import { useAuth } from '../contexts/AuthContext'; 

const Chats = () =>{

    const history = useHistory();
    const { user } = useAuth();

    useEffect(() => {
        if(!user){
            history.push('/');
            return;
        }
    }, [user, history]);

    const handleLogout = async () =>{
        await auth.signOut();
        history.push('/');
    }

    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    CryptoChat
                </div>
                <div className="logout-tab" onClick={handleLogout}>
                    Logout
                </div>
            </div>

            <ChatEngine
                height="calc(100vh - 66px)"
                projectId = "f314f342-02cc-4d7d-8af1-dc7c091d61fd"
                userName = "."
                userSecret = "."
            />
        </div>
    )
}

export default Chats;