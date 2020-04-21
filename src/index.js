function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('../src/', true, /\.(svg|jpg|png)$/));
importAll(require.context('../src/', true, /\.js$|\.scss$/));
