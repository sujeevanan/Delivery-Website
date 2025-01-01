import jwt from "jsonwebtoken";

const adminMiddleWare = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    const token_decode = jwt.verify(token, process.env.ADMIN_JWT_SECRET);
    req.body.adminId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
export default adminMiddleWare;
