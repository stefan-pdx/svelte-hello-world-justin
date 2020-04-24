import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "index.js",
    output: {
        file: "public/bundle.js",
        format: "es"
    },
    plugins: [
        svelte({
            css: css => {
                css.write('public/bundle.css');
			}
        }),
        resolve({
            dedupe: ["svelte"]
        })
    ]
}