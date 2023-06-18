import axios from 'axios';

export function exportObjectInfo(objectData) {
  const fileData = JSON.stringify(objectData);
  const blob = new Blob([fileData], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.download = 'object-info.json';
  link.href = url;
  link.click();
}

export function handleSubmit(event, file, setUploadedFile) {
  event.preventDefault();
  const url = 'https://httpbin.org/post';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('fileName', file.name);
  const config = {
    headers: {
      'content-type': file.type,
      'content-length': `${file.size}`,
    },
  };
  axios
    .post(url, formData, config)
    .then((response) => {
      setUploadedFile(response.data.file);
    })
    .catch((err) => console.log(err));
}

export function handleChange(e, setFile) {
  const fileReader = new FileReader();
  fileReader.readAsText(e.target.files[0], 'UTF-8');
  fileReader.onload = (e) => {
    setFile(e.target.result);
  };
}
