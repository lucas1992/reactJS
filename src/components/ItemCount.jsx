import { Button } from 'react-bootstrap';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function ItemCount() {
  return (
    <>
        <ButtonGroup className="ml-1">
          <Button variant="dark">
            {" "}
            <RemoveIcon fontSize="small" />
          </Button>
          <label>1</label>
          <Button variant="dark">
            {" "}
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
        <Button className="ml--2" variant="primary">Agregar al carrito</Button>
    </>
  );
}

export default ItemCount;