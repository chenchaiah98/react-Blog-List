// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {each} = props
  return (
    <>
      <div>
        <div className="blog-heading">
          <div>
            <h1 className="heading-text">{each.title}</h1>
          </div>
          <div>
            <p className="text-grey">{each.publishedDate}</p>
          </div>
        </div>
        <div>
          <p className="text-grey">{each.description}</p>
        </div>
      </div>
      <hr className="hr" />
    </>
  )
}
export default BlogItem
