import React from 'react'
import picture from './flipbaseCart.png'

const Card = ({ data, index, handleClick, className }) => {
  return (
    <div className={`${className} closed cartBox`}>
      <img onClick={() => handleClick(index, data.id)} className="backside" alt="flipbase Logo" src={picture}/>
      <img alt={data.images.title} src={data.images.original.url}/>
    </div>
    )
}

export default Card
//
//
// <div key={i+"a"} id={i+"a"} className="closed cartBox">
//   <img src={picture} alt="flipbase logo" className="backside" onClick={this.openCart}/>
//   <img alt={i+"a"} src={source.images.original.url}/>
// </div>
