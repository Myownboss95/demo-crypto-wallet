@if ($notification)
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
    /*=============== VARIABLES CSS ===============*/
:root {
  /*========== Colors ==========*/
  --hue: 240;
  --first-color: hsl(var(--hue), 16%, 18%);
  --first-color-alt: hsl(var(--hue), 16%, 12%);
  --title-color: hsl(var(--hue), 8%, 15%);
  --text-color: hsl(var(--hue), 8%, 35%);
  --body-color: hsl(var(--hue), 100%, 99%);
  --container-color: #FFF;

  /*========== Font and typography ==========*/
  --body-font: 'Poppins', sans-serif;
  --big-font-size: 1.5rem;
  --normal-font-size: .938rem;

  /*========== z index ==========*/
  --z-modal: 1000;
}

@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 1.75rem;
    --normal-font-size: 1rem;
  }
}
body{
  background-color: var(--body-color);
  color: var(--text-color);
  position: relative;
}

/*=============== MODAL ===============*/
/* .container{
  margin-left: 1rem;
  margin-right: 1rem;
} */

/* .modal{
  height: 100vh;
  display: grid;
  place-items: center;
} */

.modal__button{
  display: inline-block;
  background-color: var(--first-color);
  color: #FFF;
  padding: 1rem 1.25rem;
  border-radius: .5rem;
  transition: .3s;
}

.modal__button:hover{
  background-color: var(--first-color-alt);
}

.modal__container{
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsla(var(--hue), 18%, 75%, .8);
  width: 100%; 
  height: 100%; 
  display: grid;
  align-items: flex-end;
  overflow: auto;
  transition: all .3s;
  z-index: var(--z-modal);
  visibility: hidden;
  opacity: 0;

  /*=== Effect 3 ===*/
  /* perspective: 1000px; */
}

.modal__content{
  position: fixed;
  top: 10rem;
  left: 38%;
  overflow: scroll !important;
  /* transform: translate(-50%, -50%); */
  background-color: var(--container-color);
  text-align: center;
  padding: 3rem 2rem 2rem;
  border-radius: 1rem 1rem 0 0;
  transition: all .3s;

  /*=== Effect 1 ===*/
  transform: translateY(10%);

  /*=== Effect 2 ===*/
  /* transform: scale(.5) translateY(10%); */

  /*=== Effect 3 ===*/
  /* transform: rotateX(65deg) scale(.75) translateY(10%);
  transform-origin: 50% 100%; */
}
/* For Mobile Portrait View */
@media screen and (max-device-width: 640px)
and (orientation: portrait) {

  .modal__content{
    overflow: scroll !important;
  position: fixed;
  top: 10rem;
  /* margin: 0px; */
  left: 5%;
  }
  
}

/* For Mobile Landscape View */
@media screen and (max-device-width: 640px)
and (orientation: landscape) {

  .modal__content{
    overflow: scroll !important;
  position: fixed;
  top: 10rem;
  /* margin: 20px; */
  left: 5%;
  }
}

/* .modal__img{
  width: 150px;
  margin-bottom: .75rem;
} */

.modal__close{
  display: inline-flex;
  background-color: var(--first-color);
  border-radius: .25rem;
  color: #FFF;
  font-size: 1.5rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
}

.modal__title{
  font-size: var(--big-font-size);
  color: var(--title-color);
  font-weight: 500;
}

.modal__description{
  margin-bottom: 1.5rem;
}

.modal__button-width{
  width: 90%;
}

.modal__button-link{
  display: block;
  margin: 1rem auto 0;
  background-color: transparent;
  color: var(--first-color);
  font-weight: 500;
}

/* Show modal */
.show-modal{
  
  visibility: visible;
  opacity: 1;
  overflow: auto !important;
}
.modalBack{
  overflow: hidden;
}

.show-modal .modal__content{
  /*=== Effect 1 ===*/
  transform: translateY(0);
  overflow: scroll !important;
};

  /*=== Effect 2 ===*/
  /* transform: scale(1) translateY(0); */

  /*=== Effect 3 ===*/
  /* transform: rotateX(0) scale(1) translateY(0); */
}

/*=============== BREAKPOINTS ===============*/
/* For small devices */
@media screen and (min-width: 576px){
  .modal__content{
    overflow: scroll !important;
    margin: auto;
    width: 380px;
    border-radius: 1.25rem;
  }

  .modal__img{
    width: 170px;
  }
}
</style>
{{-- <section class="modal container"> --}}
    

    <div class="modal__container" id="modal-container">
        <div class="modal__content" style="overflow-y: scroll">
          <div style="overflow: scroll !important; height: 500px;">
            <div class="modal__close close-modal" style="padding: 4px" title="Close">
                <i class='fa fa-close'></i>
            </div>
            <h1 class="modal__title">{!! $notification?->name !!}</h1>
            <p class="modal__description">{!! $notification?->message !!}</p>

            <a href="{{route('register')}}" target="_blank" class="modal__button modal__button-width">
                Register Now
            </a>

            <button class="modal__button-link close-modal">
                Close
            </button>
        </div>
      </div>
    </div>
{{-- </section> --}}

<script type="text/javascript">
     const openBtn = document.getElementById('open-modal');
     const bodyFunction = document.getElementById('modal');
    const modalContainer = document.getElementById('modal-container')
    window.addEventListener('load', ()=>{
        console.log('modalContainer')
            modalContainer.classList.add('show-modal')
            bodyFunction.classList.add('modalBack')
        })

    /*=============== SHOW MODAL ===============*/
// const showModal = (openButton, modalContent) =>{
//     const openBtn = document.getElementById(openButton),
//     modalContainer = document.getElementById(modalContent)
    
//     if(openBtn && modalContainer){
//         openBtn.addEventListener('click', ()=>{
//             modalContainer.classList.add('show-modal')
//         })
//     }
// }

// window.addEventListener("load", showModal('open-modal','modal-container'));

// showModal('open-modal','modal-container')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
    bodyFunction.classList.remove('modalBack')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))
</script>
@endif

