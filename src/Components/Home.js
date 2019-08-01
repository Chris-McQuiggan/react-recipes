import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Comments extends Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    render() {
        return (
            <div>
                <br></br>
                <Row>
                    <Col sm={{ size: '10', offset: 1 }}>
                        <Col sm={{ size: 'auto', offset: 0 }}>
                            <h2>Welcome!</h2>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Comments;