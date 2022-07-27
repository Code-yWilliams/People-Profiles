import React from 'react';

interface IProps {
  people: {
    name: string,
    age: number,
    url?: string,
    notes?: string,
  }[]
}

const List: React.FC<IProps> = ({ people }) => {
  return (
    <div>
      <>
      I am a list
      {people}
      </>
    </div>
  )
}

export default List;