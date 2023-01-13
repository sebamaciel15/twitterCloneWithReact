
export const WhRight = () => {
  return (
    <>
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
    </>
  )
}
