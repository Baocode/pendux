export const LETTER_PROPOSAL = "letter_proposal";
export const WORD_PROPOSAL = "word_proposal";
export const FAIL_VICTORY = "fail_or_victory";



export function letterProposal(letterProposal) {
    return ({
        type: LETTER_PROPOSAL,
        letterTry: letterProposal
    });


}
export function wordProposal(wordProposal) {
    return ({
        type: WORD_PROPOSAL,
        wordTry: wordProposal
    });
}

export function failVictory() {
    return ({
        type: FAIL_VICTORY,
    });
}
