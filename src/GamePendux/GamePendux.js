import {Component} from "react";
import logo from "../Asset/logo.svg";
import React from "react";
import {withRouter} from "react-router";
import connect from "react-redux/es/connect/connect";
import './GamePendux.css';
import NbEssais from "./nbEssais";
import {Container, Row} from "react-bootstrap";
import WordToFind from "./WordToFind";
import './GamePendux.css'
import {minLength3, minMaxValue, onlyLetters, onlyNumbers} from "../StartGamePage/StartGame";
import ProposalForms from "./ProposalForms";

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
                           <ProposalForms/>
                    </Row>
                    <Row>
                    <h3>Propositions ratées </h3>

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
