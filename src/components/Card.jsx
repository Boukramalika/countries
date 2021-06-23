import React from 'react'

class Card extends React.Component {

    render() {
        return <div className="card" style={{ width:'30rem', margin: 'auto' }} >
            <img className="card-img-top" src={this.props.flag} alt="flag" />
            <h2>Country : {this.props.name}</h2>
            <h4>Capital : {this.props.capital}</h4>
            <div>
                <i className="bi bi-globe2"></i>
                Region : {this.props.region}
            </div>
            <div>
                <i className="bi-people-fill" />
                Population : {this.props.population}
            </div>
        </div>

    }
}
export default Card;