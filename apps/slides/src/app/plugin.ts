/* eslint-disable @typescript-eslint/no-explicit-any */
import { visit } from 'unist-util-visit';

export function remarkSlide() {
  return function (tree: any, VFile: any) {
    const fileByline = VFile.value.split('\n');
    const sectionize = setupSectionize(fileByline);
    console.log('react-markdown-tree', tree);

    visit(
      tree,
      (node: any) => node.type === 'thematicBreak' && fileByline[node.position.start.line - 1] === '---',
      sectionize,
    );
  };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setupSectionize = (_fileByline: any) =>
  function sectionize(_node: any, index: any, parent: any): void {
    const startIndex = index;

    const isEnd = (node: any) => node.type === 'paragraph' && node.children[0].value === '---*';
    const endIndex = parent.children.findIndex(isEnd);

    if (endIndex !== -1) {
      const between = parent.children.slice(startIndex + 1, endIndex);

      const section = {
        type: 'mdxJsxFlowElement',
        attributes: [
          {
            name: 'key',
            type: 'mdxJsxAttribute',
            value: '1',
          },
        ],
        name: 'Slide',
        children: between,
      };
      parent.children.splice(startIndex, endIndex, section);
    }
  };
