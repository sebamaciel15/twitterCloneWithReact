import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome,faHashtag,faBell,faEnvelope,faBookmark,faFileLines,faUser,faBars } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export const Elements = () => {
  return (
    <>
        <div className="elements">
              <a href="" className="c-l __home">
                <FontAwesomeIcon icon={faHome} className="fa-home"/>Inicio
              </a>
              <a href="" className="c-l __search">
                <FontAwesomeIcon icon={faHashtag} className="fa-hashtag"/>Explorar
              </a>
              <a href="" className="c-l __notifications">
                <FontAwesomeIcon icon={faBell} className="fa-bell"/>Notificaciones
              </a>
              <a href="" className="c-l __message">
                <FontAwesomeIcon icon={faEnvelope} className="fa-envelope"/>Mensajes
              </a>
              <a href="" className="c-l __saves">
                <FontAwesomeIcon icon={faBookmark} className="fa-bookmark"/>Guardados
              </a>
              <a href="" className="c-l __list">
                <FontAwesomeIcon icon={faFileLines} className="fa-file-lines"/>Listas
              </a>
              <a href="" className="c-l __profile">
                <FontAwesomeIcon icon={faUser} className="fa-user"/>Perfil
              </a>
              <a href="" className="c-l __moreoptions">
               <FontAwesomeIcon icon={faBars} className="fa-bars"/>Más opciones
              </a>
              <button type="submit" id="buttonTweet2" className="__tweetL">
                Twittear
              </button>
            </div>
    </>
  )
}
