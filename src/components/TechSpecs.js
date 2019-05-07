import React, {Component} from 'react';
import Feature from './Feature';
export default class TechSpecs extends Component{


    render(){

        const features = Object.keys(this.props.features)
          .map(key => {
            return (
              <div className="feature" key={key}>
                  <div className="feature__name">{key}</div>
                  <ul className="feature__list">
                   { this.props.features[key].map((item, index) => {
                       const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
                       const featureClass = 'feature__option ' + selectedClass;
                       return(
                            <Feature selectedClass={selectedClass}
                                     item={item}
                                     index={index}
                                     featureClass={featureClass}
                                     key={index}
                                     updateFeature={(e) => this.props.updateFeature(key, item)}/>
                       )
                     })
                   }
                  </ul>
                </div>)
          });   

        return(
            <div>
                <section className="main__form">
                <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
                { features }
                </section>
            </div>
        )
    }
}
