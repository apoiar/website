"use client";

import { useState, useEffect } from "react";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem("cookie_consent");
        if (!hasConsented) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        setIsExiting(true);
        setTimeout(() => {
            localStorage.setItem("cookie_consent", "true");
            setIsVisible(false);
        }, 500); // 500ms allows the CSS transition to play
    };

    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 transition-all duration-500 ease-in-out ${isExiting ? 'opacity-0 translate-y-full' : 'fade-in-up'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-stone-800 relative">
                    <div className="flex-1 pr-8">
                        <h3 className="font-bold text-lg mb-2 text-lime-600">Usamos cookies 🍪</h3>
                        <p className="text-stone-600 text-sm leading-relaxed">
                            Utilizamos cookies para personalizar conteúdos e melhorar a sua experiência no nosso site. Ao continuar navegando, você concorda com a nossa{" "}
                            <a href="/politica-de-privacidade" className="text-lime-600 hover:text-lime-700 underline font-medium transition-colors">Política de Privacidade</a> e{" "}
                            <a href="/termos-de-uso" className="text-lime-600 hover:text-lime-700 underline font-medium transition-colors">Termos de Uso</a>.
                        </p>
                    </div>

                    <div className="flex-shrink-0 w-full sm:w-auto">
                        <button
                            onClick={acceptCookies}
                            className="w-full sm:w-auto px-8 py-3 bg-lime-600 hover:bg-lime-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-lime-600/25 active:scale-95"
                        >
                            Aceitar e Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
