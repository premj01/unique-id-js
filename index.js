const getId = () => {

  while (true) {
    return Number.parseInt((Math.floor(10 + Math.random() * 999)).toString().padStart(3, '0') + Date.now().toString());
  }
}
module.exports = getId;