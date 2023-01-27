import {useState} from 'react'
import * as articlesService from '../../utilities/articles-services'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import './Article.css'

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
        <Card style={{ width: '50rem', height: 'auto' }}>
            <Card.Img variant='top' />
            <Card.Body>
                <a href={link}> 
                    <div style={{"background": `url(${img}) no-repeat center center`, "WebkitBackgroundSize": "cover", "padding": "50px",}}> 
                    <h1 className='text'>{title}</h1>
                    </div>
                </a>
            </Card.Body>
        </Card>
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.Group>
          <FloatingLabel controlId='floatingInput' label="Add Note" className='mb-3' >
            <Form.Control type="text" name="notes" value={note.notes} onChange={handleChange} />
          </FloatingLabel>
          <Button variant="primary" type="submit">{saved ? 'Saved' : 'Add Note'}</Button>
            </Form.Group>
        </Form>
    </div>
    )
}

{/* <a href={link}> 
<div style={{"background": `url(${img}) no-repeat center center`, "WebkitBackgroundSize": "cover", "padding": "50px",}}> 
<h1>{title}</h1>
</div>
</a> */}