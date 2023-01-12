import '../styles/login.css'

export const Login = () => {
  return (
    <>
      <div className="main">
        <div className="container__1">
          <span className="c1__twitter">
            <img src="twitter.jpg" />
          </span>
          <img className="c1__background-img" src="background.png" />
        </div>
        <div className="container__2">
          <div className="container__2-icon">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <div className="container__2-text">
            <h1 className="text-now">Lo que está pasando ahora</h1>
            <h2 className="text-join">Únete a Twitter hoy mismo.</h2>
          </div>
          <div className="container__2-register">
            <a
              className="button"
              href="https://accounts.google.com/signin/v2/identifier?faa=1&rip=1&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3DVTMpcEzUcDfdhs2woZ2Iqw%26channel_id%3D7400c9542af4a522bb81b7ab76a6358ad4be45ccdbc5b1ff810893a41c6ef82d%26origin%3Dhttps%3A%2F%2Ftwitter.com&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              target="_blank"
            >
              <i className="fa-brands fa-google"></i>Registrarse con Google
            </a>
            <a
              className="button"
              href="https://appleid.apple.com/auth/authorize?client_id=com.twitter.twitter.siwa&redirect_uri=https%3A%2F%2Ftwitter.com&response_type=code%20id_token&state=0GsJvnw-Kv8tf6nN1zU0iGjyStorUOHIslt5ZDIfsox&scope=name%20email&response_mode=web_message&frame_id=e7d00a9a-260a-495b-9939-4efd28141051&m=11&v=1.5.4"
              target="_blank"
            >
              <i className="fa-brands fa-apple"></i>Registrarse con Apple
            </a>
            <div className="line-o">
              <div className="line-o__divline"></div>
              <span>o</span>
              <div className="line-o__divline"></div>
            </div>
            <button className="button-phone" id="botonreg">
              Regístrate con el Número de teléfono
            </button>
            <span className="text-phone">
              Al registrarte, aceptas los{" "}
              <a href="https://twitter.com/es/tos" target="_blank">
                Términos de servicio
              </a>{" "}
              y la{" "}
              <a
                href="https://help.twitter.com/es/rules-and-policies/twitter-cookies"
                target="_blank"
              >
                {" "}
                Política de privacidad
              </a>
              , incluida la política de{" "}
              <a
                href="https://help.twitter.com/es/rules-and-policies/twitter-cookies"
                target="_blank"
              >
                {" "}
                Uso de Cookies
              </a>
              .
            </span>
          </div>
          <div className="container__2-have">
            <span>¿Ya tienes una cuenta?</span>
            <button className="button-have">Iniciar sesión</button>
          </div>
        </div>
        <footer>
          <a href="https://about.twitter.com/es" target="_blank">
            Información
          </a>
          <a href="https://help.twitter.com/es" target="_blank">
            Centro de Ayuda
          </a>
          <a href="https://twitter.com/es/tos" target="_blank">
            Condiciones de Servicio
          </a>
          <a href="https://twitter.com/es/privacy" target="_blank">
            Política de Privacidad
          </a>
          <a
            href="https://help.twitter.com/es/rules-and-policies/twitter-cookies"
            target="_blank"
          >
            Política de cookies
          </a>
          <a
            href="https://help.twitter.com/es/resources/accessibility"
            target="_blank"
          >
            Accesibilidad
          </a>
          <a
            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            target="_blank"
          >
            Información de anuncios
          </a>
          <a
            href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo"
            target="_blank"
          >
            Blog
          </a>
          <a href="https://status.twitterstat.us/" target="_blank">
            Estado
          </a>
          <a href="https://careers.twitter.com/" target="_blank">
            Empleos
          </a>
          <a
            href="https://about.twitter.com/es/company/brand-resources"
            target="_blank"
          >
            Recursos para marcas
          </a>
          <a
            href="https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise"
            target="_blank"
          >
            Publicidad
          </a>
          <a href="https://marketing.twitter.com/es" target="_blank">
            Marketing
          </a>
          <a
            href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness"
            target="_blank"
          >
            Twitter para empresas
          </a>
          <a href="https://developer.twitter.com/en" target="_blank">
            Desarrolladores
          </a>
          <a href="https://twitter.com/i/directory/profiles" target="_blank">
            Guía
          </a>
          <a
            href="https://twitter.com/settings/account/personalization"
            target="_blank"
          >
            Configuración
          </a>
          <span>© 2022 Twitter, Inc.</span>
        </footer>

        <div className="modal">
          <i id="x" className="fa-solid fa-x"></i>
          {/* revisar clase modal-icon */}
          <div className="modal-icon">
            <i className="fa-brands fa-twitter"></i>
          </div>
          <h2>Inicia sesión en Twitter</h2>
          <div className="container__2-register">
            <a
              className="button"
              href="https://accounts.google.com/signin/v2/identifier?faa=1&rip=1&continue=https%3A%2F%2Faccounts.google.com%2Fgsi%2Fselect%3Fclient_id%3D49625052041-kgt0hghf445lmcmhijv46b715m2mpbct.apps.googleusercontent.com%26ux_mode%3Dpopup%26ui_mode%3Dcard%26as%3DVTMpcEzUcDfdhs2woZ2Iqw%26channel_id%3D7400c9542af4a522bb81b7ab76a6358ad4be45ccdbc5b1ff810893a41c6ef82d%26origin%3Dhttps%3A%2F%2Ftwitter.com&flowName=GlifWebSignIn&flowEntry=ServiceLogin"
              target="_blank"
            >
              <i className="fa-brands fa-google"></i>Registrarse con Google
            </a>
            <a
              className="button"
              href="https://appleid.apple.com/auth/authorize?client_id=com.twitter.twitter.siwa&redirect_uri=https%3A%2F%2Ftwitter.com&response_type=code%20id_token&state=0GsJvnw-Kv8tf6nN1zU0iGjyStorUOHIslt5ZDIfsox&scope=name%20email&response_mode=web_message&frame_id=e7d00a9a-260a-495b-9939-4efd28141051&m=11&v=1.5.4"
              target="_blank"
            >
              <i className="fa-brands fa-apple"></i>Registrarse con Apple
            </a>
            <div className="line-o">
              <div className="line-o__divline"></div>
              <span>o</span>
              <div className="line-o__divline"></div>
            </div>
            <input
              type="text"
              className="i-text"
              placeholder="Teléfono, correo electrónico o nombre de usuario"
            />
            <input
              type="submit"
              id="nextIngresar"
              className="button"
              value="Siguiente"
            />
            <a
              className="button-q"
              href="https://twitter.com/i/flow/password_reset?input_flow_data=%7B%22requested_variant%22%3A%22eyJwbGF0Zm9ybSI6IlJ3ZWIifQ%3D%3D%22%7D"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <span className="text-phone">
            ¿No tienes una cuenta?<a href=""> Regístrate</a>
          </span>
        </div>

        <div className="reg-container">
          <div className="register" id="modal1">
            <i id="x2" className="fa-solid fa-x"></i>
            {/* revisar clase crea */}
            <h2 className="crea">Crea tu cuenta</h2>
            {/* revisar clase form1 */}
            <form className="form1">
              <div className="group" id="nombre">
                <input id="name" type="text" required />
                <label id="label1">Nombre</label>
              </div>

              <div className="group" id="mail">
                <input id="user" className="user" type="text" required />
                <label id="label2">Correo electrónico</label>
              </div>

              <p>
                Fecha de nacimiento<br></br>Esta información no será pública.
                Confirma tu propia edad, incluso si esta cuenta es para una
                empresa, una mascota u otra cosa.
              </p>

              <div className="group" id="fecha">
                <input id="cumple" type="date" required />
              </div>
              <input
                className="button"
                id="next"
                type="submit"
                value="Siguiente"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
