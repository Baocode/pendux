import Immutable from 'seamless-immutable';
import {SUBMIT_GAME_CONF} from "./StartGamePage/action";


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
            break
    }
    return state;
}
