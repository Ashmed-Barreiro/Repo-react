import Gallery from '../components/Gallery.jsx'
import AudioPlayer from '../components/AudioPlayer.jsx'
import VideoPlayer from '../components/VideoPlayer.jsx'

export default function Media() {
  return (
    <section aria-labelledby="media-page-title" className="space-y-10">
      <h2 id="media-page-title" className="text-xl font-bold">
        Multimèdia
      </h2>

      <Gallery />
      <AudioPlayer />
      <VideoPlayer />
    </section>
  )
}
