import React, { Component } from "react";
import ReactMarkdown from 'react-markdown'

class AgendaPage extends React.Component {

  constructor(props) {
    super(props);
    const content = this.props.content || [];
    const news = content.sort((a,b) => new Date(a.node.createdAt).getTime() - new Date(b.node.createdAt).getTime()).reverse();
    this.state = {
      latest : news[0] || {}
    };
  }

  render() {
    const latest = this.state.latest.node || {};
    const displayLastNews = (new Date(latest.startDate) <= new Date()) && (new Date(latest.endDate) >= new Date());
    if (displayLastNews) {
      return (
          <section className="ui fixed" style={{background: '#004275e6', color: 'white', padding: '20px 10px'}}>
            <div className="ui centered grid">
                <div className="twelve wide column">
                    <ReactMarkdown source={this.state.latest.node.content} />
                </div>
            </div>
          </section>
      )
    }

    return null;
  }

}

export default AgendaPage
