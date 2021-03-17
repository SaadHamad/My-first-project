// Importing URL validation function
import { checkForURL } from './urlChecker'
// Build the event listener with th async function
async function handleSubmit(event) {
    event.preventDefault()
// Selecting the DOM element
    let urlText = document.getElementById('url').value
// Validate the URL   
    if (checkForURL(urlText)) {
// Case of valid URL
      try{
// SHowing validation message       
        console.log("::: Form Submitted :::")
// Sending the valid URL to the server side       
        const urlContentTest = await fetch(`http://localhost:8082/flyback/${urlText}`) 
// Fetching the data from the server side        
        const checkingJson = await urlContentTest.json()
// Maninpulating the DOM with the coming data
        document.getElementById('one').innerHTML = 'AGREEMENT: ' + checkingJson.agreement.toLowerCase()
        document.getElementById('two').innerHTML = 'SUBJECTIVITY: ' + checkingJson.subjectivity.toLowerCase()
        document.getElementById('three').innerHTML = 'CONFIDENCE: ' + checkingJson.confidence
        document.getElementById('four').innerHTML = 'IRONY: ' + checkingJson.irony.toLowerCase()
// Finishing the promise
    }catch(error){
    alert('cannot handle the URL')
    }
// Case of unvalid URL    
    } else {
    console.log('NO A VALID URL')   
    } 
}
// Exporting the function
export { handleSubmit }
