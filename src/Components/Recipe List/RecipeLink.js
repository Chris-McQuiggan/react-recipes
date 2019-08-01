import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Comments extends Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    async componentDidMount() {

    }

    handleClick = () => {
        console.log(this.props.id, this.props.name, this.props.ingredients, this.props.description, this.props.image)
        this.props.currentRecipe(this.props.id, this.props.name, this.props.ingredients, this.props.description, this.props.image)
    }

    render() {
        return (
            <div>
                    <br></br>
                    <Row>
                        <Col sm={{ size: '10', offset: 1 }}>
                            <Col sm={{ size: 'auto', offset: 0 }}>
                                <Link to={`/recipe/${this.props.id}`}>
                                    <Button color="info" block onClick={this.handleClick}>{this.props.name}</Button>{' '}
                                </Link>
                            </Col>
                        </Col>
                    </Row>
            </div>
        );
    }
}
export default Comments;