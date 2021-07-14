import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlockContent from '@sanity/block-content-to-react';
import { urlFor } from "../utils/tools";


const Section3 = ({content,slider})=>{


    const overrides = {
        normal: props => <span className="Label" {...props} />,
        h5: props => <span className="value" {...props} />,
      }
      
      const serializers = {
        types: {
          block: props =>
            // Check if we have an override for the “style”
            overrides[props.node.style] 
              // if so, call the function and pass in the children, ignoring
              // the other unnecessary props
              ? overrides[props.node.style]({ children: props.children })
      
              // otherwise, fallback to the provided default with all props
              : BlockContent.defaultSerializers.types.block(props),
        }
      }


console.log("section3" ,slider)
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button
            className={className}
            style={{ ...style,  backgroundImage: `url(/images/arrows.png)`,
                position: 'absolute',
                right: '-50px',
                height: '32px',
                width: '32px', }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <button
            className={className}
            style={{ ...style,  backgroundImage: `url(/images/arrows.png)`,
                position: 'absolute',
                left: '-50px',
                height: '32px',
                transform: 'rotate(180deg)',
                width: '32px', }}
            onClick={onClick}
          />
        );
      }

    const settings = {
        autoplaySpeed: 3000,
        centerMode: false,
        cssEase: 'linear',
        centerPadding: '60px',
        accessibility: false,
        slidesToShow: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '30px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: '30px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    slidesToShow: 1
                }
            }
        ]
      };

      const showrating = (rating)=>{
          switch (rating) {
              case 5:
                 return  <>
                      <label htmlFor="star5" title="text">5 stars</label>
                 {/* <input className="star-inner" type="radio" id="star5" name="rate" value="5" /> */}
               <label htmlFor="star5" title="text">5 stars</label>
               {/* <input className="star-inner" type="radio" id="star4" name="rate" value="4" /> */}
               <label htmlFor="star4" title="text">4 stars</label>
               {/* <input className="star-inner" type="radio" id="star3" name="rate" value="3" /> */}
               <label htmlFor="star3" title="text">3 stars</label>
               {/* <input type="radio" id="star2" name="rate" value="2" /> */}
               <label htmlFor="star2" title="text">2 stars</label>
               {/* <input type="radio" id="star1" name="rate" value="1" /> */}
               <label htmlFor="star1" title="text">1 star</label>
             </>         
              case 4:
                  return <>
                      {/* <input className="star-inner" type="radio" id="star5" name="rate" value="5" /> */}
                    <label htmlFor="star5" title="text">5 stars</label>
                    {/* <input className="star-inner" type="radio" id="star4" name="rate" value="4" /> */}
                    <label htmlFor="star4" title="text">4 stars</label>
                    {/* <input className="star-inner" type="radio" id="star3" name="rate" value="3" /> */}
                    <label htmlFor="star3" title="text">3 stars</label>
                    {/* <input type="radio" id="star2" name="rate" value="2" /> */}
                    <label htmlFor="star2" title="text">2 stars</label>
                    {/* <input type="radio" id="star1" name="rate" value="1" /> */}
                    <label htmlFor="star1" title="text">1 star</label>
                  </>
                case 3:
                    return <>
                     <label htmlFor="star5" title="text">5 stars</label>
                    {/* <input className="star-inner" type="radio" id="star4" name="rate" value="4" /> */}
                    <label htmlFor="star4" title="text">4 stars</label>
                    {/* <input className="star-inner" type="radio" id="star3" name="rate" value="3" /> */}
                    <label htmlFor="star3" title="text">3 stars</label>
                    {/* <input type="radio" id="star2" name="rate" value="2" /> */}
                    <label htmlFor="star2" title="text">2 stars</label>
                    </>
                case 2:
                    return <>
                     <label htmlFor="star5" title="text">5 stars</label>
                    {/* <input className="star-inner" type="radio" id="star4" name="rate" value="4" /> */}
                    <label htmlFor="star4" title="text">4 stars</label>
                    {/* <input className="star-inner" type="radio" id="star3" name="rate" value="3" /> */}
                    <label htmlFor="star3" title="text">3 stars</label>
                    </>
                case 1:
                    return <>
                        <label htmlFor="star5" title="text">5 stars</label>
                    {/* <input className="star-inner" type="radio" id="star4" name="rate" value="4" /> */}
                    <label htmlFor="star4" title="text">4 stars</label>
                    </>
          }
      }



    return(
        <>
         <section className="section products new">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 section-head text-center">
                        <h2 className="heading"><BlockContent blocks={content[0]} /></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="wrapper col-12">
                       
                            <Slider className="row products-slider" {...settings}>
                                {slider.map((product,i)=>(
                                    <div key={i} className="col-md-4">
                                
                                    <div className="Card">
                                        <div className="card-thumb">
                                           { product.mainimage && <img src={urlFor(product?.mainimage)} alt="" />}
                                        </div>
                                       <p className="feature-tag">{product?.imagetext}</p>
                                        <div className="card-content">
                                            <h5 className="cardTitle">{product?.companyname}</h5>
                                            <p className="cardDisc txt-light txt-light">{product?.companytype}</p>
                                            <div className="Card-footer">
                                                <div className="rate">
                                                    {product.rating && showrating(product.rating)}
                                                
                                                  </div>
                                                {/* <div className="follower txt-light"> */}
                                                    {/* <span className="value">1.2k</span>
                                                    <span className="Label">followers</span> */}
                                                   {product.followers && <BlockContent blocks={product?.followers} serializers={serializers} className="follower txt-light"/>}
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                                ))}
                            </Slider>
                        
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Section3;
