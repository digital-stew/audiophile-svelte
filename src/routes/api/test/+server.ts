import { error, json } from '@sveltejs/kit';
import data from '../../../../data.json'
/** @type {import('./$types').RequestHandler} */
export function GET() {


    return new Response(String(JSON.stringify(data)));
}