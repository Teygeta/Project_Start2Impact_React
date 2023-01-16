import videoBg from '../assets/bgVideo.mp4';

export function BgVideo() {
  return (
    <section className="bg-video">
      <video src={videoBg} autoPlay loop muted/>
      <div className="video-over"></div>
    </section>
  )
}
