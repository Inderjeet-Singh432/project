export default function AdminHeader(){
    return(
        <>
    <div className="hero-content">
    <header className="site-header">

      {/* .top-header-bar */}
      <div className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-9 col-lg-3">
              <div className="site-branding">
                <h1 className="site-title">
                  <a href="index.html" rel="home">
                    adm<span>in</span>
                  </a>
                </h1>
              </div>
              {/* .site-branding */}
            </div>
            {/* .col */}
            <div className="col-3 col-lg-9 flex justify-content-end align-content-center">
              <nav className="site-navigation flex justify-content-end align-items-center">
                <ul className="flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                  <li className="current-menu-item">
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="#">Manage</a>
                  </li>
                  <li>
                    <a href="#">Property</a>
                  </li>
                  <li>
                    <a href="#">Users</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
                <div className="hamburger-menu d-lg-none">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                {/* .hamburger-menu */}
                <div className="header-bar-cart">
                  <a
                    href="#"
                    className="flex justify-content-center align-items-center"
                  >
                    <span aria-hidden="true" className="icon_bag_alt" />
                  </a>
                </div>
                {/* .header-bar-search */}
              </nav>
              {/* .site-navigation */}
            </div>
            {/* .col */}
          </div>
          {/* .row */}
        </div>
        {/* .container */}
      </div>
      {/* .nav-bar */}
    </header>
    {/* .site-header */}
    <div className="hero-content-overlay" >
      <div className="container">
        <div className="row" >
          <div className="col-12">
            <div className="hero-content-wrap flex flex-column justify-content-center align-items-start" >
              <header className="entry-header">
                <h1>
                  admin panel
                </h1>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}