import './globals.scss';
import './variables.scss';
import { League_Spartan, Libre_Baskerville } from "next/font/google";
import Navbar from './components/layout/navbar/navbar';
import Footer from './components/layout/footer/footer';

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
    image: '/myLogo.png',
    site_name: "Kutman",
  }
};

const spartan = League_Spartan({
  weight: ["700"],
  subsets: ["latin"],
  variable: '--font-spartan'
});

export const baskerville = Libre_Baskerville({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic", "normal"],
  variable: '--font-baskerville'
})

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${spartan.variable} ${baskerville.variable}`}>
        <div id='portal'> </div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;