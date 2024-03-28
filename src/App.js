import './App.css';
import Gallery from './components/Gallery';

// function AlertButton({message, hadleClick ,children}){
//   return(
//     <button onClick={hadleClick}>
//       {children}
//     </button>
//   )
// }
function App() {
  // function hadleClick(){
  //   alert("Hello World")
  // }
  // return (
  //   <div className="App">
  //     <AlertButton message="Playing" hadleClick={hadleClick}>Play Movie</AlertButton>
  //     <AlertButton message="Uploading" hadleClick={hadleClick}>Upload Image</AlertButton>
  //   </div>
  // );

  return(
    <div>
      <div className="Page">
      <Gallery />
      <Gallery />
      <Gallery />
      <Gallery />
      <Gallery />
      <Gallery />
      <Gallery />
      <Gallery />
      </div>
    </div>
  )
  
}

export default App;
