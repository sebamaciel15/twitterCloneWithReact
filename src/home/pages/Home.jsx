import '../styles/style.css'


export const Home = () => {
  return (
    <>
      <h1>Inicio / Twitter</h1>
      <div className="grid__container">
        <div className="container-left">
          <nav className="pc">
            <span>
              <a href="" className="c-1__twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </span>

            <div className="elements">
              <a href="" className="c-l __home">
                <i className="fa-solid fa-house"></i>Inicio
              </a>
              <a href="" className="c-l __search">
                <i className="fa-solid fa-hashtag"></i>Explorar
              </a>
              <a href="" className="c-l __notifications">
                <i className="fa-solid fa-bell"></i>Notificaciones
              </a>
              <a href="" className="c-l __message">
                <i className="fa-solid fa-envelope"></i>Mensajes
              </a>
              <a href="" className="c-l __saves">
                <i className="fa-solid fa-bookmark"></i>Guardados
              </a>
              <a href="" className="c-l __list">
                <i className="fa-solid fa-file-lines"></i>Listas
              </a>
              <a href="" className="c-l __profile">
                <i className="fa-solid fa-user"></i>Perfil
              </a>
              <a href="" className="c-l __moreoptions">
                <i className="fa-solid fa-bars"></i>Más opciones
              </a>
              <button type="submit" id="buttonTweet2" className="__tweetL">
                Twittear
              </button>
            </div>
            <div className="c-l__account">
              <a href="" className="account__profile">
                <img
                  className="imagenProfile1"
                  src="Profiles/leansilva.jpg"
                  alt=""
                />{" "}
              </a>
              <a href="" className="user"></a>
              <i className="fa-solid fa-bars"></i>
            </div>
          </nav>
          <nav className="responsive-nav">
            <a href="" className="c-1 __twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>

            <div className="elements-responsive">
              <a href="" className="c-l __home">
                <i className="fa-solid fa-house"></i>
              </a>
              <a href="" className="c-l __search">
                <i className="fa-solid fa-hashtag"></i>
              </a>
              <a href="" className="c-l __notifications">
                <i className="fa-solid fa-bell"></i>
              </a>
              <a href="" className="c-l __message">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <a href="" className="c-l __saves">
                <i className="fa-solid fa-bookmark"></i>
              </a>
              <a href="" className="c-l __list">
                <i className="fa-solid fa-file-lines"></i>
              </a>
              <a href="" className="c-l __profile">
                <i className="fa-solid fa-user"></i>
              </a>
              <a href="" className="c-l __moreoptions">
                <i className="fa-solid fa-bars"></i>
              </a>
              <button type="submit" className="__tweetR" id="buttonTweetR">
                <i className="fa-solid fa-feather-pointed"></i>
              </button>
            </div>
            <div className="c-l__account-responsive">
              <a href="" className="account__profile-responsive">
                <img
                  className="imagenProfile2"
                  src="Profiles/leansilva.jpg"
                  alt=""
                />
              </a>
            </div>
          </nav>
        </div>
        <div className="container-center">
          <div className="home-fixed">
            <a className="homeFixedA" href="#">
              Inicio
            </a>
            <a href="" title="Tweets destacados">
              <span className="material-icons">
                <span className="material-icons">auto_awesome</span>
              </span>
            </a>
          </div>
          <div className="c-c__twitt">
            <div className="twitt__wh">
              {" "}
              <img
                className="imagenProfile3"
                src="Profiles/leansilva.jpg"
                alt=""
              />
              <input
                className="valueTextTweet"
                type="text"
                placeholder="¿Qué está pasando?"
              />
            </div>
            <a href="" className="twitt__anybody">
              <span className="material-icons">public</span>Cualquier persona
              puede responder
            </a>
            <hr className="c-c__line1" />
            <div className="twitt__elements">
              <div className="elements__buttons">
                <a className="button-fotos" href="#" title="Fotos y videos">
                  <input className="inputFile-fotos" type="file" />
                  <span className="material-icons"> collections</span>
                </a>
                <a href="#" title="GIF">
                  <span className="material-icons">gif_box</span>
                </a>
                <a href="#" title="Encuesta">
                  <span className="material-icons">poll</span>
                </a>
                <a href="#" title="Emoji">
                  <span className="material-icons">emoji_emotions</span>
                </a>
                <a href="#" title="Programación">
                  <span className="material-icons">pending_actions</span>
                </a>
                <i>
                  <span className="material-icons">fmd_good</span>
                </i>
              </div>
              <button className="__tweetC" id="buttonTweet1">
                Twittear
              </button>
            </div>
            <hr className="c-c__line2" />
          </div>

          <div className="home-tweets"></div>

          <nav className="responsive-nav2">
            <div className="elements-responsive">
              <a href="" className="c-l __home">
                <i className="fa-solid fa-house"></i>
              </a>
              <a href="" className="c-l __search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <a href="" className="c-l __notifications">
                <i className="fa-solid fa-bell"></i>
              </a>
              <a href="" className="c-l __message">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
            <a href="" className="c-l __tweet-responsive">
              <i className="fa-solid fa-feather-pointed"></i>
            </a>
          </nav>
        </div>

        <div className="container-right">
          <div className="c-r__search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Busca en Twitter" />
          </div>
          <div className="c-r__whatshappening">
            <h2>Qué está pasando</h2>
            <div className="wh__news1">
              <span>Noticias . 3 de agosto de 2022</span>
              <p>
                Sergio Massa jura como ministro de Economía y presenta nuevas
                medidas
              </p>
              <span>
                Tendencias sobre <a href="">Massa</a>
              </span>
            </div>
            <div className="wh__news2">
              <span>Tendencias</span>
              <a href="" className="bars">
                <i className="fa-solid fa-bars-filter"></i>
              </a>
              <p>#tarifazo</p>
              <span>172 mil Tweets</span>
            </div>
            <div className="wh__news2">
              <span>Tendencia en Argentina</span>
              <a href="" className="bars">
                <i className="fa-solid fa-bars-filter"></i>
              </a>
              <p>#Milei2023</p>
              <span>12,7 mil Tweets</span>
            </div>
            <div className="wh__news2">
              <span>Tendencias</span>
              <a href="" className="bars">
                <i className="fa-solid fa-bars-filter"></i>
              </a>
              <p>#LeanSilvacrack</p>
              <span>999 mil Tweets</span>
            </div>
            <div className="wh__news3">
              <span>Guerra en Ucrania . EN DIRECTO</span>
              <p>Lo último sobre la Guerra en Ucrania</p>
              <img className="newimagen" src="img/ucrania.jpg" alt="" />
            </div>
          </div>
          <footer>
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
            <a href="" target="_blank">
              Más opciones<i className="fa-solid fa-bars"></i>
            </a>
            <span>© 2022 Twitter, Inc.</span>
          </footer>
        </div>

        {/* <!-- //modales --> */}

        <div className="modalTweet">
          <i id="x" className="fa-solid fa-x"></i>
          <div className="c-c__twitt">
            <div className="twitt__M">
              {" "}
              <img
                className="imagenProfile3"
                id="modalImg"
                src="Profiles/leansilva.jpg"
                alt=""
              />
            </div>
            <a href="" className="twitt__anybody">
              <span className="material-icons">public</span>Cualquier persona
              puede responder
            </a>
            <hr className="c-c__line1" />
            <div className="twitt__elements">
              <div className="elements__buttons">
                <a className="button-fotos" href="#" title="Fotos y videos">
                  <input className="inputFile-fotos" type="file" />
                  <span className="material-icons"> collections</span>
                </a>
                <a href="" title="GIF">
                  <span className="material-icons">gif_box</span>
                </a>
                <a href="" title="Encuesta">
                  <span className="material-icons">poll</span>
                </a>
                <a href="" title="Emoji">
                  <span className="material-icons">emoji_emotions</span>
                </a>
                <a href="" title="Programación">
                  <span className="material-icons">pending_actions</span>
                </a>
                <i>
                  <span className="material-icons">fmd_good</span>
                </i>
              </div>
              <button className="__tweetM">Twittear</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="imposibleI"
          id="123"
          src=""
          style={{ display: "none" }}
        />
      </div>
    </>
  );
}
