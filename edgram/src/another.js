import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import css from './style.scss'


class HelloWorld extends Component {
  render() {
    return(
      <main className="Main">
        <h2 className="Main-title">Hola Mundo con {this.props.name}, Webpack & Sass</h2>
      </main>
    )
  }
}

ReactDOM.render(
  <HelloWorld name="React" />,
  document.getElementById('root')
)
