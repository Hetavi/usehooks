const initState = {
    notices: [
        { id: '1', title: 'hetvi shah', content: 'i am good girl' },
        { id: '2', title: 'heli shah', content: 'i am good girl' },
        { id: '3', title: 'hothal shah', content: 'i am good girl' }
    ]
}
const noticeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_NOTICE':
            console.log('create notice', action.notice);
            return state
        case 'CREATE_NOTICE_ERROR':
            console.log('create noticce error', action.err)
            return state
        default:
            return state

    }

};
export default noticeReducer;  