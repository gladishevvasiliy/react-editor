import * as React from 'react';
import { Category } from '../../../Models';
// @ts-ignore
import { Card, Collapse } from 'react-bootstrap';
import ListOfSymbols from '../ListOfSymbols';
import './style.css';

interface Props {
  handleClick: Function;
}

class CategoryOfSymbols extends React.Component<Category & Props> {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  render() {
    const { open } = this.state;
    const {
      name,
      symbols,
      handleClick,
      handleClickRemoveButton,
      handleClickEditButton,
      categoryId,
    } = this.props;
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
    );
  }
}

export default CategoryOfSymbols;

{
  /* <Card.Title>Special title treatment</Card.Title>
<Card.Text>
  With supporting text below as a natural lead-in to additional content.
</Card.Text>
<Button>Go somewhere</Button> */
}
