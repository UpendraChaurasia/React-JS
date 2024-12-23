function Hello() {
  let myName = "Prashant";
  let number = 456;
  let fullName = () => {
    return "Prashant Jain";
  };
  return (
    <p>
      messageNo: {number} I am your master {fullName()}
    </p>
  );
}

export default Hello;
