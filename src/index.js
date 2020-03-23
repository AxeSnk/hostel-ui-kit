function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('../src/', true, /\.(svg)$/)
);
importAll(require.context('../src/', true, /\.js$|\.scss$/));
