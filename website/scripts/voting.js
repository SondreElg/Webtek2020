/**
  *Creates a new array with the result of calling the draggableList funcion on every element in the calling array
  *
  *@param {String[]} e A list of all the animes you can vote for
*/
function activateDrag(e) {
    const voting_list = document.getElementsByClassName(e);
    Array.prototype.map.call(voting_list, (list) => {
        draggableList(list);
    });
}


/**
  *Creates a new array with the result of calling the startDrag funcion on every element in the calling array
  *
  *@param {String[]} listElement The mapped list created in the activateDrag(e) function
*/
function draggableList(listElement) {
    Array.prototype.map.call(listElement.children, (element) => {
        startDrag(element);
    });
}


/**
  *Gives each element in the list the draggable attribute
  *
  *@param {String[]} element The mapped list created in the draggableList(listElement) function
*/
function startDrag(element) {
    element.setAttribute("draggable", true);
    element.ondrag = handleDrag;
}

/**
  *Tracks which elements are being moved
  *
  *@param {String[]} element The list with the draggable attribute
*/
function handleDrag(element) {
    const selectedElement = element.target,
        list_container = selectedElement.parentNode,
        x = event.clientX,
        y = event.clientY;

    //If the element at a given point is equal to null, swappedElement is set equal to selectedElement
    //If not, swappedElement is set to be equal to the element at the given point
    if (document.elementFromPoint(x, y) === null) {
        swappedElement = selectedElement;
    } else {
        swappedElement = document.elementFromPoint(x, y);
    }

    //If selectedElement.parentNode is equal to the parentNode of the swappedElement, we run a new check
    //We check if the swappedElement is not the next node of the selectedElement
    //If it is not, swappedElement is not changed
    //If it is, swappedElement is set to be equal to the node next to the swappedElement
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
