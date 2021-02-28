import { observable, action } from "mobx";

class UserStore {
    @observable user: string = 'papago'

    @action.bound changeName = () => {
        this.user = 'ziggurat'
    }
}

export default UserStore;