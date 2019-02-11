
export function minLength3(value){
return((!value || value.length < 4) ? 'taille trop petite' : undefined )
};

export function onlyLetters(value) {
let reg = new RegExp(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?éàèù]/);

return((!value || (reg.test(value))) ? 'ne doit contenir que des lettres' : undefined )
};

export function onlyNumbers(value)  {
let regNumber = new RegExp("/^[0-9]/");
return((!value || regNumber.test(value.toString())) ? 'indiquer que des chiffres' : undefined )
};

export function minMaxValue(value) {
return((!value || !(value>=5 && value<=12)) ? 'La valeur doit etre comprise entre 5 et 12' : undefined )
}

export function maxLength1(value){
    return((!value || value.length > 1) ? 'Une lettre à la fois' : undefined )
}