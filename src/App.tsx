import { Accueil } from './Accueil';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Conseils } from './Conseils';
import { Tutoriels } from './Tutoriels';

const navigation = [
  { name: 'Accueil', href: '/caro-crochet/' },
  { name: 'Tutoriels', href: '/caro-crochet/tutoriels' },
  { name: 'Conseils', href: '/caro-crochet/conseils' },
]

function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BrowserRouter>
        <nav className="bg-gray-800">
          <div className="flex items-center px-6 relative h-16 justify-between">

            {/* Logo et nom du site */}
            <div className="flex items-center">
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Logo du site, une pelote de laine orange avec un C et un crochet blancs" width="50" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white ml-3">Caro Crochet</span>
            </div>

            {/* Contenu du menu ordinateur */}
            <div className="hidden sm:ml-6 sm:block space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Icône burger pour mobile */}
            <div className="absolute inset-y-0 right-3 flex items-center sm:hidden">
              <button className="rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white" onClick={() => setOpen((prev) => !prev)}>
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Contenu du menu mobile */}
          {open && (
            <div className="sm:hidden space-y-1 px-2 pt-2 pb-3" onMouseLeave={() => setOpen(false)}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700">
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

      <footer className="bg-gray-900 text-white relative overflow-hidden z-0">
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