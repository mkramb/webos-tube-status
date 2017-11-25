import React from 'react'
import PropTypes from 'prop-types'

export const StatusItem = ({ name, status }) => (
  <li class="status-item">
    <span>
      { !status && 'Uknown' }
      { status && status }
    </span>
    <span>{ name }</span>
  </li>
)

StatusItem.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}
