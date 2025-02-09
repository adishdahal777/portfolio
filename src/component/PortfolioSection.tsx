import { JSX } from "react";

function PortfolioSection(): JSX.Element {
    return (
        <>
            <section id="portfolio" className="portfolio section light-background">

                <div className="container section-title" data-aos="fade-up">
                    <h2>Portfolio</h2>
                </div>

                <div className="container">

                    <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                        <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            <li data-filter="*" className="filter-active">All</li>
                            <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-product">Product</li>
                            <li data-filter=".filter-branding">Branding</li>
                            <li data-filter=".filter-books">Books</li>
                        </ul>

                        <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Product 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Branding 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Books 1</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Product 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Branding 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Books 2</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>App 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/product-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Product 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/branding-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Branding 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                                <div className="portfolio-content h-100">
                                    <img src="assets/img/portfolio/books-3.jpg" className="img-fluid" alt="" />
                                    <div className="portfolio-info">
                                        <h4>Books 3</h4>
                                        <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        <a href="assets/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link"><i className="bi bi-zoom-in"></i></a>
                                        <a href="portfolio-details.html" title="More Details" className="details-link"><i className="bi bi-link-45deg"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default PortfolioSection;