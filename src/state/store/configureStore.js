import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'
const initialState = { newsFeed: [], countryCode: 'se' }

// const configureStore = () => {
//   return createStore(rootReducer, initialState, applyMiddleware(thunk))
// }

// export default configureStore

const store = createStore(rootReducer, initialState)

export default store