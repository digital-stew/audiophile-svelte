/** @type {import('./$types').PageServerLoad} */
import data from '../../data.json'
import jwt, { type VerifyOptions } from 'jsonwebtoken'
interface IUser {
    uuid: string;
    name: string;
}
console.log('page.server.ts')
export async function load({ cookies }) {
    let authCookie = cookies.get('auth')
    if (!authCookie) {
        const uuid = crypto.randomUUID()
        const user: IUser = { uuid, name: 'stewart', uuid2: crypto.randomUUID() }
        const token = jwt.sign(user, 'password')
        cookies.set('auth', token)
    }
    if (authCookie) {
        // console.log(authCookie)
        jwt.verify(authCookie, 'password', (err, decoded) => {
            // console.log(err)
            // console.log(decoded)
        })
    }
    return { ...data }
}