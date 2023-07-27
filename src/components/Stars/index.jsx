import { RiStarSFill,RiStarSLine } from 'react-icons/ri';
import { Container } from './styles';


export function Stars({size}) {
  const numberOfStars = 4;

  return (
    
    <Container>
      {Array.from({ length: numberOfStars }, (_, index) => (
        <RiStarSFill key={index} size={size}/>
      ))}
      <RiStarSLine size={size}/>
    </Container>
  );
}


