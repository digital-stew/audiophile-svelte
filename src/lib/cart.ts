import { browser } from '$app/environment';
interface IItem {
    id: number;
    item: string;
    price: number;
    amount: number
}

export function addItem(id: number, item: string, price: number, amount: number) {
    // if (browser) {

    let cart = getItems()
    cart.push({ id, item, price, amount })
    window.localStorage.setItem('audiophile-cart', JSON.stringify(cart))
    // }
}

export function getItems(): IItem[] {
    if (browser) return JSON.parse(window.localStorage.getItem('audiophile-cart') || '[]');
    return []
}

export function removeAll() {
    window.localStorage.setItem('audiophile-cart', '[]')
    CartStore.set([])
}

import { writable } from 'svelte/store'

console.log('store')
let store
if (store === undefined) store = getItems()
const CartStore = writable(store)
CartStore.subscribe((data) => {
    if (browser) window.localStorage.setItem('audiophile-cart', JSON.stringify(data))
})
export default CartStore