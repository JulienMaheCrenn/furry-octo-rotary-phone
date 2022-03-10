import {useState} from "react"


export const Img = props => {
    const {
        imageSrc,
    }= props.image

    const [title, setTitle] = useState('')
    const [stock, setStock] = useState('')
    const [heart, setHeart] = useState(false)

    const overlayStyles = {
        position: 'absolute',
        bottom: '.5rem',
        left: '.5rem',
        fontSize: '2rem'
    }

    const stockStyles = {
        position: 'absolute',
        top: '.5rem',
        right: '.5rem',
        fontSize: '2rem'
    }

    const showInfo = () => {
        setTitle(props.image.title)
        setStock(`Stock: ${props.stock}`)
    }
    const hideInfo =() => {
        setTitle('')
        setStock('')
    }


    return (
        <figure style={({position: "relative"})} 
        onClick={() => setHeart(!heart)}
        onMouseEnter={showInfo}
        onMouseLeave={hideInfo}
        >
            <img src={imageSrc} alt={props.image.title} />
            <figcaption style={overlayStyles}>{heart ? '👙' : ''} {title}</figcaption>
            <figcaption style={stockStyles}>{stock}</figcaption>
        </figure>
        
    )
}