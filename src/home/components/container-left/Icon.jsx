import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/fontawesome-free-brands'
import './styleIcon.css'

export const Icon = () => {
  return (
    <div>
        <span>
              <a href="" className="c-1__twitter">
              <FontAwesomeIcon icon={faTwitter} className="fa-twitter"/>
              </a>
            </span>
    </div>
  )
}
