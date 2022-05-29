import { createContext, useContext, useReducer } from "react";
import { initialState } from "./StoreReducer";
import ReducerStore from "./StoreReducer";





const StoreContext = createContext();

const StoreProvider = ({ children }) =>
        <StoreContext.Provider value={useReducer(ReducerStore, initialState)}>

        {children}

        </StoreContext.Provider>


const useStore = () => useContext(StoreContext)[0]
const useDispatch = () => useContext(StoreContext)[1]

export { StoreContext, useStore, useDispatch }
export default StoreProvider;