import React, { useState } from 'react';

interface ItemDetail {
    description?: string;
}

interface IProductContext {
    itemDetail: ItemDetail;
    actions: any;
}

const ProductContext = React.createContext<IProductContext>({
    itemDetail: {},
    actions: {}
});

const ProductProvider = ({ children, itemDetail }: any) => {

    const context: IProductContext = {
        itemDetail: itemDetail,
        actions: {}
    }

    return (
        <ProductContext.Provider value={context} >
            {children}
        </ProductContext.Provider>
    )
}


const App = () => {

    const [itemDetail, setItemDetail] = useState<ItemDetail>({
        description: 'notebook'
    });

    return (
        <ProductProvider itemDetail={itemDetail} >
            <Product />
        </ProductProvider>
    )
}

export default App;

const Product = () => {

    const { itemDetail, actions } = React.useContext(ProductContext);

    return (
        <div>
            {itemDetail.description}
        </div>
    )
}
