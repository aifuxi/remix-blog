import { Editor } from "@bytemd/react";
import breaks from "@bytemd/plugin-breaks";
import footnotes from "@bytemd/plugin-footnotes";
import frontmatter from "@bytemd/plugin-frontmatter";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight-ssr";
import math from "@bytemd/plugin-math";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import mermaid from "@bytemd/plugin-mermaid";
import gemoji from "@bytemd/plugin-gemoji";
import zh from "bytemd/lib/locales/zh_Hans.json";
import { useMemo, useState } from "react";

export default function NewPost() {
  const [content, setContent] = useState("");
  const plugins = useMemo(
    () => [
      breaks(),
      footnotes(),
      frontmatter(),
      gemoji(),
      gfm(),
      highlight(),
      math(),
      mermaid(),
      mediumZoom(),
    ],
    []
  );

  return (
    <div>
      <div className="flex w-full h-16 px-4">
        <div className="w-[960px] py-1">
          <input
            type="text"
            autoComplete="false"
            placeholder="请输入标题......"
            className="block w-full h-full pl-4 text-3xl font-semibold focus:appearance-none focus:border-none focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-end flex-1 h-full">
          {/* TODO: 需要针对不同屏幕做适配 */}
          <div className="flex justify-center h-10 space-x-2">
            <button
              type="button"
              className="
              inline-block rounded-lg bg-blue-600 px-6 
              py-2.5 text-base font-medium uppercase 
              leading-tight text-white shadow-md transition 
              duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg
               focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
               active:bg-blue-800 active:shadow-lg"
            >
              存为草稿
            </button>
            <button
              type="button"
              className="
              inline-block rounded-lg bg-blue-600 px-6 
              py-2.5 text-base font-medium uppercase 
              leading-tight text-white shadow-md transition 
              duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg
               focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
               active:bg-blue-800 active:shadow-lg"
            >
              发布文章
            </button>
          </div>
        </div>
      </div>
      <Editor
        value={content}
        plugins={plugins}
        locale={zh}
        onChange={(v) => {
          setContent(v);
        }}
      />
    </div>
  );
}
