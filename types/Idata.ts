export default interface IData {
    readonly id: number;
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
    cartImage: string;
    category: "earphones" | "headphones" | "speakers";
    categoryImage: { mobile: string; tablet: string; desktop: string };
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: { quantity: number; item: string }[];
    gallery: {
        first: { mobile: string; tablet: string; desktop: string },
        second: { mobile: string; tablet: string; desktop: string },
        third: { mobile: string; tablet: string; desktop: string }
    };
    others: IOthers[]
}
export interface IOthers {


    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string }


}
