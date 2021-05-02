import React, { useReducer, createContext } from 'react';
import { initialState } from './store';
import { reducer } from './reducer';


const Store = createContext();


function Redux(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    );
}

export { Redux, Store };
