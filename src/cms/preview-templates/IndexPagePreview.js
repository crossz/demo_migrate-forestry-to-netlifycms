import React from 'react'
import PropTypes from 'prop-types'
// import { IndexPageTemplate } from '../../templates/index-page'
// import PageContent from "../../components/Content";

// import blocks
import ThreeCol from '../../components/blocks/3col'
import Feature from '../../components/blocks/feature'
import Cta from '../../components/blocks/cta'
import Hero from '../../components/blocks/hero'

// ## convert N*2 array to key-value
// const constructObject = arr => {
//   return arr.reduce((acc, val) => {
//     const [key, value] = val;
//     acc[key] = value;
//     return acc;
//   }, {});
// };

export const IndexPageTemplate = ({ title, content }) => { 
  const blocks = content
  
  return (
    <section className="section page-content">
      <h1>
        {title}
      </h1>
      
      {blocks.map((block, i) => {
      // {blocks.map((block_it, i) => {
        // const block = constructObject(Array.from(block_it))
        switch (block.component) {
          case '3col':
            return <ThreeCol block={block} key={i} />
          case 'feature':
            return <Feature block={block} key={i} />
          case 'cta':
            return <Cta block={block} key={i} />
          case 'hero':
            return <Hero block={block} key={i} />
          default:
            return ''
        }
      })}
      
    </section>
  )
}

IndexPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()
  console.log(data)


  if (data) {
    // return (
    //   <IndexPageTemplate
    //     title={entry.getIn(['data', 'title'])}
    //     content={entry.getIn(['data', 'blocks'])}
    //     // content={widgetsFor('blocks')} // this will generate an iterator with complicated structure compared with 'collections'
    //     // image={getAsset(data.image)}
    //   />
    // )
    return (
      <IndexPageTemplate
        title={data.title}
        content={data.blocks}
        // image={getAsset(data.image)}
        // heading={data.heading}
        // subheading={data.subheading}
        // description={data.description}
        // intro={data.intro || { blurbs: [] }}
        // mainpitch={data.mainpitch || {}}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
