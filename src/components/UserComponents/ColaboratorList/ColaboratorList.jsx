import ColaboratorCard from "./../../UserComponents/ColaboratorCard/ColaboratorCard";
import { Col } from "react-bootstrap";

const ColaboratorList = ({ colaborators }) => {

    return (
        colaborators.map(elm =>
            <Col key={elm._id}>
                <ColaboratorCard {...elm} />
            </Col>
        )
    )
}

export default ColaboratorList