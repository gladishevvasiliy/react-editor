import * as React from 'react'
import { Alert } from 'react-bootstrap'
import { STATUS } from '../../../res/constants'

const AlertResponseStatus = status => {
  switch (status) {
    case STATUS.SUCCESS: {
      return (
        <Alert key="alert-response" variant="primary">
          Знамя успешно добавлено.
        </Alert>
      )
    }
    default:
      break
  }
}

export default AlertResponseStatus
