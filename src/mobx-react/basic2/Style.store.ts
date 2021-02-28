import { observable, action } from "mobx";

class StyleStore {
    @observable color = "red";
    @observable size = 20;

    @action changeColor(color: string) {
        this.color = color;
    }
}

export default StyleStore;