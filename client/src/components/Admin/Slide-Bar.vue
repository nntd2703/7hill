<!--suppress ALL -->
<template>
  <div class="wrapper">
    <!-- Sidebar Holder -->
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3>7 HILL</h3>
      </div>

      <ul class="list-unstyled components">
        <p>Category</p>
        <li class="active">
          <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
          <ul class="collapse list-unstyled" id="homeSubmenu">
            <li><a href="#">Home 1</a></li>
            <li><a href="#">Home 2</a></li>
            <li><a href="#">Home 3</a></li>
          </ul>
        </li>
        <li>
          <a href="#">About</a>
          <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            <li><a href="#">Page 1</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <ul class="list-unstyled CTAs">
        <li><a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to the article</a></li>
      </ul>
    </nav>

    <!-- Page Content Holder -->
    <div id="content" class="w-100">

      <nav class="navbar navbar-default">
        <div class="container-fluid">

          <div class="navbar-header">
            <button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn">
              <i class="glyphicon glyphicon-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
              <li><a href="#">Page</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="row">
        <table class="table table-striped col-md-8">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in items" v-bind:key="item['.key']">
            <th scope="row">{{item.key}}</th>
            <td>{{item.name}}</td>
            <td>{{item.key}}</td>
            <td>{{item.name}}</td>
          </tr>
          </tbody>
        </table>

        <form class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="text" class="form-control col-12" id="itemName" aria-describedby="emailHelp" placeholder="Enter email" v-model="newItem.name">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Key</label>
            <input type="text" class="form-control col-12" id="itemKey" aria-describedby="emailHelp" placeholder="Enter email" v-model="newItem.key">
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control col-12" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="selectedImage">
            <div class="helper"></div>
            <div class="drop display-inline align-center" @dragover.prevent @drop="onDrop">
              <div class="helper"></div>
              <label v-if="!image" class="btn display-inline">
                SELECT OR DROP AN IMAGE
                <input type="file" name="image" @change="onChange" accept="image/*" >
              </label>
              <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
                <img :src="image" alt="" class="img"/>
                <br>
                <br>
                <button class="btn" @click="removeFile">REMOVE</button>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btnCenter" value="add Item" @click="addItem()">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { firebase } from '@/services/firebaseConfig'

let itemArr = firebase.database().ref('items')
export default {
  name: 'Slide-Bar',
  firebase: {
    items: itemArr
  },
  data () {
    return {
      newItem: {
        name: '',
        key: '',
        imageUrl: '',
        image: null,
        fileName: ''
      },
      image: ''
    }
  },
  mounted () {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active')
        $(this).toggleClass('active')
      })
    })
  },
  methods: {
    addItem () {
      let key
      let imageUrl
      if (!this.image) {
        return
      }
      const item = {
        name: this.newItem.name,
        key: this.newItem.key
      }
      console.log('newItem', item)
      // const file = this.image
      itemArr.push(item)
        .then(data => {
          key = data.key
          return key
        })
        .then(key => {
          const fileName = this.newItem.fileName
          const ext = fileName.slice(fileName.lastIndexOf('.'))
          return firebase.storage().ref('items/' + key + '.' + ext).put(this.newItem.image)
        })
        .then(snapshot => {
          snapshot.ref.getDownloadURL().then(function(downloadURL) {
            return firebase.database().ref('items').child(key).update({ imageUrl: downloadURL })
          });
        })
        .catch(error => {
          console.log(error)
        })
    },
    onDrop: function (e) {
      e.stopPropagation()
      e.preventDefault()
      var files = e.dataTransfer.files
      this.createFile(files[0])
    },
    async onChange (e) {
      var files = e.target.files
      this.newItem.image = files[0]
      this.createFile(files[0])
    },
    createFile (file) {
      if (!file.type.match('image.*')) {
        alert('Select an image')
        return
      }
      // var img = new Image()
      var reader = new FileReader()
      reader.onload = (e) => {
        this.image = e.target.result
        this.imageUrl = reader.result
      }
      reader.readAsDataURL(file)
    },
    removeFile () {
      this.image = ''
    }
  }
}
</script>

<style scoped type="scss">
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

  body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
  }

  a,
  a:hover,
  a:focus {
    text-decoration: none;
    transition: all 0.3s;
  }

  .navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
  }

  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
  }

  /* ---------------------------------------------------
      SIDEBAR STYLE
  ----------------------------------------------------- */

  .wrapper {
    display: flex;
    align-items: stretch;
  }

  #sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #7386D5;
    color: #fff;
    transition: all 0.3s;
  }

  #sidebar a,
  #sidebar a:hover,
  #sidebar a:focus {
    color: inherit;
  }

  #sidebar.active {
    margin-left: -250px;
  }

  #sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
  }

  #sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
  }

  #sidebar ul p {
    color: #fff;
    padding: 10px;
  }

  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }

  #sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
  }

  #sidebar ul li.active > a,
  a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
  }

  a[data-toggle="collapse"] {
    position: relative;
  }

  a[aria-expanded="false"]::before,
  a[aria-expanded="true"]::before {
    content: '\e259';
    display: block;
    position: absolute;
    right: 20px;
    font-family: 'Glyphicons Halflings';
    font-size: 0.6em;
  }

  a[aria-expanded="true"]::before {
    content: '\e260';
  }

  ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
  }

  ul.CTAs {
    padding: 20px;
  }

  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  a.download {
    background: #fff;
    color: #7386D5;
  }

  a.article,
  a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
  }

  /* ---------------------------------------------------
      CONTENT STYLE
  ----------------------------------------------------- */

  #content {
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
  }

  #content p a {
    color:
  }

  /* ---------------------------------------------------
      MEDIAQUERIES
  ----------------------------------------------------- */

  @media (max-width: 768px) {
    #sidebar {
      margin-left: -250px;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #sidebarCollapse span {
      display: none;
    }
  }

  table {
    margin-left: 20px;
  }

  * {
    font-family: 'Arial';
    font-size: 12px;
  }

  *,
  *:after,
  *:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
  }

  html, body {
    height: 100%;
    text-align: center;
  }

  .btn {
    background-color: #d3394c;
    border: 0;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-weight: bold;
    padding: 15px 35px;
    position: relative;
  }

  .btn:hover {
    background-color: #722040;
  }

  input[type="file"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .align-center {
    text-align: center;
  }

  .helper {
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    width: 0;
  }

  .hidden {
    display: none !important;
  }

  .hidden.image {
    display: inline-block !important;
  }

  .display-inline {
    display: inline-block;
    vertical-align: middle;
  }

  .img {
    border: 1px solid #f6f6f6;
    display: inline-block;
    height: auto;
    max-height: 80%;
    max-width: 80%;
    width: auto;
  }

  .drop {
    background-color: #f2f2f2;
    border: 4px dashed #ccc;
    background-color: #f6f6f6;
    border-radius: 2px;
    height: 100%;
    max-height: 400px;
    max-width: 600px;
    width: 100%;
  }

  .btnCenter {
    display: flex;
    justify-content: space-between;
  }

</style>
