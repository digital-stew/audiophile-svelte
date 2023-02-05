import type ApiResponse from '$types/ApiResponse';
import DATA from '../.././../../data.json'
import { error, json } from '@sveltejs/kit';
interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    eMoneyNumber: string;
    eMoneyPin: string;
    list: string
}
interface Item {
    id: number;
    amount: number;
}

export async function POST({ cookies, request }: { cookies: any; request: Request }) {
    const formData: FormData = await request.json()
    const itemList: Item[] = JSON.parse(formData.list)

    //validate info
    if (itemList.length < 1) throw error(500, { message: 'ERROR! nothing in shopping cart' })


    //get price of cart - don't trust the user
    let totalPrice = 0
    itemList.forEach(item => {
        const itemFromDB = DATA.find(DBitem => DBitem.id === item.id)
        if (itemFromDB) totalPrice += itemFromDB.price * item.amount
    })

    //add shipping
    totalPrice += 50

    //construct response
    const res: ApiResponse = { complete: true, price: totalPrice }

    //respond
    return new Response(JSON.stringify(res));

}