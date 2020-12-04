export const sendToken = (user, res) => {
    const token = user.getJwtToken();

    const info = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        sameSite: true,
    };

    if (process.env.NODE_ENV === 'production') {
        info.secure = true;
    }

    res
        .status(200)
        .cookie('token', token, info)
        .json({
            success: true,
            token,
            user: {
                email: user.email,
                role: user.role,
            },
        });
};
