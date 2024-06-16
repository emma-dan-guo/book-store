'use client'
import { useAppDispatch, useAppSelector, useAppStore } from "@/redux/hooks";
import { listSlice } from "@/redux/listSlice";
import { type BookCard, initialBookList } from "@/assets/const";
import styles from './book.module.scss';
import Image from 'next/image';
import Button from "../Button";
import { useRouter } from "next/router";


type BookItemProps = {
  onDelete: (id: string) => void; 
  onBookClick: (item: BookCard) => void;
} & BookCard

const BookItem = (props: BookItemProps) => {
    return (
        <div className={styles.bookCard} onClick={() => props.onBookClick(props)}>
            <Image src={props.coverUrl} alt="book Cover" width={211} height={320}/>
            <div className={styles.bookName}>{props.name}</div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.author}>{props.author}</div>
            <div className={styles.category}>Category: {props.category}</div>
            <div className={styles.price}>${(props.price / 100).toFixed(2)}</div>
            <Button text="Delete The Book" onBtnClick={() => props.onDelete(props.id)} />
        </div>
    )
}

export default function BookList() {
  const dispatch = useAppDispatch();
  const list = useAppSelector(listSlice.selectors.bookList);

  const deleteBook = (id: string) => {
    dispatch(listSlice.actions.deleteBook(id))
  }

  const modifyBookDetail = (item: BookCard) => {
    dispatch(listSlice.actions.addModifyBookInfo(item));
    dispatch(listSlice.actions.showPopup(true));
  }
  return (
    <div className={styles.main}>
        {
            list.map(i => <BookItem key={i.id} {...i} onDelete={deleteBook} onBookClick={modifyBookDetail}></BookItem>)
        }
    </div>
  );
}
