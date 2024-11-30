const getCookie = async (req, res) => {
  const hobby = req.cookies.hobby;
  res.send(hobby);
};
const setCookie = async (req, res) => {
  res.cookie("hobby", "meditating", { maxAge: 900000, httpOnly: true });
  res.send("Cookie set");
};
export { getCookie, setCookie };
