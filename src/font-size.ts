import { Extension } from '@tiptap/core';
import '@tiptap/extension-text-style';

export interface FontSizeOptions {
    types: string[],
    defaultSize: string,
}

declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size attribute
             */
            setFontSize: (size: string) => ReturnType,
            /**
             * Unset the font size attribute
             */
            unsetFontSize: () => ReturnType,
        }
    }
}

export const FontSize = Extension.create<FontSizeOptions>({
    name: 'fontSize',

    defaultOptions: {
        types: ['textStyle'],
        defaultSize: '12pt',
    },

    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: this.options.defaultSize,
                        parseHTML: (element) => element.style.fontSize || this.options.defaultSize,
                        renderHTML: (attributes) => ({ style: `font-size: ${attributes.fontSize};` }),
                    },
                },
            },
        ];
    },

    addCommands() {
        return {
            setFontSize: (fontSize) => ({ chain }) => chain()
                .setMark('textStyle', { fontSize })
                .run(),
            unsetFontSize: () => ({ chain }) => chain()
                .setMark('textStyle', { fontSize: null })
                .removeEmptyTextStyle()
                .run(),
        };
    },
});
