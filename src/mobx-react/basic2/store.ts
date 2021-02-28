import StyleStore from "./Style.store";
import UserStore from "./User.store";

export interface IAppStore {
    StyleStore: StyleStore;
    UserStore: UserStore;
}

export const AppStore: IAppStore = {
    StyleStore: new StyleStore(),
    UserStore: new UserStore()
}