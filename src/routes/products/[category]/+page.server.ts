
/** @type {import('./$types').PageServerLoad} */

import data from '../../../../data.json'
import { page } from '$app/stores';
console.log(page)
export async function load({ params }: { params: { category: string } }) {
    const array = data.filter(product => product.category === params.category).reverse()

    return { data: array }
}