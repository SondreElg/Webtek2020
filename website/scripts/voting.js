function activateDrag(e) {
    const voting_list = document.getElementsByClassName(e);
    Array.prototype.map.call(voting_list, (list) => {
        draggableList(list);
    });
}

function draggableList(listElement) {
    Array.prototype.map.call(listElement.children, (element) => {
        startDrag(element);
    });
}

function startDrag(element) {
    element.setAttribute("draggable", true);
    element.ondrag = handleDrag;
}

function handleDrag(element) {
    const selectedElement = element.target,
        list_container = selectedElement.parentNode,
        x = event.clientX,
        y = event.clientY;

    if (document.elementFromPoint(x, y) === null) {
        swappedElement = selectedElement;
    } else {
        swappedElement = document.elementFromPoint(x, y);
    }

    if (list_container === swappedElement.parentNode) {
        if (swappedElement !== selectedElement.nextSibling) {
            swappedElement = swappedElement;
        } else {
            swappedElement = swappedElement.nextSibling;
        }
        list_container.insertBefore(selectedElement, swappedElement);
    }
}

activateDrag("voting_container");

//Pop-up when trying to click on the submit button. If visitor confirms submssion, the page will be reloaded, resetting the voting page.
function clicked_button() {
    if (
        confirm(
            "Are you sure you want to submit? When submitting, your answers will be sent and the voting page will be reset"
        )
    ) {
        window.location.reload();
    } else {
        return false;
    }
}
