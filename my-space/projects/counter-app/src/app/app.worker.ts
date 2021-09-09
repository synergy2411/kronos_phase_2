/// <reference lib="webworker" />
addEventListener('message', ({ data }) => {
  console.log("DATA - ", data)
  const sum = data.num1 + data.num2
  postMessage(sum);
});
