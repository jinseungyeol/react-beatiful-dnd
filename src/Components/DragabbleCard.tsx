import React from 'react';
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components';

const Card = styled.div`
  background-color: ${props => props.theme.cardColor};
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
`;

interface IDragabbleCardProps {
  toDo: string;
  index: number;
}

const DragabbleCard = ({ toDo, index }: IDragabbleCardProps) => {
  console.log(toDo)
  return (
    <Draggable key={toDo} draggableId={toDo} index={index}>  
      {(magic) =>
        <Card ref={magic.innerRef} {...magic.draggableProps} {...magic.dragHandleProps}>
          {toDo}
        </Card>
      }
    </Draggable>
  )
}

export default React.memo(DragabbleCard);