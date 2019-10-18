import CMS from "netlify-cms-app"
import uploadcare from "netlify-cms-media-library-uploadcare"
import cloudinary from "netlify-cms-media-library-cloudinary"

import IndexPagePreview from "./preview-templates/IndexPagePreview"

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewStyle("../components/tailwind.css")

CMS.registerPreviewTemplate("index", IndexPagePreview)
// CMS.registerPreviewTemplate("about", AboutPagePreview)
// CMS.registerPreviewTemplate("products", ProductPagePreview)
// CMS.registerPreviewTemplate("blog", BlogPostPreview)
