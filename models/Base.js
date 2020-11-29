class Base {
  constructor(nombreBase, minutos) {
      this.nombreBase = nombreBase;
      this.minutos = minutos;
      this.siguiente = null;
  }


  articleToHtml() {
      let productString = '<div class="card my-2"><div class="card-content"><div class="title is-4">Base:</div>';
      for (let key in this) {
          productString += `<div>${key}: ${this[key]}</div>`;
      }

      return productString + "</div></div>";
  }

  articleToHtmlRecorrido(base, hora) {
      let productString = '<li class="list-group-item">';
      for (let key in this) {
          productString += `<div>${key}: ${this[key]}</div>`;
      }

      let texto = "Estas en " + base + " a las " + hora;

      return productString + texto + "</li>";
  }

}

export default Base;
