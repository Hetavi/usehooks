

export const createNotice = (notice) => {
    return (dispatch, getState, { getFirebase }) => {
        const firestore = getFirebase().firestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('notices').add({
            ...notice,
            authorFirstName: profile.firstname,
            authorLastName: profile.lastname,
            authorId: '123456',
            createdAt: new Date(),
            title: notice.title,
            content: notice.content
        }).then(() => {
            dispatch({ type: 'CREATE_NOTICE_SUCCESS' });

        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
        });
    }



};
