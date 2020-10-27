import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signId } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom';

function SignIn(props) {
    const [newId, setNewId] = useState({
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
    const onChange = e => {
        setNewId({
            ...newId,
            [e.target.name]: e.target.value
        });
    };



    /*  const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");*/

    const handleSubmit = (evt) => {
        evt.preventDefault();

        console.log(useState)
        const credentials = {
            email: newId.email,
            password: newId.password

        };
        console.log(credentials)
        dispatch(signId(credentials));
        setNewId({
            email: "",
            password: ""
        })
    };
    /* const handleChange = (evt) => {
         setEmail(evt.target.value);
         setPassword(evt.target.value);*/
    const { authError, auth } = props;
    //if (auth.uid) return <Redirect to='/' />

    return (
        <div className="bg-image">
            <div className="container">
                <form className="white" onSubmit={handleSubmit}>
                    <h5 className="black-text text-darken-3 "><b>SIGN IN</b></h5>

                    <input value={newId.email} onChange={onChange}
                        placeholder="Email" type="email" name="email" required />
                    <input value={newId.password} onChange={onChange}
                        placeholder="Password" type="password" name="password" required />
                    <button className="btn pink lighten-1 z-depth-0" type="submit" >Login</button>
                    {authError ? <p>{authError}</p> : null}

                </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

export default SignIn;