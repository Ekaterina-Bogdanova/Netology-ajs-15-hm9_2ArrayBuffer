export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
    this.dataView = new Uint16Array(buffer);
  }

  toString() {
    this.data = [];
    this.dataView.forEach((item) => {
      this.data.push(String.fromCharCode(item));
    });
    return this.data.join('');
  }
}
