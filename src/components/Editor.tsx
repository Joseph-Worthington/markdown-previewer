import React from 'react';

interface EditorProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {

  return (
    <div className='bg-slate-200 dark:bg-slate-700 border-2 border-solid border-black p-10 w-full xl:w-[40%] min-h-96'>
      <h2>Editor</h2>
      <textarea id="editor" onChange={onChange} value={value} className='w-full min-h-[80%] p-5 dark:bg-gray-800 dark:text-slate-50'/>
    </div>
  );
}

export default Editor;