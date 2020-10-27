import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { auth } from 'firebase';
import { Redirect } from 'react-router-dom';
import moment from 'moment'

const NoticeDetail = (props) => {
    const { auth, notice } = props;
    const id = props.match.params.id;
    if (!auth.uid) return <Redirect to='/signin' />
    if (props.notice) {
        return (
            <div className="container section project-detail">
                <div className="card">
                    <div className="bg-image">
                        <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-fresh-natural-product-poster-background-image_146684.jpg" />
                    </div>
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title">{props.notice.authorFirstName}{props.notice.authorLastName}</span>
                        <p>{props.notice.content}</p>


                        <p>this is a basic image notice.i am learning my new skillls</p>
                        <p><h6>Posted by{props.notice.authorFirstName}{props.notice.authorLastName}</h6> </p>
                        <p className="grey-text">{moment(props.notice.createdAt.toDate()).calendar()}</p>

                    </div>
                </div>
            </div>



        )
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const notices = state.firestore.data.notices;
    const notice = notices ? notices[id] : null
    return {
        notice: notice
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'notices'
    }])
)
    (NoticeDetail)