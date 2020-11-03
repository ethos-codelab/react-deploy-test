import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import './App.css';
import Image1 from './c.jpg';
import Image2 from './b.jpg';
import Image3 from './a.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {
            <AwesomeSlider animation="cubeAnimation">
              <div data-src={Image1} />
              <div data-src={Image2} />
              <div data-src={Image3} />
            </AwesomeSlider>
        }
      </header>
    </div>
  );
}

export default App;
// <select>
// <option value="cubeAnimation">Cube Animation</option>
// <option value="fallAnimation">Fall Animation</option>
// <option value="foldOutAnimation">Fold Out Animation</option>
// <option value="openAnimation">Open Animation</option>
// <option value="scaleOutAnimation">Scale Out Animation</option>
// </select>