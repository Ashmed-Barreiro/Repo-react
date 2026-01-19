// AudioPlayer: demonstrates <audio> with multiple formats for compatibility.
// Files live in /public/media: demo.mp3 + demo.ogg

export default function AudioPlayer() {
  return (
    <section aria-labelledby="audio-title" className="space-y-4">
      <h3 id="audio-title" className="font-bold text-lg">
        Àudio (MP3 + OGG)
      </h3>

      <audio controls>
        <source src="/media/demo.ogg" type="audio/ogg" />
        <source src="/media/demo.mp3" type="audio/mpeg" />
        El teu navegador no suporta àudio.
      </audio>

      <p className="text-xs text-textBlack/70">
        Bons hàbits: 2 formats + controls + text fallback.
      </p>
    </section>
  )
}
