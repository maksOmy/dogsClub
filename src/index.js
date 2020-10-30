const selectSingle_title = document.querySelectorAll('.select-title');
const selectSingle_labels = document.querySelectorAll('.select-label');

// Toggle menu

selectSingle_title.forEach((selectTitle) => {
    const selectContent = selectTitle.nextElementSibling;
    selectTitle.addEventListener('click', () => {
        const select = selectTitle.closest('.select');
        if ('active' === select.getAttribute('data-state')) {
          select.setAttribute('data-state', '');
          selectContent.style.opacity = "0";
          selectContent.style.zIndex = "0";    
        } else {
          select.setAttribute('data-state', 'active');
          selectContent.style.opacity = "1";
          selectContent.style.zIndex = "10";
        }
      });
})


// Close when click to option
selectSingle_labels.forEach((option) => {
    const selectContent = option.closest('.select-content');
    const selectTitle = selectContent.previousElementSibling;
    const selectSingle = option.closest('.select');
    option.addEventListener('click', (evt) => {
        selectTitle.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
        selectContent.style.opacity = "0";
        selectContent.style.zIndex = "0";
      });
});
  
