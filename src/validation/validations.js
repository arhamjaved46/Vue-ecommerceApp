const emailRegex = [

    (v) => !!v || "Email Address is required",

    (v) =>

    /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/.test(v) || "E-mail must be valid",

];

const firstNameRegex = [

    (v) => !!v || "Name is required",

    (v) => (v && v.length <= 10) || "Name must be less than 10 characters",

];

const lastNameRegex = [

    (v) => !!v || "Name is required",

    (v) => (v && v.length <= 10) || "Name must be less than 10 characters",

];

const passwordRegex = [(v) => !!v || "Password is required",

    (v) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) || "Minimum eight characters, at least one letter and one number"
];

const numberRegex = [(v) => !!v || "Phone Number is required", (v) => /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/.test(v) || " Phone Number must be in valid format", ];

export {
    emailRegex,
    firstNameRegex,
    lastNameRegex,
    passwordRegex,
    numberRegex
};