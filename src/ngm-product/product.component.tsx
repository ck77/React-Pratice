import React from "react";
import { inject, observer } from "mobx-react";
import { ProductStore } from './product.store';
import { IAppStore } from './app.store';

interface IProps {
    store: ProductStore
}

@inject((appStore: IAppStore) => ({ store: appStore.productStore }))
@observer
class Product extends React.Component<IProps> {
    static defaultProps = { store: {} }

    handleChangeDescription = (e: any) => {
        this.props.store.ChangeDescription(e.target.value);
    }

    handleChangeFlowerGiftMessge = (e: any) => {
        this.props.store.changeFlowerGiftMessge(e.target.value);
    }

    render() {
        const { store } = this.props;




        return (
            <React.Fragment>
                <p>{store.itemDetail.description}</p>
                <input type='text' value={store.itemDetail.description} onChange={this.handleChangeDescription} />
                <hr></hr>
                <input type='text' value={store.flowerGiftMessge} onChange={this.handleChangeFlowerGiftMessge} />

                <Flower isFlower={store.itemDetail.isFlower} />
            </React.Fragment>
        )
    }

}

export default Product;

const Flower = ({ isFlower }: { isFlower: boolean }) => {

    if (isFlower) {

        console.log('ssssss')
        return (
            <div>Flower</div>
        )
    }

    return null;
}