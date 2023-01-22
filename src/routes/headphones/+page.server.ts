import type IData from '../../../types/Idata';
/** @type {import('./$types').PageServerLoad} */
import data from '../../../data.json'

export async function load() {
    const array = data.filter(product => product.category === 'headphones').reverse()
    return { data: array }
}