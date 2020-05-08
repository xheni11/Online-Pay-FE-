

export function convertUint8ArrayToBase64(data:any, length: number) {
  let STRING_CHAR = "";
  for (var i = 0; i < length; i++) {
    STRING_CHAR = STRING_CHAR + String.fromCharCode(data[i]);
  }
  return btoa(STRING_CHAR);
}
