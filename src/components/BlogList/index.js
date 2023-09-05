// Write your JS code here
import BlogItem from '../BlogItem/index'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(eachBlog => (
        <li key={eachBlog.id}>
          <BlogItem each={eachBlog} />
        </li>
      ))}
    </ul>
  )
}

export default BlogList
