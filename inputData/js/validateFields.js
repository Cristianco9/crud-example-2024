const form = document.getElementById('form');
const userInput = document.querySelectorAll('#form input');

const regEx = {
    number : /^\d{16}$/,
	name : /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    date : /^\d{4}$/,
    code : /^\d{3}$/,
	id : /^.{4,12}$/
};