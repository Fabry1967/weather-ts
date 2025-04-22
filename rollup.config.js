import typescript from '@rollup/plugin-typescript';
export default {
    input: 'src/index.ts', // input del rollup
    output: {
        file: 'dist/main.js', // output del rollup
        format: 'iife', // formato del output
        sourcemap: true, // cosi nel debug vedremo le indicazioni dell app.ts e nn del app.js
    },
    plugins: [typescript()]
}
