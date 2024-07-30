import { Button, Card, CardBody, CardTitle } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemprops ={
    id : number;
    name : string;
    price : number;
    imageUrl : string;
}

export function StoreItem({id, name, price, imageUrl}:StoreItemprops){
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    }  = useShoppingCart()
    
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-100 m-5">
            <Card.Img
                variant="top"
                src={imageUrl}
                height="200px"
                style={{ objectFit: "cover" }} 
            />

            <CardBody>
                <CardTitle className="d-flex justify-content-between">
                    <span>{name}</span>
                    <span>{formatCurrency(price)}</span>
                </CardTitle>
                <div className="mt-4">
                    {(quantity === 0) ? (
                        <Button className="mt-4 w-100" onClick={()=>increaseCartQuantity(id)}>+ Add to the cart</Button>
                    ) : (
                        <div className="d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                            <div className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}>
                                <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                                <span className="fs-3">{quantity} in cart</span>
                                <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant="danger"
                size="sm" onClick={()=>removeFromCart(id)}>Remove</Button>
                        </div>
                    )}
                </div>
            </CardBody>
        </Card>
    )
}