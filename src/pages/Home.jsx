import FocusDemo from '../components/FocusDemo.jsx'

export default function Home() {
  return (
    <section aria-labelledby="home-title" className="space-y-6">
      <h2 id="home-title" className="text-xl font-bold">
        Inici
      </h2>

      <div className="bg-white border rounded-xl p-5 space-y-3">
        <h3 className="font-bold text-lg">Repo base per examen (nivell bàsic)</h3>
        <p className="text-sm text-textBlack/80">
          Aquí tens exemples simples de Router, fetch de JSON, multimèdia, useRef i accessibilitat.
        </p>

        <ul className="list-disc pl-5 text-sm text-textBlack/80 space-y-1">
          <li><span className="font-semibold">/receptes</span>: carrega dades amb fetch (useEffect + useState)</li>
          <li><span className="font-semibold">/media</span>: imatges (AVIF/WebP), àudio (MP3/OGG) i vídeo (MP4/WebM)</li>
          <li><span className="font-semibold">useRef</span>: demo de focus a un input (a sota)</li>
          <li>Responsive: grid amb breakpoints (md, lg)</li>
        </ul>
      </div>

      <FocusDemo />
    </section>
  )
}
