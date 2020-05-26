// lib
import React from 'react';
import { Link } from 'react-router-dom'

// style
import './styles/BadgeDetails.css';
// Image
import platziconfLogoImage from '../images/platziconf-logo.svg';

// components
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';


// Las funciones no tienen un estado propio que manejar como ciclos de vida a los que deben suscribirse, mientras tanto las clases sí cuentan con ello.

// React tiene un feature llamado Hooks que permite que las funciones también tengan features que solamente tienen las clases.
//Hooks: Permiten a los componentes funcionales tener características que solo las clases tienen:
//useState: Para manejo de estado.
// useEffect: Para suscribir el componente a su ciclo de vida.
// useReducer: Ejecutar un efecto basado en una acción.
// Custom Hooks: Usamos los hooks fundamentales para crear nuevos hooks custom. Estos hooks irán en su propia función y su nombre comenzará con la palabra use. 
// Otra de sus características es que no pueden ser ejecutados condicionalmente (if).
function useIncrementarCount(max) {
    const [count, setCount] = React.useState(0)

    if (count >= max) {
        setCount(0)
    }

    return [count, setCount]
}


function BadgeDetail (props) {

    const [count, setCount] = useIncrementarCount(5);
    const badge = props.badge;
    return (
        <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={platziconfLogoImage} alt="Logo de la conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                 <h1>{badge.firstName} {badge.lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName={badge.firstName} lastName={badge.lastName} 
                            email={badge.email}
                            twitter={badge.twitter} jobTitle={badge.jobTitle}></Badge>
                        </div>
                        <div className="col">
                            <h2>Acciones</h2>
                            <div>
                                <button onClick={() => {
                                    setCount(count + 1)
                                }} className="btn btn-primary mb-4">
                                    Contador: {count}
                                </button>
                                <div>
                                    <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                    Editar
                                    </Link>
                                </div>
                                <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">
                                    Eliminar
                                 </button>
                                 <DeleteBadgeModal isOpen={props.modalIsOpen} onClose={props.onCloseModal} onDeleteBadge={props.onDeleteBadge}/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}


export default BadgeDetail