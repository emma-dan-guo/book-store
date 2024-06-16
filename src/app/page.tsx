import BookList from "@/components/BookList";
import styles from "./page.module.css";
import BookHeader from "@/components/BookHeader";
import BookAddPopup from "@/components/BookAddPopup";

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.header}>Welcome to Book-Store!</div>
        <BookHeader />
        <BookList />
        <BookAddPopup />
    </main>
  );
}
