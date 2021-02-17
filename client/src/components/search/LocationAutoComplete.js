import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LocationAutoComplete = ({
    locations,
    onValueChange,
    onSelection,
}) => {
    const [text, setText] = React.useState("Near Me");
    const [showLocations, setShowLocations] = React.useState(true);
    const [width, setWidth] = React.useState(0);

    const measuredRef = React.useCallback((node) => {
        if (node !== null) {
            setWidth(node.getBoundingClientRect().width);
        }
    }, []);

    const onInputChange = (e) => {
        const value = e.target.value;
        onValueChange(value);
        setText(value);
        setShowLocations(true);
    };

    const onListItemClick = (option) => {
        onSelection(option);
        setText(option.name);
        setShowLocations(false);
    };

    const inputRef = React.useRef(null);

    const onClose = () => {
        setText('');
        inputRef.current.focus();
    }

    return ( <div className = "col-span-2"
            ref = { measuredRef } >
            <input type = "text"
            className = "frm-ctrl"
            value = { text }
            onChange = { onInputChange }
            ref = { inputRef } >
            </input> 
            <FontAwesomeIcon onClick = { onClose }
            className = "absolute mt-1 -ml-4"
            icon = { faTimesCircle }
            /> {
            showLocations && locations && locations.length > 0 && ( 
            <div style = {
                    { width: width }
                }
                className = "my-2 px-4 py-4 absolute shadow border bg rounded-lg" >
                <ul > {
                    locations.map((l) => ( <li key = { l.id }
                        onClick = {
                            () => onListItemClick(l)
                        } > { l.fullName || l.name } </li>
                    ))
                } </ul> </div >
            )
        } </div>
);
};

export default LocationAutoComplete;