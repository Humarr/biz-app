
'use client'

export default function FloatingScrollButton() {
    return (
        <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 bg-orange-600 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all animate-pulse"
        >
            ⬇️
        </button>
    );
}