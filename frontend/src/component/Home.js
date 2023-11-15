import {useEffect, useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";

export const Home = () => {
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        if(localStorage.getItem('access_token') === null){
            window.location.href = '/login'
        }
        else{
            (async () => {
            try {
                const {data} = await axios.get('http://localhost:8000/home/', {
                headers: {
                  'Content-Type': 'application/json',
                }
              });

              setMessage(data.message);
              setUser(data.user);
            } catch (e) {
                console.log('not auth')
            }
        })()};
    }, []);

    return (
        <div className="form-signin mt-5 text-center">
            <h3>Bienvenido {user}{message}</h3>
        </div>);
}