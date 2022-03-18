export default function ScrollToTop() {
  const clickHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <span
      onClick={clickHandler}
      className="scroll-to-top scroll-to-target"
      data-target="html"
    >
      <i className="fa-solid fa-angle-up"></i>
    </span>
  );
}
