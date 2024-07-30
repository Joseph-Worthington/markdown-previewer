import React, { useEffect, useState } from 'react';
import { marked } from 'marked';

interface PreviewProps {
    value: string;
}

const Preview: React.FC<PreviewProps> = ({ value }) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        marked.setOptions({
            gfm: true,
            breaks: true
        });

        Promise.resolve(marked(value)).then(setMarkdown);
    }, [value]);

    return (
        <div className=' bg-slate-200 dark:bg-slate-700 border-2 border-solid border-black p-10 xl:w-[60%]  w-full'>
            <h2 className='w-1.5'>Preview</h2>
            <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
        </div>
    );
}

export default Preview;