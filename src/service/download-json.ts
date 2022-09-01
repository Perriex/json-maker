function download(
  content: string,
  fileName: string | null,
  contentType: string
) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName ?? "file";
  a.click();
}

export function onDownload(jsonData: object, fileName: string | null) {
  const name = localStorage.getItem("name") ?? fileName;

  download(JSON.stringify(jsonData, null, 3), fileName || name, "text/plain");
}
