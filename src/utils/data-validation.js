import httpRequest from "./http-request";


const dataValidation = (name, lastName, email, number, message) => {
    const resData = httpRequest({ name, lastName, email, number, message }, 'php/mail.php', 'POST');
    console.log(resData);
}

export default dataValidation;