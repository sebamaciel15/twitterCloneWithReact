
export const ResponsiveNav = () => {
  return (
    <div>
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
          <img className="imagenProfile2" src="Profiles/leansilva.jpg" alt="" />
        </a>
      </div>
    </div>
  );
}
