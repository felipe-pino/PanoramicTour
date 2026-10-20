import Header from './components/Header'
import TourCard from './components/TourCard'



const tours = [
  { id: 1, nombre: 'Gran Tour Marruecos', duracion: '8 días - 7 noches', precio: '1.092', imagen: 'https://panoramictour.cl/wp-content/uploads/pexels-henrik-lebotos-3878114-700x500.jpg' },
  { id: 2, nombre: 'Gran Tour de Túnez', duracion: '8 días - 7 noches', precio: '1.068', imagen: 'https://panoramictour.cl/wp-content/uploads/tunez2-700x500.jpg' },
  { id: 3, nombre: 'Aurora Boreal 2027', duracion: '11 días - 10 noches', precio: '4.070', imagen: 'https://panoramictour.cl/wp-content/uploads/aurora-boreal-2027-700x500.jpg' },
]
function App() {
  return (
      <>
        <Header />
        <main>
          <h1>Nuestros destinos</h1>
            <div className="tour-grid">
          {tours.map((tour) => (
              <TourCard
                  key={tour.id}
                  nombre={tour.nombre}
                  duracion={tour.duracion}
                  precio={tour.precio}
                  imagen={tour.imagen}
              />
          ))}
            </div>
        </main>
      </>
  )
}

export default App