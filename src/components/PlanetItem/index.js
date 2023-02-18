import './index.css'

const PlanetItem = props => {
  const {planetItem} = props

  return (
    <div className="content">
      <img
        className="planets-img"
        src={planetItem.imageUrl}
        alt={`planet ${planetItem.name}`}
      />
      <h1 className="planet-name">{planetItem.name}</h1>
      <p className="description">{planetItem.description}</p>
    </div>
  )
}

export default PlanetItem
