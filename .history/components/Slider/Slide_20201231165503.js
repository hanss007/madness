const Slide = ({ content }) => {
  const onClick = () => {
    alert("clicked");
  };

  return <div onClick={onClick}>{content}</div>;
};

export default Slide;
