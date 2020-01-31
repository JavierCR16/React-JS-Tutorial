import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    render() {

        const HomePage = () => {
            return(
                <Home
                />
            );
        }

        return (
            <div>
                <Header />

                <h1>
                    {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0] === undefined ? "holis" :
                        this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0].comments[0].comment}
                </h1>

                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Redirect to="/home" />
                </Switch>

                <Footer />
            </div>
        );
    }
}

export default Main;
