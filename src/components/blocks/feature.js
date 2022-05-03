import React from 'react'
import PreviewCompatibleImage from "../PreviewCompatibleImage";

const Feature = ({ block }) => (
  <section
    className={
      block.background
        ? `block-feature hero is-medium is-${block.background}`
        : 'block-feature hero is-medium'
    }
  >
    {console.log(block)}
    <div className="hero-body">
      <div className="container is-fluid">
        <div
          className={
            block.orientation && block.orientation === 'reverse'
              ? 'columns is-vcentered is-reversed'
              : 'columns is-vcentered'
          }
        >
          <div className="column is-one-half">
            {console.log(typeof block.image === "string")}
            {block.image && 
            typeof block.image === "string"
            ?  <PreviewCompatibleImage imageInfo={{image: block.image}} />
            :  <PreviewCompatibleImage imageInfo={block.image} />
              // <img
              //   alt={block.title}
              //   srcSet={block.image.childImageSharp.fluid.srcSet}
              // />
            }
          </div>
          <div className="column is-one-half">
            <div className="section">
              <h1 className="title is-3">{block.title}</h1>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: block.content }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Feature
