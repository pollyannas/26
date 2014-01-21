var m;

var blogimage = document.querySelector('.blog .image');
if (blogimage) {
  document.querySelector('.author .picture').src = blogimage.src
  blogimage.style.display = 'none'
}