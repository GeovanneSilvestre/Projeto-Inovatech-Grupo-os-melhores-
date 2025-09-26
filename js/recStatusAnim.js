export default function initStatusAnim() {

   const recStatus = document.querySelector('.rec-status');

   if (recStatus.classList.contains('rec-waiting')){
      const statusAnim = document.querySelector('#status-anim');
      console.log(statusAnim);

      const setAnimation = setInterval(() => {
         if (statusAnim.textContent != '...') {
            statusAnim.textContent += '.';
         }
         else {
            statusAnim.textContent = '';
         }
      }, 500);
   }

}