export const signId = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
        });
    }
}
export const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        const firestore = getFirebase().firestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(resp => {
            alert('gfdgfdgfd')

            return firestore.collection('users').doc(resp.user.uid).set({
                firstname: newUser.firstname,
                lastname: newUser.lastname,
                initials: newUser.firstname[0] + newUser.lastname[0]

            });

        }).then(() => {
            alert('then action')
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch((err) => {
            alert('catch action')
            dispatch({ type: 'SIGNUP_ERROR', err });
        });
    }
}