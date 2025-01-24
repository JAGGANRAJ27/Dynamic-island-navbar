import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/dynamic-island-navbar.min.js',
        format: 'umd', 
        name: 'DynamicIslandNavbar',
    },
    plugins: [
        css({ output: 'dist/dynamic-island-navbar.css' }),
        terser(),
    ],
};
