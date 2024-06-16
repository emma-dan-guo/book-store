import { BookCard, generateBookInfo, initialBookList } from '@/assets/const';
import { createAppSlice } from './createAppSlice';

type InitialState = {
  bookList: BookCard[];
  modifyBookInfo?: BookCard;
  bookAddPopupVisible: boolean;
}

const initialState: InitialState =  {
  bookList: initialBookList,
  bookAddPopupVisible: false,
  modifyBookInfo: undefined
};

export const listSlice = createAppSlice({
  name: 'list',
  initialState,
  reducers: {
    deleteBook: (state, action) => {
        state.bookList = state.bookList.filter(i => i.id !== action.payload)
    },
    addBook: (state, action) => {
      if (state.modifyBookInfo === undefined) {
        state.bookList = [generateBookInfo(action.payload), ...state.bookList]
      } else {
        state.bookList = state.bookList.map(i => {
          if (i.id === action.payload.id) {
            return action.payload;
          }
          return i;
        })
      }
    },
    addModifyBookInfo: (state, action) => {
      state.modifyBookInfo = action.payload
    },
    showPopup: (state, action) => {
      state.bookAddPopupVisible = action.payload
    }
  },
  selectors: {
    bookList: (state) => state.bookList,
    modifyBookInfo: (state) => state.modifyBookInfo,
    bookAddPopupVisible: (state) => state.bookAddPopupVisible,
  },
});