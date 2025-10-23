export default function Body(){
    return(
        <>
        <main className="main">
  {/* Hero Section */}
  
  {/* <section id="hero" className="hero section dark-background">
  </section> */}
    <img src="/Assets/assets/img/hero-bg.jpg" alt="" style={{height:"500px",width:"100%"}} />

  {/* /Hero Section */}
  {/* About Section */}
  <section id="about" className="about section">
    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-6"    >
          <h3>
            Voluptatem dignissimos provident laboris nisi ut aliquip ex ea
            commodo
          </h3>
          <img
            src="/Assets/assets/img/about.jpg"
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
        <div className="col-lg-6"    >
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
                src="/Assets/assets/img/about-2.jpg"
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

  {/* Services Section */}
  <section id="services" className="services section">
    {/* Section Title */}
    <div className="container section-title"  >
      <h2>Services</h2>
      <p>
        Featured Srvices
        <br />
      </p>
    </div>
    {/* End Section Title */}
    <div className="container"    >
      <div className="row gy-5">
        <div
          className="col-xl-4 col-md-6"
           
           
        >
          <div className="service-item">
            <div className="img">
              <img
                src="/Assets/assets/img/services-1.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="details position-relative">
              <div className="icon">
                <i className="bi bi-activity" />
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Nesciunt Mete</h3>
              </a>
              <p>
                Provident nihil minus qui consequatur non omnis maiores. Eos
                accusantium minus dolores iure perferendis.
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-xl-4 col-md-6">
          <div className="service-item">
            <div className="img">
              <img
                src="/Assets/assets/img/services-2.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="details position-relative">
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
        </div>
        {/* End Service Item */}
        <div
          className="col-xl-4 col-md-6"
           
           
        >
          <div className="service-item">
            <div className="img">
              <img
                src="/Assets/assets/img/services-3.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="details position-relative">
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
        </div>
        {/* End Service Item */}
      </div>
    </div>
  </section>
  {/* /Services Section */}

  {/* Features Section */}
  <section id="features" className="features section">
    <div className="container">
      <ul
        className="nav nav-tabs row  d-flex"
         
         
      >
        <li className="nav-item col-3">
          <a
            className="nav-link active show"
            data-bs-toggle="tab"
            data-bs-target="#features-tab-1"
          >
            <i className="bi bi-binoculars" />
            <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
          </a>
        </li>
        <li className="nav-item col-3">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#features-tab-2"
          >
            <i className="bi bi-box-seam" />
            <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
          </a>
        </li>
        <li className="nav-item col-3">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#features-tab-3"
          >
            <i className="bi bi-brightness-high" />
            <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
          </a>
        </li>
        <li className="nav-item col-3">
          <a
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#features-tab-4"
          >
            <i className="bi bi-command" />
            <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
          </a>
        </li>
      </ul>
      {/* End Tab Nav */}
      <div className="tab-content"    >
        <div className="tab-pane fade active show" id="features-tab-1">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" />
                  <spab>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </spab>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </span>
                  .
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img
                src="/Assets/assets/img/working-1.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* End Tab Content Item */}
        <div className="tab-pane fade" id="features-tab-2">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>
                Neque exercitationem debitis soluta quos debitis quo mollitia
                officia est
              </h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Provident mollitia neque rerum asperiores dolores quos qui
                    a. Ipsum neque dolor voluptate nisi sed.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img
                src="/Assets/assets/img/working-2.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* End Tab Content Item */}
        <div className="tab-pane fade" id="features-tab-3">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>
                Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor
                ut assumenda
              </h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Provident mollitia neque rerum asperiores dolores quos qui
                    a. Ipsum neque dolor voluptate nisi sed.
                  </span>
                </li>
              </ul>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img
                src="/Assets/assets/img/working-3.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* End Tab Content Item */}
        <div className="tab-pane fade" id="features-tab-4">
          <div className="row">
            <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
              <h3>
                Omnis fugiat ea explicabo sunt dolorum asperiores sequi
                inventore rerum
              </h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check2-all" />{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperda mastiro dolore eu fugiat nulla pariatur.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 text-center">
              <img
                src="/Assets/assets/img/working-4.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        {/* End Tab Content Item */}
      </div>
    </div>
  </section>
  {/* /Features Section */}
  {/* Services 2 Section */}
  <section id="services-2" className="services-2 section light-background">
    {/* Section Title */}
    <div className="container section-title"  >
      <h2>Services</h2>
      <p>CHECK OUR SERVICES</p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div className="row gy-4">
        <div className="col-md-6"    >
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-briefcase icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="#" className="stretched-link">
                  Lorem Ipsum
                </a>
              </h4>
              <p className="description">
                Voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6"    >
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-card-checklist icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="#" className="stretched-link">
                  Dolor Sitema
                </a>
              </h4>
              <p className="description">
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6"    >
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-bar-chart icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="#" className="stretched-link">
                  Sed ut perspiciatis
                </a>
              </h4>
              <p className="description">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6"    >
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-binoculars icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="#" className="stretched-link">
                  Magni Dolores
                </a>
              </h4>
              <p className="description">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6"    >
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-brightness-high icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="#" className="stretched-link">
                  Nemo Enim
                </a>
              </h4>
              <p className="description">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
        <div className="col-md-6"    >
          <div className="service-item d-flex position-relative h-100">
            <i className="bi bi-calendar4-week icon flex-shrink-0" />
            <div>
              <h4 className="title">
                <a href="#" className="stretched-link">
                  Eiusmod Tempor
                </a>
              </h4>
              <p className="description">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
        {/* End Service Item */}
      </div>
    </div>
  </section>
  {/* /Services 2 Section */}

  {/* Portfolio Section */}
  <section id="portfolio" className="portfolio section">
    {/* Section Title */}
    <div className="container section-title"  >
      <h2>Portfolio</h2>
      <p>CHECK OUR PORTFOLIO</p>
    </div>
    {/* End Section Title */}
    <div className="container">
      <div
        className="isotope-layout"
        data-default-filter="*"
        data-layout="masonry"
        data-sort="original-order">
        <ul
          className="portfolio-filters isotope-filters">
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
          className="row gy-4 isotope-container">
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"  style={{width:"350px", height:"230px"}}>
            <div className="portfolio-content h-100">
              <img
                src="public\Assets\assets\image\h1.jpg"
                className="img-fluid"
                alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product"   style={{width:"350px", height:"230px"}}>
            <div className="portfolio-content h-100">
              <img
                src="public\Assets\assets\image\h2.webp"
                className="img-fluid"
                alt=""/>
              <div className="portfolio-info">
                <h4>Product 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"   style={{width:"350px", height:"230px"}}>
            <div className="portfolio-content h-100">
              <img
                src="public\Assets\assets\image\h3.webp"
                className="img-fluid"
                alt=""/>
              <div className="portfolio-info">
                <h4>Branding 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books"   style={{width:"350px", height:"230px"}}>
            <div className="portfolio-content h-100">
              <img
                src="public\Assets\assets\image\h4.webp"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Books 1</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"   style={{width:"350px", height:"230px"}}>
            <div className="portfolio-content h-100">
              <img
                src="public\Assets\assets\image\h5.webp"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product "   style={{width:"350px", height:"230px"}}>
            <div className="portfolio-content h-100">
              <img src="public\Assets\assets\image\h6.webp"
                className="img-fluid"
                alt=""/>
              <div className="portfolio-info">
                <h4>Product 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding"   style={{width:"350px", height:"230px"}}>
            <div className="portfolio-content h-100">
              <img
                src="public\Assets\assets\image\h7.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Branding 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books"   style={{width:"350px", height:"230px"}}>
            <div className="portfolio-content h-100">
              <img
                src="public\Assets\assets\image\h8.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>Books 2</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          {/* End Portfolio Item */}
          <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app"   style={{width:"350px", height:"230px"}}>
            <div className="portfolio-content h-100">
              <img
                src="public\Assets\assets\image\h9.jpeg"
                className="img-fluid"
                alt=""
              />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
        </div>
        {/* End Portfolio Container */}
      </div>
    </div>
  </section>
  {/* /Portfolio Section */}

  {/* Contact Section */}
  <section id="contact" className="contact section">
    {/* Section Title */}
    <div className="container section-title"  >
      <h2>Contact</h2>
      <p>Contact Us</p>
    </div>
    {/* End Section Title */}
    <div className="container"    >
      <div className="row gy-4">
        <div className="col-lg-6 ">
          <div className="row gy-4">
            <div className="col-lg-12">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center"
                 
                 
              >
                <i className="bi bi-geo-alt" />
                <h3>Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-telephone" />
                <h3>Call Us</h3>
                <p>+1 5589 55488 55</p>
              </div>
            </div>
            {/* End Info Item */}
            <div className="col-md-6">
              <div
                className="info-item d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-envelope" />
                <h3>Email Us</h3>
                <p>info@example.com</p>
              </div>
            </div>
            {/* End Info Item */}
          </div>
        </div>
        <div className="col-lg-6">
          <form
            action="forms/contact.php"
            method="post"
            className="php-email-form" >
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required=""/>
              </div>
              <div className="col-md-6 ">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"
                  required=""/>
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  required=""/>
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows={4}
                  placeholder="Message"
                  required=""
                  defaultValue={""}/>
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