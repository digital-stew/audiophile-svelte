
/** @type {import('./$types').PageServerLoad} */

import data from '../../../../data.json'
export async function load({ params }: { params: { slug: string } }) {
    const res = await data.find(product => product.slug === params.slug)
    // const array = await data.filter(product => product.category === params.category).reverse()

    return { res }
}
