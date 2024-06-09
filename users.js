async function methodGetUsers() {
  let xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
  xhr.send()

  xhr.onload = function () {
    let response = JSON.parse(xhr.response)

    if (response && Array.isArray(response) && response.length > 0) {
      response.forEach((user, index) => {
        let row = '<tr style="border-collapse: collapse;">'
        row += '<td>' + index + '</td>'
        row += '<td>' + user.id + '</td>'
        row += '<td>' + user.name + '</td>'
        row += '<td>' + user.username + '</td>'
        row += '<td>' + user.email + '</td>'
        row += '<td>' + user.phone + '</td>'
        row += '<td>' + user.address.city + '</td>'
        row += '</tr > '

        $('table tbody').append(row)
      })
    }
  }
}