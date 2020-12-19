function TemplatePopup(props) {
    function closePopup(event) {
        if (event.target.id === props.id) {
            props.callbackVisibility(false);
        }
    }

    return (
        <div id={props.id} className="popupBackground" onClick={closePopup}>
            {props.children}
        </div>
    );
}

export default TemplatePopup;
