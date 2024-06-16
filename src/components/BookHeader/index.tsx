'use client'
import { useAppDispatch } from '@/redux/hooks';
import Button from '../Button';
import styles from './header.module.scss';
import { listSlice } from '@/redux/listSlice';

const BookHeader = () => {
    const dispatch = useAppDispatch();
    const showPopup = () => {
        dispatch(listSlice.actions.showPopup(true))
    }
    return (
        <div className={styles.main}>
            Book-Store List Review
            <div className={styles.btnWrapper}>
                <Button text="Add Book" onBtnClick={showPopup} />
            </div>
        </div>
    )
}

export default BookHeader