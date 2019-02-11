import React from 'react';
import {Component} from "react";
import {connect} from "react-redux";
import {Col, Row} from "react-bootstrap";


class NbEssais extends Component{

    nombreVie = () => {
        const { tryQty } = this.props;

        let tryLeft= [];

        for(let i=0; i<tryQty;i++){
            let model = (<Col key={i} className="nbTry"> | </Col>);
            tryLeft.push(model);
        }
        return tryLeft;
    };

    render(){
        let triesLeft = this.nombreVie();
        return(
            <Row className="triesBlock"> {triesLeft} </Row>
        )
    }
}

function mapStateToProps(reduxState){
    const tryQty = reduxState.game.tryQty;

    return {
        tryQty
    };
}
export default connect(mapStateToProps) (NbEssais);