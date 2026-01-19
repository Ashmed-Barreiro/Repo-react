export default function Footer() {
  return (
    <div className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-6 flex items-center justify-between">
        <p className="text-sm">© {new Date().getFullYear()} HealthyBites</p>

        <div className="flex gap-4 text-sm">
          <a className="hover:text-primaryGreen" href="#" aria-label="Instagram">
            Instagram
          </a>
          <a className="hover:text-primaryGreen" href="#" aria-label="Twitter / X">
            X
          </a>
          <a className="hover:text-primaryGreen" href="#" aria-label="YouTube">
            YouTube
          </a>
        </div>
      </div>
    </div>
  )
}
