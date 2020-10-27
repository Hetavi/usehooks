import React from 'react';
import moment from 'moment'

const NoticeSummary = ({ notice }) => {
    console.log(notice)
    return (
        <div className="card ">
            <div className="bg-image">
                <img src="https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-fresh-natural-product-poster-background-image_146684.jpg" />
            </div>

            <div className="card-content grey-text text-darken-3">
                <span className="card-title"><h3>{notice.title}</h3></span>
                <span className="card-title"><h5>{notice.content}</h5></span>
                <p> <span className="card-title"><h6> {notice.authorFirstName} {notice.authorLastName}</h6></span></p>
                <p className="grey-text"><h6>{moment(notice.createdAt.toDate()).calendar()}</h6></p>





            </div>
        </div>
    )
}
export default NoticeSummary;