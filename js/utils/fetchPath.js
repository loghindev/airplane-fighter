async function fetchPath() {
  const response = await fetch("/path.json");
  return await response.json();
}

export default fetchPath;
