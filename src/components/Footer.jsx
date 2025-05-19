function Footer() {
  const hour = new Date().getHours();
  return (
    <footer className="footer">
      <p>
        It is {hour}'O Clock. We're currently{" "}
        {hour >= 22 || hour < 9 ? "closed" : "open"}!
      </p>
    </footer>
  );
}

export default Footer;
