function TourCard({ nombre, duracion, precio }) {
    return (
        <article>
            <h3>{nombre}</h3>
            <p>{duracion}</p>
            <p>Desde {precio}</p>
        </article>
    )
}

export default TourCard