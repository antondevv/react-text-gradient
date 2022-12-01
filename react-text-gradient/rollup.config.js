import { terser } from "rollup-plugin-terser"
import resolve from "@rollup/plugin-node-resolve"

export default {
  input: "lib/esm/index.js",
  output: [
    {
      file: "lib/umd/react-text-gradient.umd.min.js",
      format: "umd",
      name: "ReactTextGradient",
      globals: {
        react: "React",
      },
    },
  ],
  plugins: [
    resolve(),
    terser({ format: { comments: false }, compress: true, mangle: true }),
  ],
  external: ["react"],
}
