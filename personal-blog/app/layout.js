import { Inter } from 'next/font/google';
import './globals.css';
import Nav from './components/navbar/Nav';
import ToastProvider from './ToastProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Personal Blog',
  description: 'created by Titan Ramadhan',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider>
          <div className="flex flex-col h-screen max-h-screen">
            <Nav />
            <div className="flex-grow overflow-y-auto bg-page text-default-text">
              <main className="mx-7">{children}</main>
            </div>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
