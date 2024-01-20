function clearForm() {
  let search = (document.forms["Form-Container"]["search"].value;
  if (search === "") {
    alert("Please fill in a valid search");
    return false;
  }
}
