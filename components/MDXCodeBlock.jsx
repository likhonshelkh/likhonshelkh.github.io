import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockCopyButton,
  CodeBlockFiles,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockFilename,
} from './kibo-ui/code-block';

function flattenChildren(children) {
  if (!children) {
    return '';
  }

  if (typeof children === 'string') {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map((child) => flattenChildren(child)).join('');
  }

  if (typeof children === 'object' && 'props' in children) {
    return flattenChildren(children.props.children);
  }

  return '';
}

function parseMeta(metastring) {
  if (!metastring) {
    return {};
  }

  return metastring.split(/\s+/).reduce((accumulator, token) => {
    if (!token.trim()) {
      return accumulator;
    }

    const [rawKey, rawValue] = token.split('=');
    const key = rawKey?.trim();

    if (!key) {
      return accumulator;
    }

    const value = rawValue
      ? rawValue.replace(/^"|"$/g, '').replace(/^'|'$/g, '')
      : true;

    return {
      ...accumulator,
      [key]: value,
    };
  }, {});
}

export default function MDXCodeBlock({ children }) {
  const child = Array.isArray(children) ? children[0] : children;
  if (!child || !child.props) {
    return (
      <pre>
        <code>{flattenChildren(children)}</code>
      </pre>
    );
  }
  const meta = parseMeta(child?.props?.metastring);
  const languageClass = child?.props?.className || '';
  const language = (
    meta.lang ||
    meta.language ||
    languageClass.replace('language-', '') ||
    'text'
  ).toLowerCase();
  const filename = meta.filename || meta.title || undefined;
  const label = filename || language;
  const code = flattenChildren(child?.props?.children).replace(/\n$/, '');
  const snippet = {
    language,
    code,
    value: language,
    label,
    filename,
  };

  return (
    <CodeBlock className="mb-8" data={[snippet]} defaultValue={snippet.value}>
      <CodeBlockHeader className="items-center justify-between">
        <CodeBlockFiles>
          {(item) => (
            <CodeBlockFilename key={item.language} value={item.language}>
              {item.label || item.filename || item.language}
            </CodeBlockFilename>
          )}
        </CodeBlockFiles>
        <CodeBlockCopyButton />
      </CodeBlockHeader>
      <CodeBlockBody>
        {(item) => (
          <CodeBlockItem key={item.language} value={item.language}>
            <CodeBlockContent language={item.language}>
              {item.code}
            </CodeBlockContent>
          </CodeBlockItem>
        )}
      </CodeBlockBody>
    </CodeBlock>
  );
}
