import {useState} from 'react'
import * as articlesService from '../../utilities/articles-services'

export default function Article({title, link, img }) {
    const [note, setNote] = useState({
        header: title,
        articlelink: link,
        articleimg: img,
        notes: ''

    })
    const [saved, setSaved] = useState(false)


    // console.log(title)
    // console.log(link)
    // console.log(img)
    function handleChange(evt) {
        setNote({ ...note, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        console.log(note)
        const saved = await articlesService.saveArticle(note)
        console.log(saved)
        setSaved(saved)
    }


    return (
    <div>
        <a href={link}> 
            <div style={{"background": `url(${img}) no-repeat center center`, "WebkitBackgroundSize": "cover", "padding": "50px",}}> 
            <h1>{title}</h1>
            </div>
        </a>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Notes: </label>
          <input type="text" name="notes" value={note.notes} onChange={handleChange} />
          <button type="submit">{saved ? 'Saved' : 'Add Note'}</button>
        </form>
    </div>
    )
}