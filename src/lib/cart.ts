import { browser } from '$app/environment';
interface IItem {
    id: number;
    item: string;
    price: number;
    amount: number
}
export function addItem(id: number, item: string, price: number, amount: number) {
    let cart = getItems()
    cart.push({ id, item, price, amount })
    window.localStorage.setItem('audiophile-cart', JSON.stringify(cart))
}

export function getItems(): IItem[] {
    return JSON.parse(window.localStorage.getItem('audiophile-cart') || '[]');
}