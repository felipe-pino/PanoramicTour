import './TourCard.css'

function TourCard({ nombre, duracion, precio, imagen }) {
    return (
        <article className="tour-card">
            <img src={imagen} alt={nombre} />
            <h3>{nombre}</h3>
            <p>{duracion}</p>
            <p>Desde {precio}</p>
        </article>
    )
}

export default TourCard