import './TourCard.css'

function TourCard({ nombre, duracion, precio }) {
    return (
        <article className="tour-card">
            <h3>{nombre}</h3>
            <p>{duracion}</p>
            <p>Desde {precio}</p>
        </article>
    )
}

export default TourCard