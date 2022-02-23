import { useContext, useState } from 'react';
import { CartContext } from '../Cart/CartContext';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Checkout.css';
import InsertDB from "../../utils/firebase/insert";
import { Timestamp } from "firebase/firestore";

const Checkout = () => {
    let cart = useContext(CartContext);
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [formValues, setFormValues] = useState({"nombre": "", "email": "", "telefono": ""});


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }
        setValidated(true);
        console.log(formValues);

        let items_doc = cart.cartList.map((itemCart) => {
            return {"id": itemCart.item.id, "price": parseFloat(itemCart.item.cost), "quantity": parseInt(itemCart.quantity), "title": itemCart.item.name}
        });

        let doc = {
            "buyer": {"email": formValues["email"], "name": formValues["nombre"], "phone": formValues["telefono"]},
            "items": items_doc,
            "total": parseFloat(cart.total),
            "date": Timestamp.fromDate(new Date())
        }

        console.log(doc);
        InsertDB(doc, "orders")
            .then(result => {
               console.log(result); navigate('/', {replace: true});
            })
            .catch(error => console.log(error));
    };

    const onChange = (event) => {
        event.preventDefault();
        formValues[event.target.name] = event.target.value;
        setFormValues(formValues);
    };


    return (
        <div className="ml-2 form-checkout">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
        </div>
    );
}

export default Checkout;