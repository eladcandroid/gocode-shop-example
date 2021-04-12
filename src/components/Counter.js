function Counter(props) {
  console.log("props", props);
  const { color, initialCount, headers, children } = props;
  return (
    <div style={{ color }}>
      {color}
      {children}
      {/* {headers && headers[0]}:<br />
      {headers && headers[1]} */}
      <br />
      {initialCount}
    </div>
  );
}

export default Counter;
