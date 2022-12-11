import React, { useState } from "react";

function AddForm() {
    const [name, setName ] = useState("");
    const [image, setImage] = useState("");

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleImageChange(e) {
        setImage(e.target.value)
    }

    return (
        <form className="add-activity">
            <label>Name
                <input type="text" onChange={handleNameChange} value={name} />
            </label>
            <label>Image
                <input type="text" onChange={handleImageChange} value={image} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddForm;