import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
  people: Props["people"]
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    imgUrl: "",
    notes: ""
  });

  const resetInput = (): void => {
    setInput({
      name: "",
      age: "",
      imgUrl: "",
      notes: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    if (!input.name || !input.age) return;
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        imgUrl: input.imgUrl,
        notes: input.notes
      }
    ]);

    resetInput();
  }

  return (
    <form className="AddToList" onSubmit={handleSubmit}>
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

      <button type="submit" className="AddToList-btn">
        Submit
      </button>
    </form>
  )
}

export default AddToList;