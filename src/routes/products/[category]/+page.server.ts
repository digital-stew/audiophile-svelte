

import data from '../../../../data.json'
export async function load({ params }: { params: { category: string } }) {
    const array = await data.filter(product => product.category === params.category).reverse()
    return { res: array }
}
