var app = new Vue(
  {
    el : "#root",
    data : {
      indiceImmagini : 0,
      immagini : [
        "file:///Users/francescobello/Desktop/Bello%20Francesco/vue-slider/slider%20img/img.png",
        "file:///Users/francescobello/Desktop/Bello%20Francesco/vue-slider/slider%20img/img2.png",
        "file:///Users/francescobello/Desktop/Bello%20Francesco/vue-slider/slider%20img/img3.png",
        "file:///Users/francescobello/Desktop/Bello%20Francesco/vue-slider/slider%20img/img4.png",
        "file:///Users/francescobello/Desktop/Bello%20Francesco/vue-slider/slider%20img/img5.png",
        "file:///Users/francescobello/Desktop/Bello%20Francesco/vue-slider/slider%20img/img6.png"
      ]
    },
      methods : {
        next_image() {
               this.indiceImmagini += 1;
               if(this.indiceImmagini > this.indiceImmagini + 1) {
                   this.indiceImmagini = 0;
               }
           },
           prev_image() {
               this.indiceImmagini -= 1;
               if(this.indiceImmagini < 0) {
                   this.indiceImmagini = this.immagini.length - 1;
               }
           }
      }
  }
)
