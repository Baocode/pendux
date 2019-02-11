export const SUBMIT_GAME_CONF = "submitGameConf";

export function submitGameConf(word,tryQty) {
    let wordToFindTab_tmp = word.split("");
    let wordToFindTab = wordToFindTab_tmp.map((ligne)=>{
        return {
            lettre: ligne,
            letterFund: false
        };
    });
    return({
        type:SUBMIT_GAME_CONF,
        word:word,
        tryQty:tryQty,
        wordLength: word.length,
        wordToFindTab: wordToFindTab
    })
}