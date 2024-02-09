import rockImg from './assets/rock.svg';
import scissorImg from './assets/scissor.svg';
import paperImg from './assets/paper.svg';

const imgSrc = {
  rock: rockImg,
  paper: paperImg,
  scissor: scissorImg,
}
function HandIcon({value = 'rock'}) {
  const IMG_SRC = imgSrc[value];
  return <img src={IMG_SRC} alt={value} />
}

export default HandIcon;