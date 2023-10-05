const div = document.querySelector('div');
div.addEventListener('mouseover',(event) => {
  if(event.target !== div){
   let styles =  event.target.style 
    event.target.style = `background-color:#${Math.round(Math.random() * 999) }`
    if(styles.backgroundColor !== '#efefef'){
      setTimeout(() => {
        styles.backgroundColor = '#efefef'
      }, 250)
    }
  }
})