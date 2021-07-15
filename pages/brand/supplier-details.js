import BrandNav from "../../pagecomponents/brands/brandnav";
import Head from "next/head";

const SupplierDetailsBrand = ()=>{
    return(
        <>
       <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Indigo | Best company</title>
       </Head>
       <main id="dashboard">
        <BrandNav />
      
       <section className="supplier_page py-5">
        <div className="container">
          <div className="supplier_header mb-4">
            <div className="supplier_meta">
              <h4 className="supplier_title">AAC Textiles</h4>
              <p><i className="fas fa-star"></i> 4.8(85) <span>Blockchain Verified</span></p>
            </div>
            <div className="supplier_share">
            <a href="#"><img src="/images/share.svg" />&nbsp; Share</a>
            <a href="#"><img src="/images/save.svg" />&nbsp; Save</a>
            </div>
          </div>

          <div className="supplier_gallery">
           <div className="single_img">
             <img src="/images/95841460733161.png"/>
           </div>
           <div className="single_img">
            <img src="/images/89381460735039.png"/>
          </div>
          <div className="single_img">
            <img src="/images/7071461082898.png"/>
          </div>
          <div className="single_img">
            <img src="/images/4441460708019.png"/>
          </div>
          
          <div className="single_img">
            <img src="/images/3781460708017.png"/>
          </div>
          </div>

          <div className="row">
            <div className="col-md-8">
             <div className="supplier_meta_footer">
              <div className="left"><p>V. N. Famalicão, Portugal</p></div>
              <div className="right"><p><i className="fa fa-map-marker"></i> 20 min from Francisco Sá Carneiro airport</p></div>
             </div>
            </div>
            <div className="col-md-4">
              
            </div>
          </div>
        </div>
       </section>
       </main>
        </>
    )
}

export default SupplierDetailsBrand;