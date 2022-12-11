import React, { useState } from "react";

function AddForm() {
    const [name, setName ] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleImageChange(e) {
        setImage(e.target.value)
    }

    function handleLocationChange(e) {
        setLocation(e.target.value)
    }

    function handleCategoryChange(e) {
        setCategory(e.target.value)
    }

    return (
        <form className="add-activity">
            <label>Name
                <input type="text" onChange={handleNameChange} value={name} />
            </label>
            <label>Image
                <input type="text" onChange={handleImageChange} value={image} />
            </label>
            <label>Location
                <input type="text" onChange={handleLocationChange} value={location} />
            </label>
            <label>Category
                <input type="text" onChange={handleCategoryChange} value={category} />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default AddForm;