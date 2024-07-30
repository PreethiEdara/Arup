import storeitems from "../data/items.json"
import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"





export function Store(){
    return (
        <>
      <h1 className="me-auto m-3">Store</h1>
      <Row sm={1} lg={3} md={2} className="g-3">
        {storeitems.map(item => (
          <Col key={item.id} >
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
    )
}