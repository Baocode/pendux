import React, {Component} from 'react';
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {MyInput} from "../Component/MyFormComponents";
import {Field, reduxForm} from "redux-form";
import logo from "../Asset/logo.svg";
import './StartGame.css';
import {submitGameConf} from "./action";


class StartGame extends Component{

    back = () =>{
        const {history} = this.props;
        history.goBack();
    }

    mySubmit = (data)=>{
        console.log(data.wordToFind);
        const {history} = this.props;
        const {dispatch} = this.props;
        dispatch(submitGameConf(data.wordToFind,data.tryQty));
        history.push('/pendu');
    };

    render(){

        const {error, invalid,handleSubmit} = this.props;

        return(
            <div className="StartGame">
                <header>
                    <header className="Pendux">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1> Pendux </h1>
                    </header>
                </header>
                <div>
                    <h2>
                        Paramètres du jeux
                    </h2>

                    <form onSubmit={handleSubmit(this.mySubmit)}>
                    <label>
                        Mot à faire trouver :
                    </label>
                    <Field name="wordToFind"
                           component={MyInput}
                           type="password"
                           validate={[onlyLetters, minLength3]}
                           warn = {[]}
                    />

                    <label>
                        Combien de chance ?
                    </label>
                    <Field name="tryQty"
                           component={MyInput}
                           pattern="[0-9]*"
                           type="number"
                           validate={[onlyNumbers,minMaxValue]}
                           warn = {[]}
                    />
                        <button type="submit" disabled={error || invalid}> LOGIN !!</button>
                        <button type="reset"> reset !!</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(reduxForm({
    form:'form'})
    (connect()(StartGame)));
