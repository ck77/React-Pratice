import AuthStore from './AuthStore';
import UserStore from './UserStore';

class RootStore {

    public authStore: AuthStore;
    public userStore: UserStore;

    constructor() {
        this.authStore = new AuthStore();
        this.userStore = new UserStore(this);
    }
}

export default RootStore;