import { Accueil } from './Accueil';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Conseils } from './Conseils';
import { Tutoriels } from './Tutoriels';
import ThemeContext from './ThemeContext';

const navigation = [
  { name: 'Accueil', href: '/caro-crochet/' },
  { name: 'Tutoriels', href: '/caro-crochet/tutoriels' },
  { name: 'Conseils', href: '/caro-crochet/conseils' },
]

function getInitialTheme() {
  if (typeof window !== "undefined") {
    if (localStorage.theme === "dark") return "dark";
    if (localStorage.theme === "light") return "light";
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  }
  return "light";
}

function App() {
  const [open, setOpen] = useState(false);
  const [themeClass, setThemeClass] = useState(getInitialTheme());
  const isDarkMode = themeClass === "dark";

  useEffect(() => {
    if (themeClass === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [themeClass]);

  const onHandleClick = () => {
    setThemeClass(isDarkMode ? "light" : "dark");
  };

  return (
    <>
      <BrowserRouter>
        <nav className="bg-pink-300 dark:bg-red-900 px-6">
          <div className="flex items-center relative h-16 justify-between">

            {/* Logo et nom du site */}
            <div className="flex items-center">
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo du site, une pelote de laine orange avec un C et un crochet blancs" width="50" />
              <span className="text-2xl font-bold text-black dark:text-white ml-3">Caro Crochet</span>
            </div>

            <div className="flex items-center space-x-4">

              {/* Icône light/dark mode */}
              <ThemeContext.Provider value={{ themeClass, setThemeClass }}>
                <button className={themeClass} onClick={onHandleClick}>
                    <svg fill={isDarkMode ? "#fff" : "#000"} viewBox="0 0 32 32" transform="rotate(-45)" strokeLinecap="round" strokeLinejoin="round" width={32} height={32} className="p-1 rounded-full fill-black hover:fill-white hover:bg-pink-500 dark:hover:bg-red-700 dark:fill-white dark:hover:fill-black">
                      <path d="M30.994 13.84l-6.241-2.361 1.076-6.586-6.299 2.203-3.409-5.736-3.409 5.736-6.299-2.203 1.076 6.586-6.241 2.361 5.057 4.354-3.263 5.821 6.672 0.084 1.242 6.556 5.166-4.224 5.166 4.224 1.242-6.556 6.672-0.084-3.263-5.821 5.057-4.354zM16.472 25.494c-4.977 0-9.012-4.035-9.012-9.012s4.035-9.012 9.012-9.012c2.328 0 4.45 0.883 6.049 2.332-0.55-0.214-1.132-0.364-1.736-0.425-0.239-0.024-0.486 0-0.731 0-3.929 0-7.099 3.17-7.099 7.099s3.17 7.099 7.099 7.099c0.9 0 1.76-0.179 2.551-0.492-1.609 1.495-3.764 2.41-6.133 2.41z" />
                    </svg>
                </button>
              </ThemeContext.Provider>

              {/* Contenu du menu ordinateur */}
              <div className="hidden sm:flex">
                {navigation.map((item) => (
                  <Link key={item.name} to={item.href} className="rounded-md px-3 py-2 dark:text-white hover:bg-pink-500 dark:hover:bg-red-700">
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Icône burger pour mobile */}
              <div className="flex items-center sm:hidden">
                <button className="rounded-md p-2 text-gray-400 dark:hover:bg-red-700 hover:bg-pink-500 hover:text-white" onClick={() => setOpen((prev) => !prev)}>
                  <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke={isDarkMode ? "#fff" : "#000"} strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Contenu du menu mobile */}
          {open && (
            <div className="fixed w-full bg-gray-800 z-50 sm:hidden space-y-1 p-2" onMouseLeave={() => setOpen(false)}>
              {navigation.map((item) => (
                <Link key={item.name} to={item.href} className="block rounded-md p-2 text-gray-300 hover:text-white hover:bg-gray-700" onClick={() => setOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </nav>

        {/* Contenu des pages */}
        <main>
          <Routes>
            <Route path="/caro-crochet/" element={<Accueil />} />
            <Route path="/caro-crochet/conseils" element={<Conseils />} />
            <Route path="/caro-crochet/tutoriels" element={<Tutoriels />} />
          </Routes>
        </main>
      </BrowserRouter>

      <footer className="bg-gray-900 text-white relative overflow-hidden">
        <div className="relative mx-auto p-5 flex space-x-10 flex-col md:flex-row justify-evenly items-center">
          {/* Texte explicatif */}
          <p className="text-gray-300 my-3 md:max-w-md text-center leading-relaxed">
            <b>Pour les débutants comme pour les plus talentueux</b><br />
            J'ai commencé le crochet en autodidacte il y a quelque temps maintenant et j'adore créer mes propres modèles. C'est pour cela que j'ai pensé à créer ce site, où je publie mes modèles !
          </p>

          {/* Logos */}
          <div className="flex space-x-4 justify-center items-center">
            <a href="https://github.com/CarolinePromis" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg group">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
              </svg>
            </a>

            <a href="https://www.linkedin.com/in/caroline-promis" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg group">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a href="https://ko-fi.com/" target="_blank" rel="noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg group">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;