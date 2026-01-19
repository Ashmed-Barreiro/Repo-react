import LlistatReceptes from '../components/LlistatReceptes.jsx'

export default function Receptes() {
  return (
    <section aria-labelledby="receptes-page-title" className="space-y-6">
      <h2 id="receptes-page-title" className="text-xl font-bold">
        Receptes
      </h2>

      <LlistatReceptes />
    </section>
  )
}
