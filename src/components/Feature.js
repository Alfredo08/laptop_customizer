import React, {Component} from 'react';

export default class Feature extends Component {
    render(){
        return (
            <li key={this.props.index} className="feature__item">
                <div className={this.props.featureClass}

                     onClick={this.props.updateFeature}>
                    { this.props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(this.props.item.cost) })
                </div>
            </li>
        )
    }
}


