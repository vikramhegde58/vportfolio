import { ThemeProvider } from './components/theme-provider';
import GothamBook from './assets/fonts/gotham-book.woff2';
import GothamMedium from './assets/fonts/gotham-medium.woff2';
import { VisuallyHidden } from './components/visually-hidden';
import { Navbar } from './layouts/navbar';
import { Progress } from './components/progress';
import styles from './root.module.css';
import './reset.module.css';
import './global.module.css';
import { Cursor } from './components/cursor/cursor';
import { useState } from 'react';
import { Home } from './routes/home/home';
import { Contact } from './routes/contact/contact';
import { Routes, Route, ScrollRestoration, useNavigation } from 'react-router-dom';

export const links = () => [
  {
    rel: 'preload',
    href: GothamMedium,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  {
    rel: 'preload',
    href: GothamBook,
    as: 'font',
    type: 'font/woff2',
    crossOrigin: '',
  },
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'icon', href: '/favicon.ico' },
  { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
  { rel: 'shortcut_icon', href: '/shortcut.png', type: 'image/png', sizes: '64x64' },
  { rel: 'apple-touch-icon', href: '/icon-256.png', sizes: '256x256' },
  { rel: 'author', href: '/humans.txt', type: 'text/plain' },
];

export default function App() {
  const { state } = useNavigation();
  const [theme, setTheme] = useState('dark');

  function toggleTheme(newTheme) {
    const toggledTheme = newTheme ? newTheme : theme === 'dark' ? 'light' : 'dark';
    setTheme(toggledTheme);
  }

  return (
   <div className='body' data-theme={theme}>
        <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
          <Progress />
          <Cursor />
          <VisuallyHidden showOnFocus as="a" className={styles.skip} href="#main-content">
            Skip to main content
          </VisuallyHidden>
          <Navbar />
          <main
            id="main-content"
            className={styles.container}
            tabIndex={-1}
            data-loading={state === 'loading'}
          >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              </Routes>
          </main>
        </ThemeProvider>
        <ScrollRestoration />
    </div>
  );
}
