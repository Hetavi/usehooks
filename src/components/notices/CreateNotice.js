import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createNotice } from '../../store/actions/noticeActions';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';


function CreateNotice(props) {
    const [newnotice, setNewnotice] = useState({
        title: "",
        content: ""
    });
    const dispatch = useDispatch();
    const onChange = e => {
        setNewnotice({
            ...newnotice,
            [e.target.name]: e.target.value
        });
    };
    /* const [title, setTitle] = useState("");
     const [content, setContent] = useState("");*/
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(useState)
        const notice = {
            title: newnotice.title,
            content: newnotice.content
        };
        console.log(notice)
        dispatch(createNotice(notice));
        setNewnotice({
            title: "",
            content: ""

        });


    };
    const { auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
        <div className="bg-image">
            <div className="container">
                <form className="white" onSubmit={handleSubmit}>
                    <h5 className="black-text text-darken-3 "><b>CREATE A NEW NOTICE</b></h5>
                    <input value={newnotice.title} onChange={onChange}
                        placeholder="Title" type="text" name="title" required />
                    <textarea value={newnotice.content} onChange={onChange}
                        placeholder="Content" name="content" required />
                    <button type="submit" className="btn pink lighten-1">Create</button>

                </form>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
/* is following  required for class components ?
const mapDispatchToProps = dispatch => {
    return {
        CreateNotice: (notice) => dispatch(createNotice(notice))
    }
}
export default connect(null, mapDispatchToProps)(CreateNotice);
*/
export default connect(mapStateToProps)(CreateNotice);

