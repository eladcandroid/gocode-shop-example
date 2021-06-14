function NumbersList() {
  function loopOverNumbers() {
    return numbers.map((element) => <li>{element}</li>);
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return <ul>{loopOverNumbers()}</ul>;
}

export default NumbersList;
