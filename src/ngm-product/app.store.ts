import { ProductStore } from './product.store';

interface IAppStore {
    productStore: ProductStore;
}

const AppStore: IAppStore = {
    productStore: new ProductStore()
}

export { IAppStore, AppStore }