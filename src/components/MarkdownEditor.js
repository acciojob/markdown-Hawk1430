import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const html = marked.parse(markdown);
    setPreview(html);
  }, [markdown]);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <>
      {markdown === '' && <div className="loading">Loading...</div>}
      <div className="editor-container">
        <textarea
          className="textarea"
          value={markdown}
          onChange={handleChange}
          placeholder="Enter Markdown here..."
        />
        <div
          className="preview"
          dangerouslySetInnerHTML={{ __html: preview }}
        />
      </div>
    </>
  );
};

export default MarkdownEditor;
