export const formRules = {
    usernameRules: [
        {
            required: true,
            message: "Please input username!"
        }
    ],

    passwordRules: [
        {
            required: true,
            message: "Please input password!"
        },
        {
            min: 6,
            message: "Password minimum length is 6!"
        },
        {
            max: 12,
            message: "Password maximum length is 12!"
        },
    ],

    phoneRules: [
        {
            required: true,
            message: "Please input phone numbers!"
        },
        {
            len: 10,
            message: "Phone number length must be 10!"
        },
        {
            pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
            message: "Phone number must be all number characters!"
        }
    ],

    emailRules: [
        {
            required: true,
            message: "Please input email!"
        },
        {
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Email must be correct format!"
        }
    ],

    fullnameRules: [
        {
            required: true,
            message: "Please input full name!"
        },
        {
            pattern: /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/,
            message: "Your full name must be at least 2 words!"
        }
    ]
}