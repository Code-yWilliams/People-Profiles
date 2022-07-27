import React from 'react';
import { IState as IProps } from '../App'

const List: React.FC<IProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map(person => {
      return (
                <li className="List" key={`${person.name}${person.age}${person.imgUrl}`}>
                 <div className="List-header">
                   <img className="List-img" src={person.imgUrl} alt={person.name}/>
                   <h2>{person.name}</h2>
                 </div>
                 <p>Age: {person.age}</p>
                 <p className="List-note">{person.notes}</p>
               </li>
             )
    })
  }

  return (
    <ul>
      {renderList()}
    </ul>
  )
}

export default List;