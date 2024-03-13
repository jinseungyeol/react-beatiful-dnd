import styled from "styled-components"

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: ${props => props.bgColor};
  border: 1px solid ${props => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({bgColor, borderColor, text = 'default text'}: CircleProps) => {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>
  )
}

export default Circle

interface playerShape {
  name: string,
  age: number
}

const sayHello = (playerObj: playerShape) =>
  console.log(`Hello my ${playerObj.name} , i'm ${playerObj.age} years old`)

sayHello({name: 'jin', age: 31})
// sayHello({name: 'jin', age: 31, hello: 1})
