import { MouseEventHandler, ReactNode } from 'react';
import styles from './btn.module.scss';

const Button = (props: {
    text: string | ReactNode;
    onBtnClick?: (...args: any) => void;
}) => {
    const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
        props.onBtnClick?.();
    }
    return (
        <div className={styles.button} onClick={handleClick}>{props.text}</div>
    )
}

export default Button;