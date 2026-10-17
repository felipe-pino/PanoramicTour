import Header from './components/Header'
import TourCard from './components/TourCard'



const tours = [
  { id: 1, nombre: 'Gran Tour Marruecos', duracion: '8 días - 7 noches', precio: '1.092' },
  { id: 2, nombre: 'Gran Tour de Túnez', duracion: '8 días - 7 noches', precio: '1.068' },
  { id: 3, nombre: 'Aurora Boreal 2027', duracion: '11 días - 10 noches', precio: '4.070' },
]
function App() {
  return (
      <>
        <Header />
        <main>
          <h1>Nuestros destinos</h1>
          {tours.map((tour) => (
              <TourCard
                  key={tour.id}
                  nombre={tour.nombre}
                  duracion={tour.duracion}
                  precio={tour.precio}
              />
          ))}
        </main>
      </>
  )
}

export default App