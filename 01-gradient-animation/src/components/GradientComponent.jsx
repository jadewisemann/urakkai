import styled, { keyframes } from 'styled-components';


const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const GradientDiv = styled.div`
  width: 100%;
  height: 300px;
  background: ${(props) => `linear-gradient(270deg, ${props.colors.join(', ')})`};
  background-size: 600% 600%;
  animation: ${gradientShift} ${(props) => props.speed}s ease infinite;
`;

const GradientComponent = ({ speed = 10, colors = ['#ff7e5f', '#feb47b', '#86a8e7', '#91eae4'] }) =>  {
  return <GradientDiv speed={speed} colors={colors} />;
}

export default GradientComponent;
