import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions'
import { useDispatch } from 'react-redux'

function SignUp(props) {
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: ''
    });
    const dispatch = useDispatch();
    const onChange = e => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        });
    }

    /*const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");*/

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(useState)
        const user = {
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
            password: newUser.password
        };
        console.log(user)
        dispatch(signUp(user));
        setNewUser({
            firstname: "",
            lastname: "",
            email: "",
            password: ""

        });

    }
    const { auth } = props;
    // if (auth.uid) return <Redirect to='/signup' />
    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-black text-darken-3"><b>SIGN-UP</b></h5>
                <input value={newUser.firstname} onChange={onChange}
                    placeholder="First Name" type="text" name="firstname" required />
                <input value={setNewUser.lastname} onChange={onChange}
                    placeholder="Last Name" type="text" name="lastname" required />
                <input value={setNewUser.email} onChange={onChange}
                    placeholder="email" type="email" name="email" required />
                <input value={setNewUser.password} onChange={onChange}
                    placeholder="password" type="password" name="password" required />
                <button className="btn pink lighten-1 z-depth-0" type="submit">Sign Up</button>



            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(SignUp);