import type { ParentComponent } from 'solid-js';
import { GlobalContext }  from './GlobalContext';

const GlobalProvider: ParentComponent = (props) => {
    return (
        <GlobalContext.Provider value="Hola">
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;
