import React from 'react'
import NoticeList from '../notices/NoticeList'
import { useSelector, connect } from 'react-redux'
import { firestoreConnect, useFirestoreConnect } from 'react-redux-firebase'

import { compose } from 'redux'
function Dashboard(props) {


    console.log(props.notices)
    const { notices } = props;
    console.log(notices)
    return (



        <div className="dashborad container">
            <div className="row">
                <div className="col s12 m6">

                    <NoticeList notices={notices} />

                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        notices: state.fireStore.ordered.notices

    }
}

export default compose(

    firestoreConnect([
        { collection: 'notices', orderBy: ['createdAt', 'desc'] },

    ]),
    connect(mapStateToProps)
)(Dashboard)

