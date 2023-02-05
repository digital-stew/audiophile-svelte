import data from '../../../../data.json'
export async function load({ params }: { params: { slug: string } }) {
    const res = await data.find(product => product.slug === params.slug)
    return { res }
}
