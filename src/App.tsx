import './App.css';
import ButtonAppBar from './ButtonAppBar';
import ContactFabButton from './ContactFabButton';

require('dotenv').config()

function App() {

  return (
    <>
      <ButtonAppBar />
      {/* router loads content here */}
      <ContactFabButton />
    </>
  );
}

export default App;
