import { Play, Pause } from "./Player"

function CardPlayButton({ id }) {
  return (
    <div className="card-play-button rounded-full bg-green-500 p-4">
      <Play />
    </div>
  )
}

export default CardPlayButton
