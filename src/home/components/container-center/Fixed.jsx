import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Fixed = () => {
  return (
    <div>
        <div className="home-fixed">
            <a className="homeFixedA" href="#">
              Inicio
            </a>
            <a href="" title="Tweets destacados">
              <span className="material-icons">
                <FontAwesomeIcon icon={faStar} className="fa-stars"/>
              </span>
            </a>
          </div>
    </div>
  )
}
