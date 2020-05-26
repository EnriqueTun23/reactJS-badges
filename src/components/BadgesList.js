import React from 'react';
import { Link } from 'react-router-dom';
// style
import './styles/BadgesList.css';
// component
import Gravatar from './Gravatar'

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
                
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('')
    const [fiteredBadges, setfiteredBadges] = React.useState(badges)

 React.useMemo(() => {
      const result = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
      });
      setfiteredBadges(result)
    }, [badges, query]); 

    return {query, setQuery, fiteredBadges}
}


function BadgesList (props){
    const badges = props.badges

    const {query, setQuery, fiteredBadges} = useSearchBadges(badges)
    

    if(fiteredBadges.length === 0) {
     return( <div>
        <div className="form-group">
          <label>Filtrar</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <h3>No encontramos ningún badge</h3>
        <Link className="btn btn-primary" to="/react/badges/new">
          Crea un nuevo badge
        </Link>
      </div>
     ) 
    }
    return (
      <div className="BadgesList">
        <div className="form-group">
          <label>Filtrar</label>
          <input type="text" className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
            }}
          />
        </div>
        <ul className="list-unstyled">
          {fiteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                {/* <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/edit`}>
                  <BadgesListItem badge={badge} />
                </Link> */}
                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
          
        </ul>
      </div>
    );
}

export default BadgesList;
