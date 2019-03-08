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

      <div>
        <label>Filter by Name:</label>
        <input class="form-control" v-model="filters.name.value"/>
        <v-table
          :data="listItemProduct"
          :filters="filters"
          :hideSortIcons="true"
          :currentPage.sync="currentPage"
          :pageSize="5"
          @totalPagesChanged="totalPages = $event" id="tableProduct">
          <thead slot="head">
          <th>Code</th>
          <v-th sortKey="name" defaultSort="desc">Name</v-th>
          <th>Image</th>
          </thead>
          <tbody slot="body" slot-scope="{displayData}">
          <tr v-for="row in displayData" :key="row.id">
            <td>{{ row.key }}</td>
            <td>{{ row.name }}</td>
            <td><img :src=row.imageUrl width="150" height="150"></td>
          </tr>
          </tbody>
        </v-table>
        <smart-pagination
          :currentPage.sync="currentPage"
          :totalPages="totalPages"
          id="paginationNav"
        />
      </div>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" class="form-control col-12" id="itemName" aria-describedby="emailHelp"
                 placeholder="Enter product name" v-model="newItem.name">
        </div>
        <div class="selectedImage">
          <div class="helper"></div>
          <div class="drop display-inline align-center" @dragover.prevent @drop="onDrop">
            <div class="helper"></div>
            <label v-if="!image" class="btn display-inline">
              SELECT IMAGE
              <input type="file" name="image" @change="onChange" accept="image/*">
            </label>
            <div class="hidden display-inline align-center" v-else v-bind:class="{ 'image': true }">
              <img :src="image" alt="" class="img" id="productImage" height="300" width="300"/>
              <br>
              <br>
              <button class="btn" @click="removeFile">REMOVE</button>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-primary btnCenter" value="add Item" @click="addItem()">Submit</button>
      </form>
    </div>
    <flash-message transitionIn="flash" class="flashpool"></flash-message>
  </div>
</template>

<script>
  import {firebase} from '@/services/firebaseConfig'

  let firebaseStr = firebase.firestore()
  export default {
    name: 'Slide-Bar',
    data() {
      return {
        currentPage: 1,
        totalPages: 0,
        filters: {
          name: { value: '', keys: ['name'] }
        },
        newItem: {
          name: '',
          key: '',
          imageUrl: '',
          image: null,
          fileName: ''
        },
        listItemProduct: this.getDataProduct(),
        image: '',
        errorType: 'error',
        warningType: 'warning',
        infoType: 'info',
        successType: 'success'
      }
    },
    mounted() {
      $(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active')
          $(this).toggleClass('active')
        })
      })
    },
    methods: {
      getDataProduct() {
        let arr = []
        firebase.firestore().collection('items').get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let data = {
              'id': doc.id,
              'key': doc.data().key,
              'name': doc.data().name,
              'imageUrl': doc.data().imageUrl,
            }
            console.log(data)
            arr.push(data)
          })
        })
        return arr
      },
      addItem() {
        let key
        this.newItem.key = Math.random().toString(36).substring(7)
        const item = {
          name: this.newItem.name,
          key: this.newItem.key,
          imageUrl: 'null'
        }
        // const file = this.image
        if (item.name !== '' && item.name && this.newItem.image) {
          firebaseStr.collection('items').add(item)
            .then(docRef => {
              key = docRef.id
              const fileName = this.newItem.image.name
              const ext = fileName.slice(fileName.lastIndexOf('.'))
              return firebase.storage().ref().child('items/' + key + '.' + ext).put(this.newItem.image)
            })
            .then(snapshot => {
              snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('downloadURL',downloadURL)
                return firebaseStr.collection('items').doc(key).update({imageUrl: downloadURL})
              })
            })
            .catch(error => {
              console.log(error)
              return error
            })
          this.flash('Import Sucess', this.successType, {
            timeout: 3000,
            important: false
          })

        } else {
          console.log('NoImage')
          this.flash('Please input again', this.errorType, {
            timeout: 3000,
            important: false
          })
        }
      },
      onDrop: function (e) {
        e.stopPropagation()
        e.preventDefault()
        var files = e.dataTransfer.files
        this.createFile(files[0])
      },
      async onChange(e) {
        var files = e.target.files
        this.newItem.image = files[0]
        this.createFile(files[0])
      },
      createFile(file) {
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
      removeFile() {
        this.image = ''
      }
    }
  }
</script>

<style scoped type="scss">
  @import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";

  #tableProduct td, #tableProduct th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  #tableProduct {
    margin-top: 20px;
  }

  #tableProduct tr:nth-child(even){background-color: #f2f2f2;}

  #tableProduct tr:hover {background-color: #ddd;}

  #tableProduct th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
  }

  #paginationNav .pagination .page-item a {
    font-size: .85rem !important;
  }

  .vt-sort:before{
    font-family: FontAwesome;
    padding-right: 0.5em;
    width: 1.28571429em;
    display: inline-block;
    text-align: center;
  }

  .vt-sortable:before{
    content: "\f0dc";
  }

  .vt-asc:before{
    content: "\f160";
  }

  .vt-desc:before{
    content: "\f161";
  }


  .flex-content {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }

  .flex-item {
    padding: 5px;
    width: 50%;
    height: 40px;
    font-weight: bold;
  }

  .flashpool {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: fixed;
    top: 20px;
    right: 20px;
    max-height: 400px;
    width: 260px;
    -webkit-perspective: 400px;
    perspective: 400px;
  }

  .flashpool .flash__message {
    width: 260px;
    -webkit-transition: all 500ms;
    -o-transition: all 500ms;
    transition: all 500ms;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-family: 'Oxygen', sans-serif;
    font-size: 13px;
    line-height: 130%;
  }

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
  }

  .drop {
    background-color: #f2f2f2;
    border: 4px dashed #ccc;
    background-color: #f6f6f6;
    border-radius: 2px;
    height: 80%;
    width: 80%;
  }

  .btnCenter {
    display: flex;
    justify-content: space-between;
  }

  @import url('https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i');

  html, body {
    height: 100%;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    background-color: #efefef;
    display: table;
    text-align: center;

  }
</style>
