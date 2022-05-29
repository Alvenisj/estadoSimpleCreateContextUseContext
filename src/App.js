import MyComponents from "./components/MyComponents";
import StoreProvider from "./components/store/StoreProvider";

function App() {


  return (
    
    <div>
    <StoreProvider>
      <MyComponents />
    </StoreProvider>
    </div>
  );
}

export default App;
