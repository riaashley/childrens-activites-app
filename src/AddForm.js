import React, { useState } from "react";

function AddForm({ activityAdded }) {
    const [name, setName ] = useState("");
    const [image, setImage] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

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

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newList = {
            name: name,
            image: image,
            location: location,
            category: category, 
            description: description
        }
        fetch("http://localhost:3004/activities", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newList)
        })
            .then((r) => r.json())
            .then(data => activityAdded(data))
    }

    return (
       <center> <h1 className="NewActivity_header">
       Submit a New Activity!
               </h1><form className="add-activity" onSubmit={handleSubmit}>
            <label>Name</label><br></br>
                <input type="text" onChange={handleNameChange} value={name} />
            <br></br>
            <label>Link to Image</label><br></br>
                <input type="text" onChange={handleImageChange} value={image} />
                <br></br>
            <label>Location</label><br></br>
                <input type="text" onChange={handleLocationChange} value={location} />
                <br></br>
            <label>Category </label><br></br>
                <input type="text" onChange={handleCategoryChange} value={category} />
                <br></br>
            <label>Description</label><br></br>
                <input type="text" onChange={handleDescriptionChange} value={description} />
                <br></br>
            <button type="submit">Submit</button>
        </form></center>
    )
}

export default AddForm;