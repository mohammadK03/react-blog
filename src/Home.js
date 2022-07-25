import BlogList from "./BlogList";
import useFetch from "./useFech";

const Home = () => {
    const { data: blogs, isLoading } = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            { isLoading && <div>Loading...</div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs!"></BlogList> }
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Filtered Blogs!"></BlogList> */}
        </div>
    );
}

export default Home;