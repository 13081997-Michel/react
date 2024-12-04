import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Query } from 'appwrite'
import { useState, useEffect } from 'react'

export function Home( props ) {
    const [ data, setData ] = useState([])
    const [ loaded, setLoaded ] = useState( false )
    document.title = "The best drinks in town"

    const database = props.db
    const storage = props.str
    // function  to get data
    const getData = async () => {
        const result = await database.listDocuments(
            '6746d55f003b2e02e1ad', // database id 
            '6746d753000f5e3f8e94', // collection id
            []
        )
        setData( result.documents )
        setLoaded( true )
    }

    useEffect( () => { getData() }, [data] )

    const ProductCollection = data.map( (p) => {
        // return each product as a Col
          // get preview of image
        const imgURL =  storage.getFileView(
            '674ff57800106a72e211', //bucket ID
            p.images // file ID
        )  
        return (
        <Col md={3}>
            <img className="img-fluid "src={ imgURL }/>
            <h3>{ p.name }</h3>
            <h5>{ p.price }</h5>
            <p>{ p.description }</p>
        </Col>
        )
    } )
        
    return(
        <Container>
            <Row>
                <Col>
                    <h2>Home</h2>
                </Col>
            </Row>
            <Row>{ ProductCollection }</Row>
        </Container>
    )
}