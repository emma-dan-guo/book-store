import { initialBookList } from '@/assets/const';
import { createAppSlice } from './createAppSlice';

export const detailSlice = createAppSlice({
    name: 'detail',
    initialState: {
        bookList: initialBookList,
    },
    reducers: {
        DELETE: (state, action) => {
            state.bookList = state.bookList.filter(i => i.id !== action.payload)
        }
    }
})
