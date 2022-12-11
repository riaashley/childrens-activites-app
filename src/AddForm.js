import React, { useState } from "react";

function AddForm() {
    const [name, setName ] = useState("");

    function handleNameChange(e) {
        setName(e.target.value)
    }

    return (
        <form className="add-activity">
            <label>Name
                <input type="text" onChange={handleNameChange} value={name} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddForm;