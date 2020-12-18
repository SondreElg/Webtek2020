function TemplatePopup(props) {
    const [isVisible, setVisibility] = useState(false);

    function closePopup(event) {
        if (event.target.id === divID) {
            setVisibility(false);
        }
    }

    if (isVisible) {
        return <div className="popupBackground" onClick={closePopup}></div>;
    }
    return;
}
