import {useState} from 'react'
import * as articlesService from '../../utilities/articles-services'

export default function UserArticle({title, link, img, note, idx }) {
    const [updateNote, setUpdateNote] = useState({
        id: idx,
        notes: note
    })

    // const [saved, setSaved] = useState(false)


    // console.log(title)
    // console.log(link)
    // console.log(img)
    function handleNoteChange(evt) {
        setUpdateNote({ ...updateNote, [evt.target.name]: evt.target.value });
    }

    async function handleSubmit(evt) {
        evt.preventDefault()
        const updated = await articlesService.updateNote(updateNote)
        console.log(updated)
        setUpdateNote(updated)
    }

    async function handleDeleteArticle() {
        await articlesService.deleteArticle(updateNote.id)
    }


    return (
    <div>
        <a href={link}> 
            <div style={{"background": `url(${img}) no-repeat center center`, "WebkitBackgroundSize": "cover", "padding": "50px",}}> 
            <h1>{title}</h1>
            </div>
        </a>
        <h1>{updateNote.notes}</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Update Note: </label>
          <input type="text" name="notes" value={setUpdateNote.notes} onChange={handleNoteChange} />
          <button type="submit">Update</button>
        </form>
        <button onClick={handleDeleteArticle}>Delete Article</button>
    </div>
    )
}