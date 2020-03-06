export function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function getDateOfBirth(dateString) {
  var options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(["id"], options);
}
