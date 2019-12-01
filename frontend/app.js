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
        <Footer />
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
        <div className="overlay"></div>
        <video playsInLine="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
          <source src="./assets/moneyBackground.mp4" type="video/mp4" />
        </video>
      </header>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer id="footerpad">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-8 mx-auto">
              <ul className="list-inline text-center">
                <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a></li>
                <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a></li>
                <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a></li>
                <li className="list-inline-item"><a href="#"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x"></i><i className="fa fa-pinterest fa-stack-1x fa-inverse"></i></span></a></li>
              </ul>
              <p className="copyright text-muted text-center">Copyright © Your Company 2018 | Web Design by Designer</p>
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