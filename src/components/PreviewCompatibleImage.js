import * as React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" };

  const { alt = "", childImageSharp, image } = imageInfo;

  // console.log('----==== in PreviewCompatibleImage ====----')
  // console.log('--== imageInfo: ', imageInfo)
  // console.log('--== image: ', image)
  // console.log('--== childImageSharp: ', childImageSharp)
  // console.log('--== srcSet: ', childImageSharp.fluid.srcSet)

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        style={imageStyle}
        alt={alt}
      />
    );
  } else if (!!childImageSharp) {
    return <img style={{imageStyle}} srcSet={childImageSharp.fluid.srcSet} alt={alt} />;
    // return (
    //     <GatsbyImage
    //       image={childImageSharp.gatsbyImageData}
    //       style={imageStyle}
    //       alt={alt}
    //     />
    //   );
      // for Netlify CMS 
  } else if (image) {
    return <img style={{imageStyle}} src={image} alt={alt} />;
  } else {
    return null
  }
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }),
};

export default PreviewCompatibleImage;
