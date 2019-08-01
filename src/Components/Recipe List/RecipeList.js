import React, { Component } from 'react';

import RecipeLink from './RecipeLink'

class CommentList extends Component {

    static propTypes = {

    }

    static defaultProps = {

    }

    render() {
        return (
            <div>
                <br></br>
                <h2>Recipe List</h2>
                {this.props.data.map(recipes => (
                    <RecipeLink
                        key={recipes._id}
                        currentRecipe={this.props.currentRecipe}
                        id={recipes._id}
                        name={recipes.name}
                        description={recipes.description}
                        ingredients={recipes.ingredients}
                        image={recipes.image}
                    />
                ))}
            </div>
        );
    }
}
export default CommentList;