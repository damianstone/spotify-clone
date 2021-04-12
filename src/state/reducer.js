export const initialState = {
    user: null, 
    playlists: [],
    playing: false, 
    item: null,
    //REMOVE THE TOKEN AFTER DEVELOPING
    //token: 'BQC2YeIwk-nj74U0sxhqGOQaguPbHT0nkij2gwhB_AfEq5etIOVosqW324yXZhXpvoR5Mq9IayD7Fsq3ryLeblWgmRJle9kyZTuyUXKrFaHq2pErIq3xb-U7Rlef0m41RHmTL3mpMvBEn7iXTa3LoeEP67r66C-TNg'
}; 

const reducer = (state, action) => {

    // Action -> type, [payload]
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state, 
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    };

};

export default reducer;