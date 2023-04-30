import './globals.scss'
import { League_Spartan } from '@next/font/google';
import Navbar from './components/navbar/navbar';

export const metadata = {
  title: 'Kutman Eshenkulov',
  description: 'Personal website developed by Kutman Eshenkulov',
  keywords: ['Kutman', 'KUTMAN', "Kutman Eshenkulov", "Кутман Эшенкулов"],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'auto',
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  og: {
    title: "Kutman Eshenkulov",
    description: "Personal website developed by Kutman Eshenkulov",
    type: 'website',
    url: 'https://kutman.lol',
    image: 'https://user-images.githubusercontent.com/73386100/231491201-77f9d1d4-ead5-434f-9959-bb07b9bf0369.png',
    site_name: "Kutman",
  }
};

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