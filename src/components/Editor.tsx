import React from 'react';

interface EditorProps {
value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {

  return (
    <div className='bg-slate-200 border-2 border-solid border-black p-10 min-w-[40%]'>
      <h2>Editor</h2>
      <textarea id="editor" onChange={onChange} value={value} className='w-full min-h-[50%] p-10'/>
    </div>
  );
}

export default Editor;