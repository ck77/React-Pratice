import React, { createContext, FC, ReactNode, ReactElement } from 'react';

import RootStore from './store/RootStore';

const StoreContext = createContext<RootStore>({} as RootStore);

type StoreComponent = FC<{
    store: RootStore;
    children: ReactNode;
}>

const StoreProvider: StoreComponent = ({ store, children }): ReactElement => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}

export { StoreContext, StoreProvider, StoreComponent }