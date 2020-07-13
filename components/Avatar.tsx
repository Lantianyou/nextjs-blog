export default function Avatar({ name, picture }) {
  const pictureSrc = picture || `/images/profile.jpg`
  return (
    <div className="flex items-center">
      <img src={pictureSrc} className="w-12 h-12 mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}