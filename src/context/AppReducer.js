export default function addReducer(state, action){
    switch (action.type){
        case 'CHANGE_TRUE':
            return  {
                darkTheme:action.payload,
                checkedThemecount:state.checkedThemecount+1,
                leng: state.leng,
                checkedLengcount:state.checkedLengcount
            }
        case 'CHANGE_LENG':
            return  {
                darkTheme:state.darkTheme,
                checkedThemecount:state.checkedThemecount,
                leng: action.payload,
                checkedLengcount:state.checkedLengcount+1
            }
        default:
            break;
    }
}