require("dotenv").config({ silent: true });

let config = {
    PORT: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
    SCOPE_API_IDENTIFIER: process.env.SCOPE_API_IDENTIFIER || "development",
    database: {
        url: "mysql://master_admin:mzqT3YRnWXLx5HvgJ4W8@lbmls-production.c4lzrdwwwmmo.us-east-2.rds.amazonaws.com/lbmls_c1lbmls",
        options: {
            pool: {
                max: 10,
                min: 0,
                idle: 20000,
            },
            logging: console.log
        },
    },
    jwtOptions: {
        customUserKey: "token"
    },
    ui: {
        url: process.env.UI_URL || 'https://development.app.landbrokermls.com',
    }
};

module.exports = config;

