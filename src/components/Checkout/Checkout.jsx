import { useContext, useState } from 'react';
import { CartContext } from '../Cart/CartContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import './Checkout.css';
import InsertDB from "../../utils/firebase/insert";
import UpdateDB from "../../utils/firebase/update";
import { increment } from "firebase/firestore";
import { Timestamp } from "firebase/firestore";

const Checkout = () => {
    let cart = useContext(CartContext);
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [formValues, setFormValues] = useState({"nombre": "", "email": "", "telefono": ""});
    const [modal, setModal] = useState({"title": "", "body": ""});
    const [show, setShow] = useState(false);

    const handleClose = () => { setShow(false); navigate('/', {replace: true});};
    const handleShow = () => setShow(true);

    const updateStock = () => {
        cart.cartList.forEach((itemCart) => {
            UpdateDB(itemCart.item.id, "items", {"stock": increment(parseInt(itemCart.quantity)*-1)})
                .then(result => {})
                .catch(error => {
                   console.log(error);
                   setModal({"title": "Upps!! ocurrió un error!", "body": "Lo sentimos mucho, tu pedido ha sido descartado por un error."})
                   handleShow();
                });
        });

        cart.clear();


    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
          return;
        }
        setValidated(true);
        let items_doc = cart.cartList.map((itemCart) => {
            return {"id": itemCart.item.id, "price": parseFloat(itemCart.item.cost), "quantity": parseInt(itemCart.quantity), "title": itemCart.item.name}
        });

        let doc = {
            "buyer": {"email": formValues["email"], "name": formValues["nombre"], "phone": formValues["telefono"]},
            "items": items_doc,
            "total": parseFloat(cart.total),
            "date": Timestamp.fromDate(new Date())
        }
        InsertDB(doc, "orders")
            .then(result => {
               setModal({"title": "Pedido realizado!!", "body": "Guarda tu número de pedido para futuras consultas: " + result.id});
               updateStock();
               handleShow();
            })
            .catch(error => {
               console.log(error);
               setModal({"title": "Upps!! ocurrió un error!", "body": "Lo sentimos mucho, tu pedido ha sido descartado por un error."})
               cart.clear();
               handleShow();
            });
    };

    const onChange = (event) => {
        event.preventDefault();
        formValues[event.target.name] = event.target.value;
        setFormValues(formValues);
    };


    return (
        <div className="ml-2 form-checkout">
            <Form noValidate validated={validated} onSubmit={handleSubmit.bind(this)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" required placeholder="Enter email" name="email" onChange={onChange.bind(this)} />
                <Form.Text className="text-muted">
                  Nunca compartiremos su correo electrónico con nadie más.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control required type="text" name="nombre" placeholder="Nombre" onChange={onChange.bind(this)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Telefono</Form.Label>
                <Form.Control required type="text" name="telefono" placeholder="Telefono" onChange={onChange.bind(this)} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Finalizar
              </Button>
            </Form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{modal.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modal.body}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Volver a catalogo
                  </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );
}

export default Checkout;