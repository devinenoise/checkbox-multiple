const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  // Check if they had the shift key down AND check that the box is being checked
  // flag variable inBetween
  let inBetween = false;
  // hold down shift and check
  if (e.shiftKey && this.checked) {
    // loop over every checkbox
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      // if it's between the two start and end boxes they should also be checked
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
