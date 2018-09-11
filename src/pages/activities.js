import React, { Component } from "react";
import ReactMarkdown from 'react-markdown';

class ActivitiesPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activities : this.props.content || []
    };
  }

  render() {
    return (
      <section id="tarif">
        <div className="ui centered grid" style={{margin:0, paddingTop: '50px'}}>
          <div className="ten wide column">

          <h1>Activités</h1>
          <h5>Chaque projet est personnel et différent, les tarifs indiqués ci-dessous ne sont que indicatif</h5>

          {this.state.activities.map(activity => (
            <div className="item" key={activity.node.id}>
              <div className="ui basic segment">

                <div className="ui left tiny statistic">
                  <div className="value">
                    {activity.node.name}
                  </div>
                </div>
                <div>
                  <ReactMarkdown source={activity.node.description} />
                </div>
                <p style={{'marginTop': '20px', 'fontStyle': 'italic'}}>
                  {activity.node.content}
                </p>
                <hr />

              </div>
            </div>
          ))}

          </div>

        </div>
      </section>
    )
  }

}

export default ActivitiesPage
