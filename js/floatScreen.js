
export default function initFloatScreen () {

   function floatScreen(event) {
      let [X, Y] = [event.clientX, event.clientY];
      
      outputLibras.style.top = `${Y - 20}px`;
      outputLibras.style.left = `${X - 20}px`;
   }

   function mouseDown() {
      document.body.addEventListener('mousemove', floatScreen);
      outputLibras.addEventListener('mouseup', mouseUp);
      outputLibras.classList.add('float-mode');
   }

   function mouseUp() {
      document.body.removeEventListener('mousemove', floatScreen);
      outputLibras.removeEventListener('mouseup', mouseUp);
      // outputLibras.classList.remove('float-mode');
   }

   const outputLibras = document.querySelector('.output-libras-section');
   outputLibras.addEventListener('mousedown', mouseDown);
} 
