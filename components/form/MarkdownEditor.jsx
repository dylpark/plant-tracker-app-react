import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor(props) {
  const [markdown, setMarkdown] = useState();

  return (
    <div>
      <label class="text-m font-thin text-gray-700">{props.title}</label>
      <div className="mt-1">
        <textarea
          className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
          autofocus
          placeholder="Markdown Editor"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />

        <ReactMarkdown
          children={markdown}
          className="w-full border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
        />
      </div>
    </div>
  );
}

export default MarkdownEditor;
