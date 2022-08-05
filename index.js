  
// function introduction (name) {
//     let message = `Hi, my name is ${name}';
//     return message ;

// }
function introduction (name){

    let message = `Hi, my name is ${name}.`;
    return message
}
  
function introductionWithLanguage(name, language) {
    let message = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return message;
}
function introductionWithLanguageOptional(name, language = "javascript") {
    let message = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return message;
  }

function introductionWithLanguageOptional(name, language = "JavaScript") {
    let message = `Hi, my name is ${name} and I am learning to program in ${language}.`
    return message;
}
