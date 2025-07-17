import { Link } from "react-router-dom";

export function Accueil() {
    return (
        <>
            {/* Présentation du site */}
            <div className="glass-card p-5 text-center">
                <h1>Caro Crochet</h1>
                <h3>Bienvenue sur mon blog !<br />Je poste ici tout ce que je fais en crochet, avec des conseils et des tutoriels, bonne lecture !</h3><br />
                <Link to="/caro-crochet/conseils" className="redirect-button">Conseils</Link>
            </div>
            <hr className="border-red-950" />
            {/* parallaxe avec des pelotes OU modèles 3D de pelotes qui tournent en fond, à voir */}

            {/* Dernières publications */}
            <div className="bg-teal-400 dark:bg-teal-600">
                <h2>Dernières publications</h2>
            </div>
            <hr className="border-red-950" />

            {/* Rubriques */}
            <div className="bg-purple-400 dark:bg-purple-600">
                <h2>Rubriques</h2>

                <div className="flex text-center flex-col sm:flex-row items-center">
                    <div className="relative w-1/2 bg-orange-300 p-6 m-5">
                        <h2 className="text-xl font-bold">Conseils</h2>
                        <p>Infos pratiques pour faire du crochet</p><br />
                        <Link to="/caro-crochet/conseils" className="redirect-button">Conseils</Link>

                        {/* Haut */}
                        <div className="absolute top-0 left-0 w-full h-4 wave-horizontal animate-wave-horizontal -translate-y-2"></div>

                        {/* Bas */}
                        <div className="absolute bottom-0 left-0 w-full h-4 wave-horizontal animate-wave-horizontal rotate-180 translate-y-2"></div>

                        {/* Gauche */}
                        <div className="absolute top-0 left-0 w-4 h-full wave-vertical animate-wave-vertical rotate-180 -translate-x-2"></div>

                        {/* Droite */}
                        <div className="absolute top-0 right-0 w-4 h-full wave-vertical animate-wave-vertical translate-x-2"></div>
                    </div>


                    <div className="relative w-1/2 bg-orange-300 p-6 m-5">
                        <h2 className="text-xl font-bold">Tutoriels</h2>
                        <p>Quelques modèles que j'ai créés</p><br />
                        <Link to="/caro-crochet/tutoriels" className="redirect-button">Tutoriels</Link>

                        {/* Haut */}
                        <div className="absolute top-0 left-0 w-full h-4 wave-horizontal animate-wave-horizontal -translate-y-2"></div>

                        {/* Bas */}
                        <div className="absolute bottom-0 left-0 w-full h-4 wave-horizontal animate-wave-horizontal rotate-180 translate-y-2"></div>

                        {/* Gauche */}
                        <div className="absolute top-0 left-0 w-4 h-full wave-vertical animate-wave-vertical rotate-180 -translate-x-2"></div>

                        {/* Droite */}
                        <div className="absolute top-0 right-0 w-4 h-full wave-vertical animate-wave-vertical translate-x-2"></div>
                    </div>
                </div>


            </div>
            <hr className="border-red-950" />
        </>
    );
}