class Title extends React.Component {
  render() {
    return (
      <h1> Grazie APP</h1>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          company="Grazie app"
        />
        <VideoBg />
        <Footer 
          footerInfo = "Copyright © Grazie App | Spread happiness one tip at a time"
        />
      </div>
    )
  }
}

class Navbar extends React.Component {
  render() {
    const { company } = this.props
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="#">{company}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">About us</a>
            <a className="nav-item nav-link" href="#">Mission</a>
            <a className="nav-item nav-link" href="#" tabIndex="-1">Team</a>
            <LoginButtons
              login="Login"
              signup="Join the tribe"
            />
          </div>
        </div>
      </nav>
    )
  }
}

class LoginButtons extends React.Component {
  render() {
    const { login, signup } = this.props
    return (
      <div>
        <button className="btn btn-primary ml-1">{login}</button>
        <button className="btn btn-primary ml-1">{signup}</button>
      </div>
    )
  }
}

class VideoBg extends React.Component {
  render() {
    return (
      <header id="home" className="min-vh-100">
        <div className="overlay">
        <MainTitle 
          appTitle = "The new, unique and only app that spreads Happiness"
          mainInfo = "Spread happiness one tip at a time"
        />
        </div>
        <video playsInLine="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src="./assets/moneyBackground.mp4" type="video/mp4" />
        </video>
      </header>
    )
  }
}

class MainTitle extends React.Component {
  render () {
  const {mainInfo, appTitle} = this.props;
    return (
      <div className="container h-100 mt-5">
      <div className="d-flex h-100 text-center align-items-center">
        <div className="w-100 text-white">
          <h1 className="display-3 title-lighter"> {appTitle}</h1>
          <p className="lead mb-0">{mainInfo}</p>
        </div>
      </div>
    </div>
    )
  }
}

class Footer extends React.Component {
  render() {
    const {footerInfo} = this.props
    return (
      <footer id="footerpad">
        <div className="container">
          <div className="row m-5">
            <div className="col-md-6 col-lg-8 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item p-3"><a href="#"><i className="facebook icon"></i></a></li>
                <li className="list-inline-item p-3"><a href="#"><i className="twitter icon"></i></a></li>
                <li className="list-inline-item p-3"><a href="#"><i className="instagram icon"></i></a></li>
              </ul>
              <p className="copyright text-muted text-center">{footerInfo}</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root'))