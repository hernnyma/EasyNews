import {useState} from 'react'
import * as articlesService from '../../utilities/articles-services'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './UserArticle.css'

export default function UserArticle({title, link, img, note, idx, deleteArticle }) {
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
        deleteArticle(updateNote.id)
    }


    return (
    <div>
        <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" />
        <Card.Body>
        <a href={link}> 
            <div style={{"background": `url(${img}) no-repeat center center`, "WebkitBackgroundSize": "cover", "padding": "50px",}}> 
            <h1 className='text'>{title}</h1>
            </div>
        </a>
        </Card.Body>
        </Card>
        <h1>{updateNote.notes}</h1>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group>
            <FloatingLabel controlId='floatingInput' label="Update Note" className='mb-3'>
          <Form.Control type="text" name="notes" value={setUpdateNote.notes} onChange={handleNoteChange} />
          </FloatingLabel>
          </Form.Group>
          <Button variant="primary" type="submit">Update</Button>
        </Form>
        <Button variant='secondary' onClick={handleDeleteArticle}>Delete Article</Button>
    </div>
    )
}