import React from 'react'
import PropTypes from 'prop-types'
import { StatusItem } from './status-item'

export const StatusList = ({ items = [] }) => (
  <ul class="status-list">
    { !items.length && 'Loading ...' }
    { items.map((item, index) => (
        <StatusItem
          key={index}
          name={item.name}
          status={item.status}
        />
      )
    ) }
  </ul>
)

StatusList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      status: PropTypes.string
    })
  ).isRequired
}