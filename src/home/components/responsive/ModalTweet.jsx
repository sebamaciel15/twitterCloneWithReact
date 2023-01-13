
export const ModalTweet = () => {
  return (
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
  )
}
