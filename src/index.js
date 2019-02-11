import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Accueil/App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from "redux";
import reducer from "./reducer";
import {reducer as formReducer} from 'redux-form';
import {Switch,Route} from "react-router";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import StartGame from "./StartGamePage/StartGame";
import GamePendux from "./GamePendux/GamePendux";

const rootReducer = combineReducers({
    game: reducer,
    form: formReducer
});

const store =createStore(rootReducer);

ReactDOM.render(<Provider store = {store}>
    <HashRouter>
        <Switch>
            <Route path = '/'  exact component={App}/>
            <Route path = '/startgame'  component={StartGame}/>
            <Route path='/pendu' component={GamePendux}/>
        </Switch>
    </HashRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
