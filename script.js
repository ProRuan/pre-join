async function init() {
    await includeHTML('include-html');
    // includeHTML('include-template');
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


// Please update menu
// Please provide function for user interface
// Please provide funciton for templates