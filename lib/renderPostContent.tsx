import { ReactNode } from "react";

/** Renders markdown-lite case study content with consistent typography */
export function renderPostContent(content: string): ReactNode[] {
  const lines = content.split("\n");
  const elements: ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      elements.push(<h3 key={key++}>{line.replace("### ", "")}</h3>);
    } else if (line.startsWith("## ")) {
      elements.push(<h2 key={key++}>{line.replace("## ", "")}</h2>);
    } else if (line.startsWith("#### ")) {
      elements.push(<h4 key={key++}>{line.replace("#### ", "")}</h4>);
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      i--;
      elements.push(
        <ul key={key++}>
          {items.map((item, idx) => (
            <li
              key={idx}
              dangerouslySetInnerHTML={{
                __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
              }}
            />
          ))}
        </ul>
      );
    } else if (line.trim() === "") {
      continue;
    } else if (line.startsWith("|")) {
      elements.push(
        <p
          key={key++}
          className="font-mono text-body-sm"
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, "<strong class='text-slate-200'>$1</strong>"),
          }}
        />
      );
    } else {
      elements.push(
        <p
          key={key++}
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/\*(.*?)\*/g, "<em>$1</em>"),
          }}
        />
      );
    }
  }

  return elements;
}
