import { Link } from "react-router-dom";

export default function OwnerHeader() {
    return (
        <>
            <div className="hero-content">
                <header className="site-header">
                    <div className="top-header-bar">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-lg-6 d-none d-md-flex flex-wrap justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                                    <div className="header-bar-email d-flex align-items-center">
                                        <i className="fa fa-envelope" />
                                        <a href="#">tuanna.design@gmail.com</a>
                                    </div>
                                    {/* .header-bar-email */}
                                    <div className="header-bar-text lg-flex align-items-center">
                                        <p>
                                            <i className="fa fa-phone" />
                                            001-1234-88888{" "}
                                        </p>
                                    </div>
                                    {/* .header-bar-text */}
                                </div>
                                {/* .col */}
                                <div className="col-12 col-lg-6 d-flex flex-wrap justify-content-center justify-content-lg-end align-items-center">
                                    <div className="header-bar-search">
                                        <form className="flex align-items-stretch">
                                            <input
                                                type="search"
                                                placeholder="What would you like to learn?"
                                            />
                                            <button
                                                type="submit"
                                                value=""
                                                className="flex justify-content-center align-items-center"
                                            >
                                                <i className="fa fa-search" />
                                            </button>
                                        </form>
                                    </div>
                                    {/* .header-bar-search */}
                                    <div className="header-bar-menu">
                                        <ul className="flex justify-content-center align-items-center py-2 pt-md-0">
                                            <li>
                                                <a href="#">Register</a>
                                            </li>
                                            <li>
                                                <Link to="/login">Login</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* .header-bar-menu */}
                                </div>
                                {/* .col */}
                            </div>
                            {/* .row */}
                        </div>
                        {/* .container-fluid */}
                    </div>

                    {/* .top-header-bar */}
                    <div className="nav-bar">
                        <div className="container">
                            <div className="row">
                                <div className="col-9 col-lg-3">
                                    <div className="site-branding">
                                        <h1 className="site-title">
                                            <a href="index.html" rel="home">
                                                ow<span>ner</span>
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
                                                <a href="index.html">Home</a>
                                            </li>
                                            <li>
                                                <Link to="/Owner/findProperty/">Find-Property</Link>
                                            </li>
                                            <li>
                                                <Link to="/Owner/addProperty/">Add-Property</Link>
                                            </li>
                                            <li>
                                                <Link to="/">blog</Link>
                                            </li>
                                            <li>
                                                <Link to="/">Contact</Link>
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
                <div className="hero-content-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-content-wrap flex flex-column justify-content-center align-items-start">
                                    <header className="entry-header">
                                        <h1>
                                            grow your
                                            <br />
                                            business with us
                                        </h1>
                                    </header>
                                    {/* .entry-header */}
                                    <div className="entry-content">
                                        <p>
                                           you can add your propertys for
                                        </p>
                                    </div>
                                </div>
                                {/* .hero-content-wrap */}
                            </div>
                            {/* .col */}
                        </div>
                        {/* .row */}
                    </div>
                    {/* .container */}
                </div>
                {/* .hero-content-hero-content-overlay */}
            </div>
        </>
    )
}