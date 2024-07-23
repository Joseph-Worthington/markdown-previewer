import React from 'react';

interface EditorProps {
value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {

  return (
    <div>
      <h2>Editor</h2>
      <textarea id="editor" onChange={onChange} value={value} />
    </div>
  );
}

export default Editor;