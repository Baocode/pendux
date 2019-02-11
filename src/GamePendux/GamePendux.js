import {Component} from "react";
import {submitGameConf} from "../StartGamePage/action";
import logo from "../Asset/logo.svg";
import React from "react";
import {withRouter} from "react-router";
import {Field, reduxForm} from "redux-form";
import connect from "react-redux/es/connect/connect";
import './GamePendux.css';
import NbEssais from "./nbEssais";
import {Container, Row} from "react-bootstrap";
import WordToFind from "./WordToFind";
import './GamePendux.css'
import {MyInput} from "../Component/MyFormComponents";
import {minLength3, minMaxValue, onlyLetters, onlyNumbers} from "../StartGamePage/StartGame";
import {maxLength1} from "../FieldValidator";

class GamePendux extends Component {

    back = () => {
        const {history} = this.props;
        history.goBack();
    }

    mySubmit = (data) => {

    };

    //NbEssais permet l'affichage sous la forme de batons du nombres d'essais restant
    //WordTofind affiche au fur et à mesure du jeux les lettres trouvées
    //LetterProposal
    //WordProposal
    render() {
        const{history, wordToFindTab} = this.props;
        console.log(wordToFindTab===undefined)
        return (
            <div className="GamePendux">
                <header>
                    <header className="Pendux">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1> Pendux </h1>
                    </header>
                </header>
                <Container>
                    <Row><h3>Nombres d'essais : </h3></Row>
                    <NbEssais/>
                    <Row>Mot à trouver : </Row>
                    {wordToFindTab===undefined ? history.goBack() : <WordToFind/>}
                    <Row>
                        <h3>Tes propositions</h3>
                        <form onSubmit={handleSubmit(this.mySubmit)}>
                            <Row>
                            <label>
                                Une Lettre :
                            </label>
                            <Field name="wordToFind"
                                   component={MyInput}
                                   type="text"
                                   validate={[onlyLetters, maxLength1]}
                                   warn = {[]}
                            />
                            </Row>

                            <Row>
                            <label>
                                Le mot :
                            </label>
                            <Field name="tryQty"
                                   component={MyInput}
                                   pattern="[0-9]*"
                                   type="number"
                                   validate={[onlyLetters]}
                                   warn = {[]}
                            />
                            </Row>
                        </form>
                    </Row>
                </Container>
            </div>);
    }
}




function mapStateToProps(reduxState) {
    const wordToFindTab = reduxState.game.wordToFindTab;
    return {
        wordToFindTab: wordToFindTab
    };
}
export default withRouter(connect(mapStateToProps)(GamePendux));
