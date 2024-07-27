import React, {useState} from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import DefaultText from './components/DefaultText';

function App() {
  const [value, setValue] = React.useState<string>(DefaultText);
  const [dark, setDark] = useState(false)
    
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
  }
  const toggleTheme = () => {
    setDark(!dark)
    document.body.classList.toggle('dark')
  }
  if(document.body.classList.contains('dark') && !dark){
    setDark(true)
  }
  

  return (
    <div className="App p-10 bg-slate-500 dark:bg-slate-900 flex flex-col items-center min-h-screen">
      <button onClick={toggleTheme} className="bg-blue-500 text-white p-2 rounded-md">Toggle Theme</button>
      <h1 className="text-3xl font-bold underline text-white"> Markdown Previewer </h1>
      <div className=" flex justify-evenly gap-10 py-10 xl:p-10 w-[80%] flex-wrap xl:flex-nowrap">
      <Editor onChange={onChange} value={value}/>
      <Preview value={value}/>
      </div>
    </div>
  );
}

export default App;
