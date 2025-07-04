import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardImg,
  CardBody,
  CardTitle
} from 'reactstrap';
import './estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Principal = () => {
  const [seccion, setSeccion] = useState('principal');
  const [modalOpen, setModalOpen] = useState(false);
  const [peliculaActiva, setPeliculaActiva] = useState(null);

const actores = [
  {
    titulo: 'Leonardo DiCaprio',
    imagen: 'https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg'
  },
  {
    titulo: 'Jim Carrey',
    imagen: 'https://d3d0lqu00lnqvz.cloudfront.net/media/media/111de525-816e-4162-a0ea-fa4b1b12f7ba.jpg'
  },
  {
    titulo: 'Johnny Depp',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA938rwNHaJhX9HiTsFPlxbjvqrs1NlOYFBQ&s'
  }
];




  const peliculas = [
    { titulo: 'HARRY POTTER', resumen: 'La saga de Harry Potter, escrita por J.K. Rowling, narra las aventuras de Harry, un joven mago que descubre su identidad y su destino al asistir al Colegio Hogwarts de Magia y Hechicería. La historia sigue su lucha contra Lord Voldemort, un mago oscuro que busca la inmortalidad y el poder, y la amistad con Ron Weasley y Hermione Granger.' },
    { titulo: 'INTERESTELAR', resumen: 'Un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí. La Tierra está llegando a su fin y este grupo necesita encontrar un planeta más allá de nuestra galaxia que garantice el futuro de la raza humana.' },
    { titulo: 'LA TUMBA DE LAS LUCIÉRNAGAS', resumen: 'En Japón, en 1945, durante un ataque aéreo americano en la ciudad de Kobe, el joven Seita y su pequeña hermana Setsuko, hijos de un oficial de la marina japonesa, no consiguen llegar a tiempo al refugio en el que su madre los espera. Después del bombardeo los dos hermanos buscan a su madre, y Seita la encuentra muy malherida en la escuela que ha sido convertida en un hospital. Poco después la madre muere y, tras una breve estancia en casa de su tía, ambos vagarán sin casa y sin rumbo.' },
    { titulo: 'LA TEORÍA DEL TODO', resumen: 'A los 21 años, Stephen, un brillante estudiante, recibe un desolador diagnóstico: una enfermedad neuronal motora atacará sus miembros y habilidades, dejándolo con una capacidad de movimiento y habla muy limitada, y una esperanza de vida de dos años.' },
    { titulo: 'UNA MENTE BRILLANTE', resumen: 'El genial matemático John Forbes Nash Jr. sufre de esquizofrenia, pero logra obtener el Premio Nobel de economía por su trabajo revolucionario en la teoría de juegos.' }
  ];

  const toggle = (index = null) => {
    if (modalOpen) {
      setModalOpen(false);
      setPeliculaActiva(null);
    } else {
      setModalOpen(true);
      setPeliculaActiva(index);
    }
  };

  return (
    <div className="contenedor-pagina">
      <table className="tabla-principal">
        <thead>
          <tr className="fila-titulo">
            <th colSpan="2" className="celda-titulo">
              CINEMATICA BOLIVIANA
            </th>
          </tr>
        </thead>

        <tbody>
          <tr className="fila-menu">
            <td colSpan="2">
              <Nav pills className="justify-content-center">
                <NavItem>
                  <NavLink
                    href="#"
                    active={seccion === 'principal'}
                    onClick={() => setSeccion('principal')}
                  >
                    Principal
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    active={seccion === 'peliculas'}
                    onClick={() => setSeccion('peliculas')}
                  >
                    Películas
                  </NavLink>
                </NavItem>
              </Nav>
            </td>
          </tr>

          <tr className="fila-contenido">
            <td colSpan="2" className="contenido">
              {seccion === 'principal' && (
                <table className="tabla-actores">
                  <tbody>
                    <tr>
                      {actores.map((actor, i) => (
                        <td key={i}>
                          <Card className="card-actor">
                            <CardImg top src={actor.imagen} alt={actor.titulo} />
                            <CardBody>
                              <CardTitle tag="h5">{actor.titulo}</CardTitle>
                            </CardBody>
                          </Card>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              )}

              {seccion === 'peliculas' && (
                <div className="peliculas">
                  {peliculas.map((peli, i) => (
                    <div key={i}>
                      <Button color="danger" onClick={() => toggle(i)}>
                        {peli.titulo}
                      </Button>
                    </div>
                  ))}

                  <Modal
                    isOpen={modalOpen}
                    toggle={() => toggle()}
                    className="modal-fullscreen-custom"
                  >
                    <ModalHeader toggle={() => toggle()}>
                      {peliculaActiva !== null ? peliculas[peliculaActiva].titulo : ''}
                    </ModalHeader>
                    <ModalBody>
                      {peliculaActiva !== null ? peliculas[peliculaActiva].resumen : ''}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={() => toggle()}>
                        Aceptar
                      </Button>
                      <Button color="secondary" onClick={() => toggle()}>
                        Cancelar
                      </Button>
                    </ModalFooter>
                  </Modal>
                </div>
              )}
            </td>
          </tr>

          <tr className="fila-footer">
            <td className="celda-footer-izq"><strong>CESAR DIEGO TICONA MONASTERIOS</strong></td>
            <td className="celda-footer-der"><strong>INF-122</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Principal;
