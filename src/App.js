import Dropdown from "./Dropdown";



function App() {

  
const items = [
  { id: 1, name: 'Yes' },
  { id: 2, name: 'No' },
  { id: 3, name: 'May Be' },
];
  return (
   
    <Dropdown items={items}/>
    
);
}

export default App;
