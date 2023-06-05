export async function getAllTexts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return data;
}
