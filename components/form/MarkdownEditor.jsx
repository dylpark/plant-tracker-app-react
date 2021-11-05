// import React from "react";
// import { useState } from "react";
// import ReactMarkdown from "react-markdown";

// export default function MarkdownEditor() {
//   const [markdown, setMarkdown] = useState();

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
//       <div>
//         <label className="text-m font-thin text-gray-700">Details & Requirements</label>
//         <div className="mt-1">
//           <textarea
//             className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
//             autoFocus
//             placeholder="Markdown Editor"
//             value={markdown}
//             onChange={(e) => setMarkdown(e.target.value)}
//           />
//         </div>
//       </div>

//       <ReactMarkdown
//         children={markdown}
//         className="border bg-white border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
//       />
//     </div>
//   );
// }
