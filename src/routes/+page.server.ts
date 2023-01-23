/** @type {import('./$types').PageServerLoad} */
import data from '../../data.json'
console.log('page.server.ts')
export async function load() {
    return { ...data }
}