import React, { useEffect, useState } from 'react';
import { parse as markedParse } from 'marked';

interface PreviewProps {
    value: string;
}

const Preview: React.FC<PreviewProps> = ({ value }) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
      Promise.resolve(markedParse(value)).then(setMarkdown);
    }, [value]);

    return (
        <div>
            <h2>Preview</h2>
            <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
    );
}

export default Preview;