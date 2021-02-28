import { observable, action, computed } from 'mobx';
import RootStore from './RootStore';

interface IUserStore {
    id: string;
    name: string;
}

class UserStore implements IUserStore {

    private rootStore: RootStore

    @observable id = 'aaa';

    @observable name = 'papago';

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action.bound getName = (name: string) => {
        if (this.rootStore.authStore.id) {
            this.name = name;
        }
    }
}

export default UserStore;
