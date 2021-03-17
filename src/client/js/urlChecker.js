// SOURCE CODE https://gist.github.com/franciskim/41a959f8e3989254ef5d
// Validating the URL
// exporting the function globally
export function checkForURL(inputText){
    console.log("::: Running checkForURL :::", inputText)
// Using RegExp to validate the URL   
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    var regexp = new RegExp(expression);
// Checking for the input URL   
    return regexp.test(inputText);
} 
