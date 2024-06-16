import "./globals.css";
import { StoreProvider } from "./StoreProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body >{children}</body>
      </html>
    </StoreProvider>
  );
}
