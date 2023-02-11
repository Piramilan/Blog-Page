import logo from './logo.svg';
import './App.css';
import Image from './components/Image';
import Comments from './components/Comments';
import Replay from './components/Replay';

function App() {
  return (
    <div className="max-w-[80%] mx-auto my-0">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-evenly my-4">
       <Image />
        <Comments />
        <div>
          <a href="#" className="bg-[#7E34F6] font-bold text-white px-4 py-3 rounded-md">Comment</a>
        </div>
      </div>
      
      <div className="grid">
        <Image />
        <Replay />
      </div>
     
    </div>
  );
}

export default App;
