export default function Body(){
    return(
        <>
          <main className="main">
  {/* Hero Section */}
  <section id="hero" className="hero section dark-background">
    <div
      id="hero-carousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval={5000}
    >
      <div className="carousel-item active">
        <img src="Assets/assets/img/hero-carousel/hero-carousel-1.jpg" alt="" />
        <div className="container">
          <h2>We are professional</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="#featured-services" className="btn-get-started">
            Get Started
          </a>
        </div>
      </div>
      {/* End Carousel Item */}
      <div className="carousel-item">
        <img src="Assets/assets/img/hero-carousel/hero-carousel-2.jpg" alt="" />
        <div className="container">
          <h2>At vero eos et accusamus</h2>
          <p>
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
            impedit quo minus id quod maxime placeat facere possimus, omnis
            voluptas assumenda est, omnis dolor repellendus. Temporibus autem
            quibusdam et aut officiis debitis aut.
          </p>
          <a href="#featured-services" className="btn-get-started">
            Get Started
          </a>
        </div>
      </div>
      {/* End Carousel Item */}
      <div className="carousel-item">
        <img src="Assets/assets/assets/img/hero-carousel/hero-carousel-3.jpg" alt="" />
        <div className="container">
          <h2>Temporibus autem quibusdam</h2>
          <p>
            Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
            voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
            magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste
            natus error sit voluptatem accusantium.
          </p>
          <a href="#featured-services" className="btn-get-started">
            Get Started
          </a>
        </div>
      </div>
      {/* End Carousel Item */}
      <a
        className="carousel-control-prev"
        href="#hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon bi bi-chevron-left"
          aria-hidden="true"
        />
      </a>
      <a
        className="carousel-control-next"
        href="#hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon bi bi-chevron-right"
          aria-hidden="true"
        />
      </a>
      <ol className="carousel-indicators" />
    </div>
  </section>
  {/* /Hero Section */}
  {/* About Section */}
  <section id="about" className="about section">
    {/* Section Title */}
    <div className="container section-title">
      <h2>About Us</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6" >
          <h3>
            Voluptatem dignissimos provident laboris nisi ut aliquip ex ea
            commodo
          </h3>
          <img
            src="Assets/assets/img/about.jpg"
            className="img-fluid rounded-4 mb-4"
            alt=""
          />
          <p>
            Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis
            quod nisi et. Placeat debitis quia recusandae odit et consequatur
            voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.
          </p>
          <p>
            Temporibus nihil enim deserunt sed ea. Provident sit expedita aut
            cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus
            et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus
            nobis tempore doloribus debitis explicabo similique sit. Accusantium
            sed ut omnis beatae neque deleniti repellendus.
          </p>
        </div>
        <div className="col-lg-6" >
          <div className="content ps-0 ps-lg-5">
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle-fill" />{" "}
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill" />{" "}
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill" />{" "}
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </span>
              </li>
            </ul>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident
            </p>
            <div className="position-relative mt-4">
              <img
                src="Assets/assets/img/about-2.jpg"
                className="img-fluid rounded-4"
                alt=""
              />
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox pulsating-play-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /About Section */}
  {/* Features Section */}
  <section id="features" className="features section">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4" >
          <div className="why-box">
            <h3>Why Choose Our Products?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit Asperiores dolores sed et.
              Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio
              ad corporis.
            </p>
            <div className="text-center">
              <a href="#" className="more-btn">
                <span>Learn More</span> <i className="bi bi-chevron-right" />
              </a>
            </div>
          </div>
        </div>
        {/* End Why Box */}
        <div className="col-lg-8 d-flex align-items-stretch">
          <div className="row gy-4" >
            <div className="col-xl-4">
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-clipboard-data" />
                <h4>Corporis voluptates officia eiusmod</h4>
                <p>
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div className="col-xl-4" >
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-gem" />
                <h4>Ullamco laboris ladore pan</h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>
            </div>
            {/* End Icon Box */}
            <div className="col-xl-4" >
              <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-inboxes" />
                <h4>Labore consequatur incidid dolore</h4>
                <p>
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
            </div>
            {/* End Icon Box */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Features Section */}
  {/* Services Section */}
  <section id="services" className="services section">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Services</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-4 col-md-6"
         
          
        >
          <div className="service-item  position-relative">
            <div className="icon">
              <i className="bi bi-activity" />
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Nesciunt Mete</h3>
            </a>
            <p>
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
         
          
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-broadcast" />
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Eosle Commodi</h3>
            </a>
            <p>
              Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
              Libero corrupti neque eum hic non ut nesciunt dolorem.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
         
          
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-easel" />
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Ledo Markt</h3>
            </a>
            <p>
              Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
              ea aut. Vel qui id voluptas adipisci eos earum corrupti.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
         
          
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-bounding-box-circles" />
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Asperiores Commodit</h3>
            </a>
            <p>
              Non et temporibus minus omnis sed dolor esse consequatur.
              Cupiditate sed error ea fuga sit provident adipisci neque.
            </p>
            <a href="service-details.html" className="stretched-link" />
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
         
          
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-calendar4-week" />
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Velit Doloremque</h3>
            </a>
            <p>
              Cumque et suscipit saepe. Est maiores autem enim facilis ut aut
              ipsam corporis aut. Sed animi at autem alias eius labore.
            </p>
            <a href="service-details.html" className="stretched-link" />
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
         
          
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-chat-square-text" />
            </div>
            <a href="service-details.html" className="stretched-link">
              <h3>Dolori Architecto</h3>
            </a>
            <p>
              Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque
              non et debitis iure. Corrupti recusandae ducimus enim.
            </p>
            <a href="service-details.html" className="stretched-link" />
          </div>
        </div>
        {/* End Service Item */}
      </div>
    </div>
  </section>
  {/* /Services Section */}
  {/* Call To Action Section */}
  <section
    id="call-to-action"
    className="call-to-action section dark-background"
  >
    <img src="Assets/assets/img/cta-bg.jpg" alt="" />
    <div className="container">
      <div
        className="row justify-content-center"
        data-aos="zoom-in"
        
      >
        <div className="col-xl-10">
          <div className="text-center">
            <h3>Call To Action</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <a className="cta-btn" href="#">
              Call To Action
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Call To Action Section */}
  {/* Portfolio Section */}
  <section id="portfolio" className="portfolio section">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Portfolio</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div
        className="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order"
      >
        <ul
          className="portfolio-filters isotope-filters"
         
          
        >
          <li data-filter="*" className="filter-active">
            All
          </li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-product">Product</li>
          <li data-filter=".filter-branding">Branding</li>
          <li data-filter=".filter-books">Books</li>
        </ul>
        {/* End Portfolio Filters */}
        <div
          className="row gy-4 isotope-container"
         
          
        >
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/app-1.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/app-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    App 1
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/product-1.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/product-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    Product 1
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/branding-1.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/branding-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    Branding 1
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/books-1.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/books-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    Books 1
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/app-2.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/app-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    App 2
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/product-2.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/product-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    Product 2
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/branding-2.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/branding-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    Branding 2
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/books-2.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/books-2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    Books 2
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/app-3.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/app-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    App 3
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/product-3.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/product-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    Product 3
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/branding-3.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/branding-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    Branding 3
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
            <div className="portfolio-content h-100">
              <a
                href="assets/img/portfolio/books-3.jpg"
                data-gallery="portfolio-gallery-app"
                className="glightbox"
              >
                <img
                  src="Assets/assets/img/portfolio/books-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="portfolio-info">
                <h4>
                  <a href="portfolio-details.html" title="More Details">
                    Books 3
                  </a>
                </h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
        </div>
        {/* End Portfolio Container */}
      </div>
    </div>
  </section>
  {/* /Portfolio Section */}
  {/* Pricing Section */}
  <section id="pricing" className="pricing section">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Pricing</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row g-4 g-lg-0">
        <div className="col-lg-4" data-aos="zoom-in" >
          <div className="pricing-item">
            <h3>Free Plan</h3>
            <h4>
              <sup>$</sup>0<span> / month</span>
            </h4>
            <ul>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li className="na">
                <i className="bi bi-x" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li className="na">
                <i className="bi bi-x" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <div className="text-center">
              <a href="#" className="buy-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
        <div
          className="col-lg-4 featured"
          data-aos="zoom-in"
          
        >
          <div className="pricing-item">
            <h3>Business Plan</h3>
            <h4>
              <sup>$</sup>29<span> / month</span>
            </h4>
            <ul>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <div className="text-center">
              <a href="#" className="buy-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
        <div className="col-lg-4" data-aos="zoom-in" >
          <div className="pricing-item">
            <h3>Developer Plan</h3>
            <h4>
              <sup>$</sup>49<span> / month</span>
            </h4>
            <ul>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Quam adipiscing vitae proin</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nec feugiat nisl pretium</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Nulla at volutpat diam uteera</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Pharetra massa massa ultricies</span>
              </li>
              <li>
                <i className="bi bi-check" />{" "}
                <span>Massa ultricies mi quis hendrerit</span>
              </li>
            </ul>
            <div className="text-center">
              <a href="#" className="buy-btn">
                Buy Now
              </a>
            </div>
          </div>
        </div>
        {/* End Pricing Item */}
      </div>
    </div>
  </section>
  {/* /Pricing Section */}
  {/* Faq Section */}
  <section id="faq" className="faq section light-background">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-4" >
          <div className="content px-xl-5">
            <h3>
              <span>Frequently Asked </span>
              <strong>Questions</strong>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
          </div>
        </div>
        <div className="col-lg-8" >
          <div className="faq-container">
            <div className="faq-item faq-active">
              <h3>
                <span className="num">1.</span>{" "}
                <span>Non consectetur a erat nam at lectus urna duis?</span>
              </h3>
              <div className="faq-content">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>
                <span className="num">2.</span>{" "}
                <span>
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque?
                </span>
              </h3>
              <div className="faq-content">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>
                <span className="num">3.</span>{" "}
                <span>
                  Dolor sit amet consectetur adipiscing elit pellentesque?
                </span>
              </h3>
              <div className="faq-content">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus. Urna molestie at elementum eu facilisis sed
                  odio morbi quis
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>
                <span className="num">4.</span>{" "}
                <span>
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </span>
              </h3>
              <div className="faq-content">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                  ultrices eros in cursus turpis massa tincidunt dui.
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
            <div className="faq-item">
              <h3>
                <span className="num">5.</span>{" "}
                <span>
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?
                </span>
              </h3>
              <div className="faq-content">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right" />
            </div>
            {/* End Faq item*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* /Faq Section */}
  {/* Team Section */}
  <section id="team" className="team section">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Team</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-3 col-md-6 d-flex align-items-stretch"
         
          
        >
          <div className="team-member">
            <div className="member-img">
              <img
                src="Assets/assets/img/team/team-1.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
              <p>
                Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                corporis et voluptate.
              </p>
            </div>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-3 col-md-6 d-flex align-items-stretch"
         
          
        >
          <div className="team-member">
            <div className="member-img">
              <img
                src="Assets/assets/img/team/team-2.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
              <p>
                Quo esse repellendus quia id. Est eum et accusantium pariatur
                fugit nihil minima suscipit corporis. Voluptate sed quas
                reiciendis animi neque sapiente.
              </p>
            </div>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-3 col-md-6 d-flex align-items-stretch"
         
          
        >
          <div className="team-member">
            <div className="member-img">
              <img
                src="Assets/assets/img/team/team-3.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>William Anderson</h4>
              <span>CTO</span>
              <p>
                Vero omnis enim consequatur. Voluptas consectetur unde qui
                molestiae deserunt. Voluptates enim aut architecto porro
                aspernatur molestiae modi.
              </p>
            </div>
          </div>
        </div>
        {/* End Team Member */}
        <div
          className="col-lg-3 col-md-6 d-flex align-items-stretch"
         
          
        >
          <div className="team-member">
            <div className="member-img">
              <img
                src="Assets/assets/img/team/team-4.jpg"
                className="img-fluid"
                alt=""
              />
              <div className="social">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="member-info">
              <h4>Amanda Jepson</h4>
              <span>Accountant</span>
              <p>
                Rerum voluptate non adipisci animi distinctio et deserunt amet
                voluptas. Quia aut aliquid doloremque ut possimus ipsum officia.
              </p>
            </div>
          </div>
        </div>
        {/* End Team Member */}
      </div>
    </div>
  </section>
  {/* /Team Section */}
  {/* Contact Section */}
  <section id="contact" className="contact section light-background">
    {/* Section Title */}
    <div className="container section-title">
      <h2>Contact</h2>
      <p>
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
    {/* End Section Title */}
    <div className="container" >
      <div className="row gy-4">
        <div className="col-lg-5">
          <div className="info-wrap">
            <div
              className="info-item d-flex"
             
              
            >
              <i className="bi bi-geo-alt flex-shrink-0" />
              <div>
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* End Info Item */}
            <div
              className="info-item d-flex"
             
              
            >
              <i className="bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}
            <div
              className="info-item d-flex"
             
              
            >
              <i className="bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
            <iframe
              src="Assets/assets/Assets/https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              frameBorder={0}
              style={{ border: 0, width: "100%", height: 270 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="col-lg-7">
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form"
           
            
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <label htmlFor="name-field" className="pb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name-field"
                  className="form-control"
                  required=""
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email-field" className="pb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email-field"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="subject-field" className="pb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject-field"
                  required=""
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="message-field" className="pb-2">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  rows={10}
                  id="message-field"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="col-md-12 text-center">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
        {/* End Contact Form */}
      </div>
    </div>
  </section>
  {/* /Contact Section */}
</main>
        </>
    )
}