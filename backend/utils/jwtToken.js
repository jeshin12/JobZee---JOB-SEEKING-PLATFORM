export const sendToken = (user, statusCode, res, message) => {
    const token = user.getJWTToken();
    const expiresInDays = parseInt(process.env.COOKIE_EXPIRE, 10) || 1;
    const options = {
      expires: new Date(
        Date.now() + expiresInDays* 24 * 60 * 60 * 1000
      ),
      httpOnly: true, // Set httpOnly to true
    };
  
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      user,
      message,
      token,
    });
  };