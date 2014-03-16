var m;

var blogimage = document.querySelector('.blog .image');
if (blogimage) {
  document.querySelector('.author .picture').src = blogimage.src
  blogimage.style.display = 'none'
  
  var description = document.querySelector('.description')
  description.parentNode.removeChild(description)
  var ref = document.querySelector('header.blog .author')
  ref.parentNode.insertBefore(description, ref)
}