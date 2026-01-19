import { useEffect, useState } from 'react'

// Component: loads recipes from /public/receptes.json
// - useEffect runs on mount
// - fetch reads the JSON
// - we show loading / error / success UI
export default function LlistatReceptes() {
  const [receptes, setReceptes] = useState([])
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadReceptes() {
      try {
        setStatus('loading')
        setError('')

        // In Vite: anything inside /public is served from the root ("/")
        const res = await fetch('/receptes.json', { signal: controller.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const json = await res.json()
        setReceptes(Array.isArray(json.receptes) ? json.receptes : [])
        setStatus('success')
      } catch (e) {
        if (e?.name === 'AbortError') return
        setError(e?.message || 'Error carregant dades')
        setStatus('error')
      }
    }

    loadReceptes()

    // Cleanup: if the component unmounts, abort the fetch
    return () => controller.abort()
  }, [])

  return (
    <section aria-labelledby="titol-receptes" className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <h2 id="titol-receptes" className="text-xl font-bold">
          Receptes saludables
        </h2>
        <p className="text-sm text-textBlack/70">Dades carregades amb fetch</p>
      </div>

      {status === 'loading' && (
        <p className="text-sm">Carregant receptes...</p>
      )}

      {status === 'error' && (
        <div className="bg-white border rounded-xl p-4">
          <p className="text-sm text-red-600">Error: {error}</p>
          <p className="text-xs text-textBlack/70 mt-1">
            Comprova que existeix <span className="font-semibold">public/receptes.json</span>
          </p>
        </div>
      )}

      {status === 'success' && (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {receptes.map((r) => (
            <article
              key={r.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border"
            >
              <img
                src={r.imatge}
                alt={r.nom}
                loading="lazy"
                decoding="async"
                width="800"
                height="480"
                className="w-full h-44 object-cover"
              />

              <div className="p-5">
                <h3 className="font-bold text-lg">{r.nom}</h3>
                <p className="text-sm mt-2 text-textBlack/80">{r.descripcio}</p>

                <button
                  type="button"
                  className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primaryGreen text-white text-sm font-semibold hover:opacity-90"
                >
                  Veure recepta
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
