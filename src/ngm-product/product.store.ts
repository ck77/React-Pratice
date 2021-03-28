import { observable, action, computed, autorun, reaction } from "mobx";


interface ItemDetail {
    description: string;
    isFlower: boolean;
}

class ProductStore {
    @observable itemDetail: ItemDetail = {
        description: 'notebook',
        isFlower: true,
    }

    @action ChangeDescription(desc: string) {
        this.itemDetail.description = desc;
    }

    // flowerStore: flowerStore = new flowerStore(this);

    @observable flowerModalVisible: boolean = false;
    @observable flowerGiftMessge: string = '';

    @action changeFlowerGiftMessge(message: string) {
        this.flowerGiftMessge = message;
    }
}

class flowerStore {

    productStore: ProductStore;

    constructor(store: ProductStore) {
        this.productStore = store;
    }

    @observable giftMessage: string = '';
}

export { ProductStore, ItemDetail }