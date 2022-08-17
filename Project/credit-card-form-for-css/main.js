// javascript to limit input tags only

cw.oninput = function () {
  if (this.value.length > 4)
      this.value = this.value.slice(0,4); 
}
cardnumber.oninput = function () {
  if (this.value.length > 16)
      this.value = this.value.slice(0,16); 
}
cardholders.oninput = function () {
  if (this.value.length > 40)
      this.value = this.value.slice(0,40);
}