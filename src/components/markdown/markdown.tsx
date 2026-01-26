import { MarkdownRoot } from './styles';

// ----------------------------------------------------------------------

export type MarkdownProps = React.ComponentProps<typeof MarkdownRoot> & {
  content: string;
  firstLetter?: boolean;
};

export function Markdown({ content, firstLetter = false, ...other }: MarkdownProps) {
  return (
    <MarkdownRoot
      firstLetter={firstLetter}
      dangerouslySetInnerHTML={{ __html: content }}
      {...other}
    />
  );
}
