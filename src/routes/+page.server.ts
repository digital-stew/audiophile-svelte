/** @type {import('./$types').PageServerLoad} */
import data from '../../data.json'

export async function load() {
    return { ...data }
}