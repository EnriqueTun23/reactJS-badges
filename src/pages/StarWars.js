// import REact
import React from 'react';
// import css
import './styles/starWars.css';


class StarWars extends React.Component {
    
    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data:{
           results: [],
        }
    }

    componentDidMount(){
        this.fetchCharacters()
    }
    fetchCharacters = async () => {
        this.setState({loading: true, error: null})

        try {
            const response = await fetch(`https://swapi.dev/api/people/?page=${this.state.nextPage}`)
            const data = await response.json()
            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(
                        this.state.data.results, data.results
                    )
                },
                nextPage: this.state.nextPage + 1
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }
    
    render() {
        return (
        <React.Fragment>
            {this.state.data.results.map(personaje => (
                <div className="card mb-3" key={personaje.name} style={{maxWidth: 540 +'px'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src="..." className="card-img" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{personaje.name}</h5>
                            <p className="card-text">
                                <b>Peso:</b> <span>{personaje.mass}</span>
                                <br></br>
                                <b>Altura:</b> <span>{personaje.height}</span>
                                <br></br>
                                <b>Fecha de cumple:</b> <span>{personaje.birth_year}</span>
                                <br></br>
                                <b>Genero:</b> <span>{personaje.gender}</span>

                            </p>
                            <p className="card-text"><small className="text-muted"></small></p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            {this.state.loading && (
                <div className="spinner-border" style={{width: 3+'rem', height: 3+'rem'}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )}
            {!this.state.loading && (
                <button className="btn btn-primary btn-lg btn-block" onClick={() => this.fetchCharacters()}>
                    Más
                </button>
            )}
        </React.Fragment>
        )
    }
}


export default StarWars