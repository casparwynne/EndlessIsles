fetch('_footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-container').innerHTML = data;
    document.getElementById('year').textContent = new Date().getFullYear();

  })
  .catch(error => console.error('Footer load error:', error));

