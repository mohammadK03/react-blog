import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    return (
        <div className="bog-list">
            <h2>{ title }</h2>
            {
                blogs.map((blog, i) => {
                    return <div className="blog-preview" key={i}>
                        <Link to={`blogs/${blog.id}`}>
                            <h2> { blog.title } </h2>
                            <p>Written by { blog.author }</p>
                        </Link>
                    </div>
                })
            }
        </div>
    );
}
 
export default BlogList;