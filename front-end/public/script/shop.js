let togg1 = document.getElementById("togg1");

let d1 = document.getElementById("d1");

togg1.addEventListener("click", () => {
    if(getComputedStyle(d1).display != "none"){
      d1.style.display = "none";
    } else {
      d1.style.display = "block";
    }
  })


let togg2 = document.getElementById("togg2");

let d2 = document.getElementById("d2");

togg2.addEventListener("click", () => {
    if(getComputedStyle(d2).display != "none"){
      d2.style.display = "none";
    } else {
      d2.style.display = "block";
    }
  })


let togg3 = document.getElementById("togg3");

let d3 = document.getElementById("d3");

togg3.addEventListener("click", () => {
    if(getComputedStyle(d3).display != "none"){
      d3.style.display = "none";
    } else {
      d3.style.display = "block";
    }
  })


let togg4 = document.getElementById("togg4");

let d4 = document.getElementById("d4");

togg4.addEventListener("click", () => {
    if(getComputedStyle(d4).display != "none"){
        d4.style.display = "none";
    } else {
        d4.style.display = "block";
      }
    })


let togg5 = document.getElementById("togg5");

let d5 = document.getElementById("d5");

togg5.addEventListener("click", () => {
    if(getComputedStyle(d5).display != "none"){
        d5.style.display = "none";
    } else {
        d5.style.display = "block";
      }
    })


let togg6 = document.getElementById("togg6");

let d6 = document.getElementById("d6");

togg6.addEventListener("click", () => {
      if(getComputedStyle(d6).display != "none"){
          d6.style.display = "none";
      } else {
          d6.style.display = "block";
        }
      })


let togg7 = document.getElementById("togg7");

let d7 = document.getElementById("d7");

togg7.addEventListener("click", () => {
        if(getComputedStyle(d7).display != "none"){
            d7.style.display = "none";
        } else {
            d7.style.display = "block";
          }
        })


let togg8 = document.getElementById("togg8");

let d8 = document.getElementById("d8");

togg8.addEventListener("click", () => {
          if(getComputedStyle(d8).display != "none"){
              d8.style.display = "none";
          } else {
              d8.style.display = "block";
            }
          })


let togg9 = document.getElementById("togg9");

let d9 = document.getElementById("d9");

togg9.addEventListener("click", () => {
          if(getComputedStyle(d9).display != "none"){
              d9.style.display = "none";
          } else {
              d9.style.display = "block";
            }
          })


let togg10 = document.getElementById("togg10");

let d10 = document.getElementById("d10");

togg10.addEventListener("click", () => {
          if(getComputedStyle(d10).display != "none"){
              d10.style.display = "none";
          } else {
              d10.style.display = "block";
            }
          })


let togg11 = document.getElementById("togg11");

let d11 = document.getElementById("d11");

togg11.addEventListener("click", () => {
          if(getComputedStyle(d11).display != "none"){
              d11.style.display = "none";
          } else {
              d11.style.display = "block";
            }
          })


let togg12 = document.getElementById("togg12");

let d12 = document.getElementById("d12");

togg12.addEventListener("click", () => {
          if(getComputedStyle(d12).display != "none"){
              d12.style.display = "none";
          } else {
              d12.style.display = "block";
            }
          })

class numberinput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true })

    this.querySelectorAll('button').forEach(
      (button) => button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.name === 'max' ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
  }
}

class numberinput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector('input');
    this.changeEvent = new Event('change', { bubbles: true })

    this.querySelectorAll('button').forEach(
      (button) => button.addEventListener('click', this.onButtonClick.bind(this))
    );
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.name === 'min' ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value) this.input.dispatchEvent(this.changeEvent);
  }
}