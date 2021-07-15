import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const EcoSection = () => {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed:4000,
        accessibility: false,
        infinite: true,
        prevArrow: '<span class="prev"><i class="fal fa-long-arrow-alt-left"></i></span>',
              nextArrow: '<span class="next"><i class="fal fa-long-arrow-alt-right"></i></span>',
        dots: true,
        arrows: false
    }

    return (
        <section className="section eco-responsible-section pt-0">
            <div className="container-fluid">
                <Slider className="row eco-slider" {...settings}>
                    <div className="col-12">
                        <div className="img-thumb">
                        <img src="/images/suppliers1.jpg" alt=""/>
                        </div>
                        <div className="content">
                        <h2>
                            The new standard in eco-responsible viscose
                        </h2>
                        <a href="#" className="show-supplier-btn">Show suppliers</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="img-thumb">
                        <img src="/images/suppliers1.jpg" alt="" />
                        </div>
                        <div className="content">
                        <h2>
                            The new standard in eco-responsible viscose
                        </h2>
                        <a href="#" className="show-supplier-btn">Show suppliers</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="img-thumb">
                        <img src="/images/suppliers1.jpg" alt="" />
                        </div>
                        <div className="content">
                        <h2>
                            The new standard in eco-responsible viscose
                        </h2>
                        <a href="#" className="show-supplier-btn">Show suppliers</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="img-thumb">
                        <img src="/images/suppliers1.jpg" alt="" />
                        </div>
                        <div className="content">
                        <h2>
                            The new standard in eco-responsible viscose
                        </h2>
                        <a href="#" className="show-supplier-btn">Show suppliers</a>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default EcoSection
