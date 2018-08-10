import React, {Component} from 'react'
import PropTypes from 'prop-types'

export class Card extends Component {
  static propTypes = {
    contentFn: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string,
    href: PropTypes.string,
  }

  render() {
    const {contentFn, type, title, href} = this.props
    return (
      <a href={href} target={`${href ? '' : '_blank'}`}>
        <div className={`card ${type}`}>
          <div className={`card-title ${type}`}>
            <p className={`card-title-text ${type}`}>
              {title}
            </p>
          </div>
          <div className={`card-content ${type}`}>
            {contentFn()}
          </div>
        </div>
      </a>
    )
  }
}

export default Card
