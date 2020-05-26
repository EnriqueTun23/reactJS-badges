// libreria 
import React  from 'react';

// components
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
// pages
import BadgeDetail  from '../pages/BadgeDetail';
// api
import api from '../api';

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
    }
    componentDidMount() {
        this.cargarData()
    }

    cargarData = async () => {
        this.setState({loading: true, error:null})

        try {
            const data = await api.badges.read( this.props.match.params.badgeId)
            this.setState({data: data, loading:false})
        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }
    handleAbrirModal = e => {
        this.setState({
            modalIsOpen: true
        })
    }

    handleCerrarModal = e => {
        this.setState({
            modalIsOpen: false
        })
    }
    handleEliminarBadge = async e => {
        this.setState({
            loading: true, error:null
        })
        try {
            await api.badges.remove(this.props.match.params.badgeId)

            this.props.history.push('/badges')
            this.setState({loading: false})
        } catch (error) {
            this.setState({error:error, loading:false})
        }   
    }

    render() {
        if(this.state.loading) {
            return <PageLoading></PageLoading>
        }

        if (this.state.error) {
            return <PageError error={this.state.error}></PageError>
        }
 

        return (
            <BadgeDetail 
            onCloseModal={this.handleCerrarModal} 
            onOpenModal={this.handleAbrirModal}
            modalIsOpen={this.state.modalIsOpen}
            onDeleteBadge={this.handleEliminarBadge}
            badge={this.state.data} ></BadgeDetail>
        );
    }
}


export default BadgeDetailsContainer