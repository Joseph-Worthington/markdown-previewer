import React from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import DefaultText from './components/DefaultText';

function App() {
  const [value, setValue] = React.useState<string>(DefaultText);
    
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
  }

  return (
    <div className="App p-10 bg-slate-500 flex flex-col items-center ">
      <h1 className="text-3xl font-bold underline text-white"> Markdown Previewer </h1>
      <div className=" flex justify-evenly gap-10 p-10">
      <Editor onChange={onChange} value={value}/>
      <Preview value={value}/>
      </div>
    </div>
  );
}

export default App;
