export function dynamicImport(path, chunkName) {
  return () => import(/* webpackChunkName: `` */ path)
}
