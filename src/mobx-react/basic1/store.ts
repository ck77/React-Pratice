import { observable, computed, action } from 'mobx';

class BaseStore {

    @observable count: number = 0;

    @action.bound
    add = () => {
        this.count++;
    }

}

export default BaseStore;