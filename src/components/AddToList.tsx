import React, { useState } from 'react';

const AddToList = () => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    imgUrl: "",
    notes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className="AddToList">
      <input 
        type="text"
        placeholder="Name"
        name="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        />
      <input
        type="text"
        placeholder="Age"
        name="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Image URL"
        name="imgUrl"
        className="AddToList-input"
        value={input.imgUrl}
        onChange={handleChange}
      />
      <textarea
        placeholder="Notes"
        name="notes"
        className="AddToList-input"
        value={input.notes}
        onChange={handleChange}
      />

      <button type="submit" className="AddToList-btn" >
        Submit
      </button>
    </form>
  )
}

export default AddToList;