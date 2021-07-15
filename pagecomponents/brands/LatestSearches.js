import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestSearches = () => {

    const settings = {
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        centerPadding: '10px',
        speed:2000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    centerPadding: '15px',
                    autoplay: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    centerPadding: '15px',
                    autoplay: true,
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <section className="section pt-0 latest-search-section new">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2>Latest searches</h2>
                    </div>
                </div>
                <Slider className="row latest_search_slider" {...settings}>
                    <div className="col-md-3 search-card">
                        <img src="/images/search1.jpg" alt="" />
                        <p className="varified-strip">100% Verified</p>
                        <h6 className="title">AAC Textiles</h6>
                        <h5 className="catagory">Knitwear</h5>
                        <p className="timing">Sampling time 1 week</p>
                    </div>
                    <div className="col-md-3 search-card">
                        <img src="/images/search2.jpg" alt="" />
                        <p className="varified-strip">100% Verified</p>
                        <h6 className="title">Fibraselvagem</h6>
                        <h5 className="catagory">Jeans</h5>
                        <p className="timing">Sampling time 2 week</p>
                    </div>
                    <div className="col-md-3 search-card">
                        <img src="/images/search3.jpg" alt="" />
                        <p className="varified-strip">100% Verified</p>
                        <h6 className="title">Calvelex</h6>
                        <h5 className="catagory">Tops</h5>
                        <p className="timing">Sampling time 1 week</p>
                    </div>
                    <div className="col-md-3 search-card">
                        <img src="/images/search4.jpg" alt="" />
                        <p className="varified-strip">100% Verified</p>
                        <h6 className="title">Eustilija</h6>
                        <h5 className="catagory">Outerwear</h5>
                        <p className="timing">Sampling time 2 week</p>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default LatestSearches
