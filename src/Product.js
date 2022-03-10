//Our component we'll use to represent each individual product.
import {Img} from './Img'

export const Product = (props) => {
    const {
        name,
        images,
        description,
        features,
        price,
        stockLevel
    }= props.product



    return (
        <article className="product">
            <h3>{name}</h3>
            <div>
                {images.map(image => <Img key={image.imageId} image={image} stock={stockLevel} />)}
            </div>
            <p>
                {description}
            </p>
            <ul>
            {features.map(function(item, i) {
                return <li key={i}>{item}</li>   
            })}
            </ul>
            <p>&pound;{price}</p>
            <div className="promo-blocks__actions">
                <a className="button--anchor">
                Full Details
                </a>        
                <button>
                Add to cart
                </button>
            </div>            
        </article>
    )
}