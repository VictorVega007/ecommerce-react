import './ItemDetail.css'
import '../ItemCount/ItemCount.css'
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({name, img, category, description, price, stock}) => {
    
    const [quantity, setQuantity] = useState(0); 

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`)
        setQuantity(quantity);
      }

    return (
        
        <div className='ItemContainer'>
            <div className='CardItemDetail'>
                <div className='Detail'>
                    <h1>Detalle</h1>
                </div>
                <div className='Picture'>
                    <img className = 'DetailImg' src = {img} alt = {name} />
                </div>
                    <h3 className = 'Props'>{name}</h3>
                    <p className = 'Props'>{category}</p>
                <div className='DescriptionContainer'>
                    <h3>Descripción del Producto</h3>
                    <p>{description}</p>
                </div>
                <div className='Price'>
                    <p>Precio</p>
                    <p>USD {price}</p>
                </div>
                { quantity > 0 ? <Link className='Link' to='/cart'>Ir al carrito de compra </Link> : <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} /> }
            </div>
        </div>
    )
}

export default ItemDetail;