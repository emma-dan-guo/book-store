
const categoryList = ['History', 'Science', 'Novel', 'Arts', 'Law', 'Business']

const randomCoverUrls = [
    'https://m.media-amazon.com/images/I/81X7rAcaQkL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/91foIfs9XeL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/71VprhrGkJL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/91eaYIRwX0L._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/91b7tm523VL._AC_UL320_.jpg',
    'https://m.media-amazon.com/images/I/819bAKQjTfL._SY342_.jpg',
]

export type BookCard = {
    id: string;
    name: string;
    category: string;
    price: number;
    coverUrl: string;
    description: string;
    author: string;
}

let index = 0;
export const generateBookInfo = (info?: Partial<BookCard>) => {
    const random = Math.ceil(Math.random() * (categoryList.length - 1));
    index++;
    return {
        id: `book-${index}`,
        name: `Book Name-${index}`,
        /** unit: cent */
        price: Number((Math.random() * 10000).toFixed(0)),
        category: categoryList[random],
        description: 'Description: Xxxxxxxxxxxxxx',
        coverUrl: randomCoverUrls[random],
        author: 'Author',
        ...(info ?? {}),
    }
}


export const initialBookList = new Array(100).fill('').map((_) => {
    return generateBookInfo();
});
