class UserService {
  constructor(username, password) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://example.com/api/user/authenticate?username=' +
      username + '&password=' + password, false);
    xhr.responseType = 'json';

    xhr.send();

    let result = false;

    if (xhr.status !== 200) {
      result = xhr.statusText;
    } else {
      result = true;
    }           

    if (result !== true) {
      throw new Error(result);
    }

    this.username = username;
  }
}

$('#login').click(function () {
  let username = $('#username').val();
  let password = $('#password').val();

  try {
    let res = new UserService(username, password);
    document.location.pathname = '/home';
  } catch (error) {
    alert(error);
  }
});