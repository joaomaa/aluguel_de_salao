import React from 'react'

const HallCard = ({id, name, local, image, priceday, tamanho, description}) => {
  return (
    <article>
        <p>{name}</p>
        <img src={image} alt={`Imagem do produto ${id}`} />
        <p>{local}</p>
        <p>{tamanho}</p>
        <p>{priceday}</p>
        <p>{description}</p>
    </article>
  )
}

export default HallCard