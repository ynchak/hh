const splitColumn = (column, rows) => {
  const lines = column.split("\n");
  const countColumns = Math.ceil(lines.length / rows);
  const columns = [...lines.splice(0, rows)];

  for (let i = 1; i < countColumns; i++) {
    const peice = lines.splice(0, rows);
    for (let j = 0; j < peice.length; j++) {
      // console.log(columns[j]);
      columns[j] = `${columns[j]}\t${peice[j]}`;
    }
  }
  window.navigator.clipboard.writeText(columns.join("\n"));
};

export default splitColumn;
