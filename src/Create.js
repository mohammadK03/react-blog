import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ content, setContent ] = useState('');
    const [ author, setAuthor ] = useState('mohammad');
    const [ isLoading, setIsLoading ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title,
            content,
            author
        };

        setIsLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            console.log('New Blog Added!');
            history.push('/');
        });
    }

    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => {setTitle(e.target.value)}}/>
                <label>Blog Content</label>
                <textarea 
                required
                value={content}
                onChange={(e) => { setContent(e.target.value) }}/>
                <label>Blog Author</label>
                <select
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}>
                    <option value="mario">Mario</option>
                    <option value="mohammad">Mohammad</option>
                </select>
                { isLoading ? <button disabled>Adding Blog...</button> : <button>Add Blog</button> }

                <p>{title}</p>
                <p>{content}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;