import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Loading = ({ size, className }) => (
  <FontAwesomeIcon icon="spinner" spin size={size} className={className} />
)

export default Loading
