import React, {Component} from'react'
import {Row} from "react-bootstrap";
import {Field, reduxForm} from "redux-form";
import {MyInput} from "../Component/MyFormComponents";
import {maxLength1, onlyLetters} from "../FieldValidator";
import {failVictory, letterProposal, wordProposal} from "./ActionGamePendux";
import {connect} from "react-redux";


class ProposalForms extends Component {

    myProposalSubmit = (data)=>{
        const { dispatch } = this.props;
        if (data.letterproposal != null) {
            const action_letter_proposal = letterProposal(data.letterproposal);
            dispatch(action_letter_proposal);
        }else if (data.wordproposal != null){
            const action_word_proposal = wordProposal(data.wordproposal);
            dispatch(action_word_proposal);
        }

        const fail_victory_action = failVictory();
        dispatch(fail_victory_action);
        data.letterProposal = "";
    }


    render() {
        const {handleSubmit, error, invalid} = this.props;

        return (
            <div>

                <form onSubmit={handleSubmit(this.myProposalSubmit)}>
                    <Row>
                    <label>
                        Une Lettre :
                    </label>
                    <Field
                        name="letterproposal"
                        component={MyInput}
                        type="text"
                        validate={[onlyLetters, maxLength1]}
                        warn={[]}
                    />
                    </Row>
                    <Row>
                    <label>
                        Le mot :
                    </label>
                    <Field
                        name="wordproposal"
                        component={MyInput}
                        type="text"
                        validate={[]}
                        warn={[]}
                    />
                    </Row>
                    <input type="submit" disabled={error || invalid} value="Proposer !!!"/>
                </form>
            </div>)
    }

}

export default reduxForm({
    form: 'ProposalForm.js'
})(connect()(ProposalForms));