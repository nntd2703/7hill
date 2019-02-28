function hideListItemCategory () {
  var header = document.getElementsByClassName('headerGroupItem') //use let
  var contentCategory = document.getElementsByClassName('contentCategory')
  if ($(this).width() <= 767) {
    // header.setAttribute("data-toggle", "collapse");
    // header.setAttribute("data-target", "#listItem");
    // item.classList.add("collapse");
    for (var i = 0; i < header.length; i++) { //dung map thay vi dung for
      header[i].setAttribute('data-target', '#listItem' + i)
      var itemCollapse = document.getElementsByClassName('listItemCollapse' + i)
      if (itemCollapse && itemCollapse.length != 0) {
        itemCollapse[0].setAttribute('id', 'listItem' + i)
        itemCollapse[0].classList.add('collapse')
      }
    }
    contentCategory[0].classList.add('flex-column')
  } else {
    for (var i = 0; i < header.length; i++) { //same problem
      var itemCollapse = document.getElementsByClassName('listItemCollapse' + i)
      if (itemCollapse.length != 0) {
        itemCollapse[0].removeAttribute('id')
        itemCollapse[0].classList.remove('collapse')
        console.log(itemCollapse)
      }
      header[i].removeAttribute('data-target')
    }
    contentCategory[0].classList.remove('flex-column')
  }
}
