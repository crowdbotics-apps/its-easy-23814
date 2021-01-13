import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView1192555Reducer from '../features/CalendarView1192555/redux/reducers';
import SignIn23192553Reducer from '../features/SignIn23192553/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView1192555: CalendarView1192555Reducer,
SignIn23192553: SignIn23192553Reducer,

});