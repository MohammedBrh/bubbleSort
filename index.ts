import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const test1 = [7, 12, 9, 11, 3];
  const test2 = [64, 34, 25, 12, 22, 11, 90];
  res.send(
    `list \t:` +
      test1 +
      ` <br /> sorted list \t:` +
      bubbleSort(test1) +
      ` <br /> ------------------------------------  <br />` +
      `list \t:` +
      test2 +
      ` <br /> sorted list \t:` +
      bubbleSort(test2)
  );
});

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});

function bubbleSort(array: any[]) {
  var i, j, temp;

  for (i = 0; i < array.length - 1; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
