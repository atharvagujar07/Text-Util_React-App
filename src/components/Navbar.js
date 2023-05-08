import React from 'react'

export default function Navbar(props) {
  return (
    <div>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="#">&nbsp;&nbsp;&nbsp; &nbsp;{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">{props.aboutText}</a>
        </li>
      </ul>
    </div>
    <form className="form-inline">
      {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; */}
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" onClick={props.toggleMode} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>&nbsp;&nbsp;
</div>
    </form>
  </nav>
    </div>
  )
}

