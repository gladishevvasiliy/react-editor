import * as React from 'react'
// @ts-ignore
import { Card, Collapse } from 'react-bootstrap'
import ListOfSymbols from '../ListOfSymbols'
import './style.css'

class CategoryOfSymbols extends React.Component {
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
      symbols,
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
            <ListOfSymbols
              symbols={symbols}
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

export default CategoryOfSymbols
