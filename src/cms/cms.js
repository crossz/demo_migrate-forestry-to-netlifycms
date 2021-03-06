import CMS from 'netlify-cms-app'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// // // // Initialize the CMS object
// CMS.init()

// // // // import AboutPagePreview from './preview-templates/AboutPagePreview'
// // // // import BlogPostPreview from './preview-templates/BlogPostPreview'
// // // // import ProductPagePreview from './preview-templates/ProductPagePreview'
// // // // import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('about-the-demo', AboutPagePreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)

// // // // Now the registry is available via the CMS object.
// // CMS.registerPreviewTemplate('index', IndexPagePreview)
// // CMS.registerPreviewTemplate('about', AboutPagePreview)
// // CMS.registerPreviewTemplate('products', ProductPagePreview)
// // CMS.registerPreviewTemplate('blog', BlogPostPreview)

// // var CategoriesControl = React.createClass({
// //     handleChange: function(e) {
// //       const separator = this.props.field.get('separator', ', ')
// //       this.props.onChange(e.target.value.split(separator).map((e) => e.trim()));
// //     },
  
// //     render: function() {
// //       const separator = this.props.field.get('separator', ', ');
// //       var value = this.props.value;
// //       return React.h('input', {
// //         id: this.props.forID,
// //         className: this.props.classNameWrapper,
// //         type: 'text',
// //         value: value ? value.join(separator) : '',
// //         onChange: this.handleChange,
// //       });
// //     },
// //   });
  
// // // var CategoriesPreview = createClass({
// // //   render: function() {
// // //     return h(
// // //       'ul',
// // //       {},
// // //       this.props.value.map(function(val, index) {
// // //         return h('li', { key: index }, val)
// // //       })
// // //     )
// // //   },
// // // })
  
// // // var schema = {
// // // properties: {
// // //     separator: { type: 'string' },
// // // },
// // // }

// // // CMS.registerWidget('categories', CategoriesControl, CategoriesPreview, schema)
// // CMS.registerWidget('categories', CategoriesControl)