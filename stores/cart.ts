import { makeAutoObservable, observable, action } from 'mobx'

export default class CartStore {
    constructor() {
        makeAutoObservable(this, {
            items: observable,
            add: action,
            remove: action
        })
    }

    @observable items: Array<{id: number, price: number}> = [];

    @action
    add(product: any) {
        if (!this.items.find(i => i.id == product.id))
            this.items.push(product)
    }

    remove(id: number) {
        this.items = this.items.filter(i => i.id != id)
    }
}