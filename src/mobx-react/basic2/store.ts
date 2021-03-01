import StyleStore from "./Style.store";
import UserStore from "./User.store";
import CountStore from './Count.store';

export interface IAppStore {
    StyleStore: StyleStore;
    UserStore: UserStore;
    CountStore: CountStore;
}

export const AppStore: IAppStore = {
    StyleStore: new StyleStore(),
    UserStore: new UserStore(),
    CountStore: new CountStore()
}