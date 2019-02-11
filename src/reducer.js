import Immutable from 'seamless-immutable';
import {SUBMIT_GAME_CONF} from "./StartGamePage/action";
import {FAIL_VICTORY, LETTER_PROPOSAL, WORD_PROPOSAL} from "./GamePendux/ActionGamePendux";


const initialState = Immutable({
    word: [],
    wordToFindTab:  undefined,
    tryQty: 0,
    wordLength: 0,
    letterTry:'',
    wordFund: undefined,
    proposalSoFar: []
});

export default function reducer(state = initialState, action){
    switch (action.type) {
        case SUBMIT_GAME_CONF:
            console.log(action.word);
            console.log(action.wordLength);
            state = state.set('word', action.word);
            state = state.set('tryQty',action.tryQty);
            state = state.set('wordLength', action.wordLength);
            state = state.set('wordToFindTab', action.wordToFindTab);
            break;

        case LETTER_PROPOSAL:
            let wordToFindTabTemp;
            if (state.word.includes(action.letterTry)){
                wordToFindTabTemp = state.wordToFindTab.map((line, index) =>{
                    if (line.letterFund) {
                        return{
                            letter:line.letter,
                            letterFund: true
                        };
                    }
                    else if (line.letter === action.letterTry){
                        return{
                            letter:line.letter,
                            letterFund: true
                        }
                    }
                    else {
                        return{
                            letter: line.letter,
                            letterFund: false
                        }
                    }
                });
                state = state.set ('wordToFindTab', wordToFindTabTemp);
            }
            else {
                let tryQtyLeft = state.tryQty;
                tryQtyLeft--;
                state = state.set('tryQty',tryQtyLeft);
            }
            if(state.proposalSoFar.indexOf(action.letterTry) === -1){
                let arrayModifier = [ action.letterTry, ...state.proposalSoFar];
                state = state.set('proposalSoFar', arrayModifier);
            }
            break;

        case WORD_PROPOSAL:
            if(state.word === action.wordTry){
                state = state.set('wordFund', true)
            }
            else {
                let tryQtyLeft = state.tryQty;
                tryQtyLeft--;
                state = state.set('tryQty',tryQtyLeft);
            }
            break;

        case FAIL_VICTORY:
            if(state.tryQty === 0){
                state = state.set('wordFund', false);
            }
            if(state.wordFund !== true){
                let letterTryResultBoolTab = state.wordToFindTab.map((line)=>{
                    return line.letterFund;
                });

                if(letterTryResultBoolTab.indexOf(false) === -1){
                    state = state.set('wordFund', true);
                }
            }
            break;
    }
    return state;
}
