import React from 'react'
import PropTypes from 'prop-types'
// import { AboutPageTemplate } from '../../templates/about-page'
import PageContent from "../../components/Content";

export const AboutPageTemplate = ({ title, content }) => {  
  return (
    // <section className="section section--gradient">
    //   <div className="container">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //         <div className="section">
    //           <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
    //             {title}
    //           </h2>
    //           <div className="content" content={content} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="section page-content">
      <div className="container article-header has-text-centered">
        <h1 className="title is-1">
          {title}
        </h1>
        <hr />
      </div>
      <main className="container content-container">
        {/* <div className="content">
          {content}
        </div> */}
        <PageContent className="content" content={content} />
      </main>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPagePreview = ({ entry, widgetFor }) => (
  <AboutPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
