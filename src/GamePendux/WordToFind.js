import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {Col, Row} from "react-bootstrap";


class WordToFind extends Component{

    wordToDisplay = () =>{
        const { wordFund, wordToFindTab } = this.props;

        let wordDisplay = wordToFindTab.map((ligne,index) => {
            if (wordFund) {
                return (
                    <div key={index} className="letter">
                        <p>{ligne.lettre}</p>
                    </div>
                );
            } else {
                return (
                    <Col key={index} className="letter">
                        {ligne.letterFund ?ligne.lettre : undefined}
                    </Col>
                );
            }
        });
        return wordDisplay
    };

    render(){
        let wordToFind = this.wordToDisplay();
      return(
          <Row>{wordToFind}</Row>
      )
    }

}


function mapStateToProps(reduxState){
    const wordFund = reduxState.game.wordFund;
    const wordToFindTab = reduxState.game.wordToFindTab;
    const wordLength = reduxState.game.wordLength;

    return {
        wordFund,
        wordToFindTab: wordToFindTab,
        wordLength
    };
}
export default connect(mapStateToProps) (WordToFind);