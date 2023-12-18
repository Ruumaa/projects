import { Inter } from 'next/font/google';
import './globals.css';
import ToastProvider from './ToastifyProvider';
import Nav from './components/Nav/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Gallery App',
  description: 'Created by Ruumaa',
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shorcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
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
