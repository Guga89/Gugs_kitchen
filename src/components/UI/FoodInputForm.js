


const FoodForm = () => {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Choose author')
    const [isLoading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        setLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
            .then(() => {
                console.log('blog succesfully uploadedg')
                setLoading(false)
                // history.go(-1) //will redirect to the previous page before the creat form
                history.push('/')
            })

    }


    return (
        <div className="create">
            <h1>Add new meal</h1>
            <form onSubmit={handleSubmit}>
                <div className="title">
                    <label htmlFor="title">Enter the title</label>
                    <input type="text" id="title" name="title" required value={title} onChange={e => setTitle(e.target.value)} />

                </div>
                <div className="blog">
                    <label htmlFor="blog">Content of the blog</label>
                    <textarea name="body" id="blog" cols="30" rows="5" required value={body} onChange={e => setBody(e.target.value)}></textarea>
                </div>
                <div className="author">
                    <label htmlFor="author">Written by</label>
                    <select name="author" id="author" value={author} onChange={e => setAuthor(e.target.value)}>
                        <option value="Mario">Mario</option>
                        <option value="Guga">Guga</option>
                        <option value="Choose author">Choose author</option>
                        <option value="Maralka">Maralka</option>
                    </select>
                </div>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button>Adding new blog...</button>}
            </form>
        </div>
    );
}

export default FoodForm;