import React from 'react';
import NoticeSummary from './NoticeSummary'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'


const NoticeList = ({ notices }) => {
    const authError = useSelector(state => state.auth.authError)

    return (
        <div className="notice-list section">
            {notices && notices.map(notice => {
                return (
                    <Link to={'/notice/' + notice.id} key={notice.id}>
                        <NoticeSummary notice={notice} />
                    </Link>
                )
            })}
        </div>
    )

}

export default NoticeList;