/**
 * DONE: Update the text in the "Formatted Text" section as a user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
updateText = () => {
    // CODE GOES HERE
    let outputText = document.getElementById("text-input").value;
    document.getElementById("text-output").innerText = outputText
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
makeBold = (elem) => {
    elem.classList.toggle("active")
    document.getElementById("text-output").classList.toggle('bold')
}

/**
 * Toggle the italic class for the output text
 */
makeItalic = (elem) => {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('italic')
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
makeUnderline = (elem) => {
    elem.classList.toggle('active')
    document.getElementById('text-output').classList.toggle('underline')
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
alignText = (elem, alignType) => {
    let alignButtons = document.getElementsByClassName('align')
    for (const button of alignButtons) {
       button.classList.remove('active')
    }
    elem.classList.add('active');
    document.getElementById('text-output').style.textAlign = alignType;
}