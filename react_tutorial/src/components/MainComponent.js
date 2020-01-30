import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }

    render() {
        return (
            <div>
                <Header />
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <h1>
                    {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] === undefined ? "holis" :
                        this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0].comments[0].comment}
                </h1>
                <h2>tonces</h2>
                <Footer />
            </div>
        );
    }
}

export default Main;
