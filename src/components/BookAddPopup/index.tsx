'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import styles from './popup.module.scss';
import { listSlice } from '@/redux/listSlice';
import Image from 'next/image'
import { ChangeEventHandler, useEffect, useState } from 'react';
import { BookCard } from '@/assets/const';
import Button from '../Button';

const InputWrapper = (props: {
    text: string;
    inputType?: 'text' | 'number';
    placeholder?: string;
    inputValue?: string | number;
    onChange?: (args: string | number) => void;
}) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        props.onChange?.(e.target?.value)
    }
    return (
        <div className={styles.inputWrapper}>
            <div className={styles.title}>{props.text}:</div>
            <input value={props.inputValue} className={styles.input} placeholder={props.placeholder} onChange={handleChange} type={props.inputType ?? 'text'}></input>
        </div>
    )
} 

const BookAddPopup = () => {
    const dispatch = useAppDispatch();
    const bookAddPopupVisible  = useAppSelector(listSlice.selectors.bookAddPopupVisible);
    const modifyBookInfo = useAppSelector(listSlice.selectors.modifyBookInfo);
    const [form, setFormInfo] = useState<Partial<BookCard> | undefined>({
        name: '',
        price: 0,
        category: '',
        description: '',
    });

    useEffect(() => {
        if (modifyBookInfo !== undefined) {
            setFormInfo(modifyBookInfo);
        }
    }, [modifyBookInfo])

    const handleClose = () => {
        dispatch(listSlice.actions.addModifyBookInfo(undefined))
        setFormInfo(undefined);
        dispatch(listSlice.actions.showPopup(false));
    }
    const handleFormChange = (type: keyof BookCard, value: any) => {
        const finalForm = {...(form ?? {}), [type]: value};
        setFormInfo(finalForm);
    }

    const handleConfirm = () => {
        console.log('===form', form)
        if (Object.values(form ?? {}).every(i => !!i)) {
            dispatch(listSlice.actions.addBook(form));
            handleClose();
            alert('success!');
        } else {
            const blankTypes: any = Object.keys(form ?? {}).find(i => !(form as any)[i]);
            alert(`please input ${blankTypes}`);
        }
       
    }
    if (bookAddPopupVisible) {
        return (
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.contentTitle}>Add the book information which you want to add </div>
                    <InputWrapper inputValue={form?.name ?? ''} text="Name" onChange={(value) => handleFormChange('name', value)}/>
                    <InputWrapper inputValue={form?.category ?? ''} text="category" onChange={(value) => handleFormChange('category', value)}/>
                    <InputWrapper inputValue={form?.description ?? ''} text="description" onChange={(value) => handleFormChange('description', value)}/>
                    <InputWrapper inputValue={form?.price ?? 0} text="price(unit:cent)" onChange={(value) => handleFormChange('price', value)} inputType='number'/>
                    <Button text="Confirm" onBtnClick={handleConfirm}></Button>
                </div>
                <Image alt="close icon" className={styles.close} onClick={handleClose} src="https://pic.616pic.com/ys_img/00/07/40/38f9rlKgVC.jpg" width={20} height={20}/>
            </div>
        )
    }
    return null
}

export default BookAddPopup;