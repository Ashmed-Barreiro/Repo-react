// Gallery: demonstrates optimized images using <picture> + AVIF/WebP fallback.
// Images are inside /public/media with names img1/img2/img3.
// Good practices: alt + lazy loading + modern formats.

const items = [
  { id: 1, alt: 'Imatge de mostra 1', base: '/media/img1' },
  { id: 2, alt: 'Imatge de mostra 2', base: '/media/img3' },
  { id: 3, alt: 'Imatge de mostra 3', base: '/media/img2' },
  { id: 4, alt: 'aston', base: '/media/aston' },
  { id: 5, alt: 'tesla', base: '/media/tesla' },
]

export default function Gallery() {
  return (
    <section aria-labelledby="gallery-title" className="space-y-4">
      <h3 id="gallery-title" className="font-bold text-lg">
        Galeria d’imatges (AVIF/WebP)
      </h3>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {items.map((it) => (
          <picture key={it.id}>
            <source type="image/avif" srcSet={`${it.base}.avif`} />
            <source type="image/webp" srcSet={`${it.base}.webp`} />

            {/* <-!--
            <img srcset="imagen-pequena.jpg 480w,
             imagen-mediana.jpg 800w,
             imagen-grande.jpg 1200w"
              sizes="(max-width: 600px) 100vw,
            50vw"
              src="imagen-mediana.jpg" alt="Descripción de la imagen"></img> */}
            <img srcSet="/media/aston.jpg 300w, /media/aston_grande.jpg 500w" alt="">
            </img>
            <img
              src={`${it.base}.jpg`}
              alt={it.alt}
              loading="lazy"
              decoding="async"
              width="600"
              height="400"
              className="w-full h-40 object-cover rounded-xl border bg-white"
            />
          </picture>
        ))}
      </div>

      <p className="text-xs text-textBlack/70">
        Les imatges estan a <span className="font-semibold">public/media</span>.
      </p>
    </section>
  )
}
