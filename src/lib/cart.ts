import { browser } from '$app/environment';

interface IItem {
    id: number;
    item: string;
    price: number;
    amount: number;
    image: string;
}

export function decrementProductCount(id: number) {
    CartStore.update((current) => {
        return current.map((item) => {
            if (item.id === id) {
                if (item.amount === 1) {
                    removeItem(id)
                    return item;
                }
                return { ...item, amount: item.amount - 1 };
            } else {
                return item;
            }
        });
    });
}

export function incrementProductCount(id: number) {
    CartStore.update((current) => {
        return current.map((item) => {
            if (item.id === id) {
                return { ...item, amount: item.amount + 1 };
            } else {
                return item;
            }
        });
    });
}

export function addCartItem(input: IItem) {
    CartStore.update((old) => [...old, { ...input }]);
}

function removeItem(id: number) {
    CartStore.update((current) => current.filter(item => item.id === 2 ? item : {}))
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

let store
if (store === undefined) store = getItems()
const CartStore = writable(store)
CartStore.subscribe((data) => {
    if (browser) window.localStorage.setItem('audiophile-cart', JSON.stringify(data))
})
export default CartStore