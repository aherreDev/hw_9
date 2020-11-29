class BusBase {
  constructor(){
      this.inicio = null;
      this.tamaño = 0;
  }

  addBase(nuevo){
      if(this.inicio === null){
          this.inicio = nuevo;
          nuevo.siguiente = this.inicio;
      }else{
          let aux = this.inicio;
          while(aux.siguiente !== this.inicio){
              aux = aux.siguiente;
          }
          aux.siguiente = nuevo;
          nuevo.siguiente = this.inicio;
      }
      this.tamaño++;
      this.print();
  }

  deleteBase(nombre) {
     if(this.tamaño === 1){
      this.inicio = null;
      this.tamaño--;
      this.print();
      return null;
     }
      let aux = this.inicio;
      if(aux.nombreBase === nombre){
         this.inicio = aux.siguiente;
         let temp = this.inicio;

          while(temp.siguiente.nombreBase !== nombre){
              temp = temp.siguiente;
          }
          this.tamaño--;
          temp.siguiente = this.inicio;
          this.print();
      }
      else {
          let temp = this.inicio;

          while(temp.siguiente.nombreBase !== nombre){
              temp = temp.siguiente;
          }
          temp.siguiente = temp.siguiente.siguiente;
          this.tamaño--;
          this.print();
          return temp.siguiente;
      }

  }

  searchBase(nombre) {
      if(this.inicio !== null){
          let aux = this.inicio;
          let fin = false;
          let x = 0;
          while(!fin){
              if(aux.nombreBase == nombre){
                  fin = true;
                  return aux;
              }
              aux = aux.siguiente;
              x++;
              if(x>this.tamaño){
                  alert("Base no encontrada");
                  return null
              }
          }
      }
      alert("Not found 404 :(");
      return null
  }

  print() {
    const list = document.querySelector("#list");
    list.innerHTML = "";
      if(!this.inicio) return false
      let aux = this.inicio;
      let fin = false;
      while(!fin){
        list.innerHTML += aux.articleToHtml();
          aux = aux.siguiente;
          if(aux.nombreBase === this.inicio.nombreBase){
              fin = true;
          }
      }
  }

  crearRecorrido(baseIn, horaIn, horaFin){
      const list = document.querySelector("#list");
      list.innerHTML = "";
      let baseaux = this.searchBase(baseIn);
      let horaaux = Number(horaIn);

      while(horaaux < horaFin){
          list.innerHTML += baseaux.articleToHtmlRecorrido(baseaux.nombreBase, horaaux);
          baseaux = baseaux.siguiente;
          horaaux += Number(baseaux.minutos);
      }
      list.innerHTML += baseaux.articleToHtmlRecorrido(baseaux.nombreBase, horaaux);
  }
}

export default new BusBase();
