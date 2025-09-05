function toggleCard(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('svg');

    if (content.classList.contains('max-h-0')) {
      content.classList.remove('max-h-0');
      content.classList.add('max-h-[300px]');
      icon.classList.add('rotate-180');
    } else {
      content.classList.add('max-h-0');
      content.classList.remove('max-h-[300px]');
      icon.classList.remove('rotate-180');
    }
  }