// Variables
const fileSummary = './assets/templates/summary-user.html';
const fileTask = './assets/templates/add-task.html';
const fileBoard = './assets/templates/board.html';
const fileContacts = './assets/templates/contacts.html';


async function init() {
    await includeHTML('include-html');
    includeHTML('include-template');
}


async function includeHTML(attribute) {
    let inclusion = document.querySelectorAll(`[${attribute}]`);
    for (let i = 0; i < inclusion.length; i++) {
        const element = inclusion[i];
        file = element.getAttribute(attribute);
        let response = await fetch(file);
        if (response.ok) {
            element.innerHTML = await response.text();
        } else {
            element.innerHTML = 'Page not found.';
        }
    }
}


async function loadTemplate(filePath) {
    setElementAttribute('ui-template', 'include-template', filePath);
    await includeHTML('include-template');
}


function setElementAttribute(id, attribute, value) {
    document.getElementById(id).setAttribute(attribute, value);
}


// Please update menu (link)
// Please update header (user / guest)
// Please update template (user / guest)

// Please provide function for user interface
// Please provide funciton for templates