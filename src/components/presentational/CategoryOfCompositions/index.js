import * as React from 'react'
// @ts-ignore
import { Card, Collapse } from 'react-bootstrap'
import ListOfCompositions from '../ListOfCompositions'
import './style.css'

class CategoryOfCompositions extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  render() {
    const { open } = this.state

    const {
      name,
      compositions,
      handleClick,
      handleClickRemoveButton,
      handleClickEditButton,
      categoryId,
    } = this.props
    return (
      <Card className="categoryOfSymbols">
        <Card.Header
          id={name}
          onClick={() => this.setState({ open: !open })}
          aria-controls={`${name}-collapse`}
          aria-expanded={open}
          className="category-tab"
        >
          {name}
        </Card.Header>
        <Collapse in={open}>
          <div id={`${name}-collapse`}>
            <ListOfCompositions
              compositions={compositions}
              handleClick={handleClick}
              handleClickRemoveButton={handleClickRemoveButton}
              handleClickEditButton={handleClickEditButton}
              categoryId={categoryId}
            />
          </div>
        </Collapse>
      </Card>
    )
  }
}

export default CategoryOfCompositions
