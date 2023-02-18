import Slider from 'react-slick'
import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetSlider = props => {
  const {planetsList} = props
  console.log(planetsList)

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg-container">
      <h1 className="main-heading">PLANETS</h1>
      <div className="slider-container" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} planetItem={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetSlider
