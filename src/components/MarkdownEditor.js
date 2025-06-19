import React, { useState, useEffect } from 'react';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    setPreview(markdown);
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
        <p
          className="preview"
          
        >{preview}</p>
      </div>
    </>
  );
};

export default MarkdownEditor;
