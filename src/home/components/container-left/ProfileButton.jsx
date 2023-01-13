
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './styleProfileButton.css'

export const ProfileButton = () => {
  return (
    <div>
        <div className="c-l__account">
              <a href="" className="account__profile">
                <img
                  className="imagenProfile1"
                  src="https://lh3.googleusercontent.com/IALGyI3i7Qb9uWcDuwRadPgPJIYWSlDBsHBjbjxoj4KFbUahMiL2oU9JkQ3DYJGxYhQiy3zPhwoMKPLiPtECygIJltA07tvEvUAgftyQq7z421_0XA=w1200"
                  alt=""
                />
                Leandro
              </a>
              <a href="" className="user">@sdkaskld</a>
              <FontAwesomeIcon icon={faBars} className="fa-bars"/>
            </div>
    </div>
  )
}
