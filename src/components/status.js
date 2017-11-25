import React from 'react'
import PropTypes from 'prop-types'
import { lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { StatusList } from './status-list'
import { itemsFetch } from '../actions'

const mapStateToProps = state => ({
  items: state.items
})

const mapDispatchToProps = dispatch => ({
  onLoad: () => dispatch(itemsFetch())
})

const StatusListWithActions = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  }
})(StatusList);

export const StatusConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusListWithActions)
