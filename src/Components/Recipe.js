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
                            <Row>
                                <Col sm='12'>
                                    <h2>{this.props.curData.name}</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm='5'>
                                    <img alt={this.props.curData.name} src={this.props.curData.image} width='300' />
                                </Col>
                                <Col sm='6'>
                                    <p>{this.props.curData.ingredients}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <p>{this.props.curData.description}</p>
                                </Col>
                            </Row>
                        </Col>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Comments;