import React from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import DefaultText from './components/DefaultText';

function App() {
  const [value, setValue] = React.useState<string>(DefaultText);
    
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
  }

  return (
    <div className="App">
      <Editor onChange={onChange} value={value}/>
      <Preview value={value}/>
    </div>
  );
}

export default App;
