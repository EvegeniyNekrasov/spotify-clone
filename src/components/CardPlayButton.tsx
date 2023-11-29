import { Play, Pause } from "./Player"
import { usePlayerStore } from "@/store/playerStore"

function CardPlayButton({ id }) {
  const { currentSong, isPlaying, setIsPlaying, setCurrentSong } =
    usePlayerStore((state) => state)

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }
  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4"
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  )
}

export default CardPlayButton
