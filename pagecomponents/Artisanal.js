import { client } from "../utils/sanity";
import { urlFor } from "../utils/tools"
import BlockContent from '@sanity/block-content-to-react';
import { useEffect,useState } from "react";

const Artisanal = ({content})=>{

  const [btnlink,setbtnlink] = useState('')

  const overrides = {
    h2: props => <h2 className="heading" {...props} />,
    normal:props =><p className="title" {...props}></p>
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
    


  // const serializerslink = {
  //   marks: {  
  //     link: ({mark, children}) => {
  //       const { href } = mark
  //       return <a href={href} className="btn btn-hover btn-black">{children}</a>
  //     }
  //   }
  // }

  useEffect(async ()=>{
    const link = await client.fetch(`*[_type == "link" && _id =="${content.link._ref}"]`)
    setbtnlink(`/${link[0]?.slug?.current}`);
  },[]);


    return(
        <>
        <section className="section features artisanalExperiences">
            <div className="container-fluid ">
                <div className="row">
                    <div className="wrapper col-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section-head text-center">
                                        {content?.heading && <BlockContent blocks={content?.heading} serializers={serializers} />}
                                </div>
                                <div className="content">
                                {content?.subheading &&<BlockContent blocks={content?.subheading} serializers={serializers} />}
                                    
                                   <p className="sub_title">{content?.text}</p>

                                    <a href={btnlink} className="btn btn-hover btn-black">{content.buttontext}</a>

                                    {/* {content.link && <BlockContent blocks={content?.link} serializers={serializerslink} />} */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={urlFor(content?.mainImage)} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Artisanal;