// VideoPlayer: demonstrates <video> with MP4 + WebM, poster, preload, and captions.
// Files live in /public/media: demo.mp4, demo.webm, poster.webp, subs.vtt

export default function VideoPlayer() {
  return (
    <section aria-labelledby="video-title" className="space-y-4">
      <h3 id="video-title" className="font-bold text-lg">
        Vídeo (MP4 + WebM) + poster + subtítols
      </h3>

      <video
        controls
        preload="metadata"
        poster="/media/poster.webp"
        width="960"
        height="540"
        className="w-full max-w-3xl rounded-xl border bg-white"
      >
        <source src="/media/demo.webm" type="video/webm" />
        <source src="/media/demo.mp4" type="video/mp4" />
        <track kind="captions" src="/media/subs.vtt" srcLang="ca" label="Català" default />
        El teu navegador no suporta vídeo.
      </video>

      <p className="text-xs text-textBlack/70">
        Bons hàbits: preload metadata + poster + 2 formats + subtítols.
      </p>
    </section>
  )
}
