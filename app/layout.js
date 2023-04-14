import './globals.scss'
import { League_Spartan } from 'next/font/google';
import Navbar from './components/navbar/navbar';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const spartan = League_Spartan({
  weight: ["700"],
  subsets: ["latin"],
  variable: '--font-spartan'
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={spartan.variable}>
        <Navbar />
        {children}

      </body>
    </html>
  )
}

export default RootLayout;