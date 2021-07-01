import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Landing");
  }
  async getHtml() {
    return `
        <!--HEADER START-->
        <div class="header">
          <div class="container-fluid">
            <nav class="navbar sticky-top bg-warning navbar-expand-lg navbar-light">
              <div class="logo-clickable nv-bar">
                <a href="/landing"><img src="static/images/logo.png" alt="logo" /></a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
    
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="/#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Categorias
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="/product-page">Oculos de Sol</a>
                      <a class="dropdown-item" href="/product-page">Oculos de Gral</a>
                      <div class="dropdown-divider"></div>
                    </div>
                  </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                  <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Buscar"
                    aria-label="Search"
                  />
                </form>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                  Buscar
                </button>
                <ul class="navbar-nav mr-auto" id="navbar-items-end">
                  <li class="nav-item">
                    <a class="nav-link" href="/carrinho">Carrinho</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/login">Entrar</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/signup">Cadastro</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <!--HEADER END-->
        <div class="mid-section-wrapper">
          <!--STORE SLIDESHOW -START-->
          <div id="mainPageCarousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li
                data-target="#mainPageCarousel"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#mainPageCarousel" data-slide-to="1"></li>
              <li data-target="#mainPageCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="static/images/slide1.jpg"
                  alt="Pic1"
                />
              </div>
              <div class="carousel-item ">
                <img
                  class="d-block w-100"
                  src="static/images/slide2.jpg"
                  alt="Pic2"
                />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="static/images/slide3.jpg" alt="Pic3" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href= "//#mainPageCarousel"
              role="button"
              data-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Anterior</span>
            </a>
            <a
              class="carousel-control-next"
              href= "//#mainPageCarousel"
              role="button"
              data-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Proximo</span>
            </a>
          </div>
          <!--STORE SLIDESHOW END-->
          <!--PRODUCT SHOWCASE START-->
          <div class="container product-block">
            <div class="container product-area">
              <div class="row justify-content-around">
                  <div class="col-6 col-md-4 product-frame">
                    <div class="imgbox">
                      <img width="200"  src="static/images/oculosnobg.png" alt="productimg">
                    </div>
                    <div class="contentbox">
                      <h3>Product Name</h3>
                      <h2 class="price">$69.99</h2>
                      <a href="/product-checkpage" class="buybtn">Comprar</a>
                    </div>
                  </div>
    
                <div class="col-6 col-md-4 product-frame">
                  <div class="imgbox">
                    <img width="200"  src="static/images/oculosnobg.png" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="/product-checkpage" class="buybtn">Comprar</a>
                  </div>
                </div>
                
                <div class="col-6 col-md-4 product-frame">
                  <div class="imgbox">
                    <img width="200"  src="static/images/oculosnobg.png" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="/product-checkpage" class="buybtn">Comprar</a>
                  </div>
                </div>
              </div>
              <div class="row justify-content-around">
                <div class="col-6 col-md-4 product-frame">
                  <div class="imgbox">
                    <img width="200"  src="static/images/oculosnobg.png" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="/product-checkpage" class="buybtn">Comprar</a>
                  </div>
                </div>
                <div class="col-6 col-md-4 product-frame">
                  <div class="imgbox">
                    <img width="200"  src="static/images/oculosnobg.png" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="/product-checkpage" class="buybtn">Comprar</a>
                  </div>
                </div>
                <div class="col-6 col-md-4 product-frame">
                  <div class="imgbox">
                    <img width="200"  src="static/images/oculosnobg.png" alt="productimg">
                  </div>
                  <div class="contentbox">
                    <h3>Product Name</h3>
                    <h2 class="price">$69.99</h2>
                    <a href="/product-checkpage" class="buybtn">Comprar</a>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
          <!--PRODUCT SHOWCASE END-->
        </div>
        <!--FOOTER-->
        <div class="footer">
          <div class="footer-content">
            <div class="footer-section about">
              <h1 class="logo">
                <div class="logo-clickable nv-bar">
                  <a href="/landing"
                    ><img src="static/images/logo.png" alt="logo"
                  /></a>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since
                  the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting, remaining essentially unchanged. It was popularised
                  in the 1960s with the release of Letraset sheets containing Lorem
                  Ipsum passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </h1>
            </div>
            <div class="footer-section links">
              <h2>Alguns links</h2><br>
              <ul>
                <a href="/#"><li>Link</li></a>
                <a href="/#"><li>Link</li></a>
                <a href="/#"><li>Link</li></a>
                <a href="/#"><li>Link</li></a>
                <a href="/#"><li>Link</li></a>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">&copy; rayboms.com | Designed by Group 10</div>
        </div>
        <!--//FOOTER-->
      </body>
    </html>
    `;
  }
}
