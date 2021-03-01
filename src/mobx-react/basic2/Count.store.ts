import { observable, action, computed, autorun, reaction } from "mobx";

class CountStore {
    @observable count: number = 0;

    constructor() {
        autorun(() => {
            console.log(this.count);
        })

        autorun(() => {
            console.log(this.IsMoreThen50 ? 'true' : 'false')
        })

        reaction(
            () => this.IsMoreThen50,
            moreThen50 => {
                if (moreThen50) {
                    console.log('moreThen50')
                } else {
                    console.log('lessThen50')
                }
            }
        )
    }

    @action.bound increment = () => {
        this.count += 10;
    }

    @action.bound decrease = () => {
        this.count -= 10;
    }

    @computed get IsMoreThen50(): boolean {
        return this.count >= 50
    }
}

export default CountStore;