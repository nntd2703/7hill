<template>
  <div class="login-form">
    <form>
      <h2 class="text-center">Sign in</h2>
      <div class="form-group">
        <small id="passwordHelp" class="text-danger">{{errorMessage}}</small>
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-user"></i></span>
          <input type="text" class="form-control" name="username" placeholder="Username" required="required" v-model="user.username">
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input type="password" class="form-control" name="password" placeholder="Password" required="required" v-model="user.password">
        </div>
      </div>
      <div class="form-group">
        <button type="button" class="btn btn-primary login-btn btn-block" @click="login(user)">Sign in</button>
      </div>
      <div class="clearfix">
        <label class="pull-left checkbox-inline"><input type="checkbox"> Remember me</label>
        <a href="#" class="pull-right">Forgot Password?</a>
      </div>
      <div class="or-seperator"><i>or</i></div>
      <p class="text-center">Login with your social media account</p>
      <div class="text-center social-btn">
        <a href="#" class="btn btn-primary"><i class="fa fa-facebook"></i>&nbsp; Facebook</a>
        <a href="#" class="btn btn-info"><i class="fa fa-twitter"></i>&nbsp; Twitter</a>
        <a href="#" class="btn btn-danger"><i class="fa fa-google"></i>&nbsp; Google</a>
      </div>
    </form>
    <p class="text-center text-muted small">Don't have an account? <a href="#">Sign up here!</a></p>
  </div>
</template>
<script>
import router from '@/router/index'
import { firebase } from '@/services/firebaseConfig'

export default {
  name: 'login-page',
  mounted () {

  },
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    login (userCurrent) {
      if (userCurrent.username !== '' && userCurrent.password !== '' && userCurrent.username && userCurrent.password) {
        var ref = firebase.database().ref('users').orderByChild('username').equalTo(userCurrent.username)
        ref.once('value', snapshot => {
          if (snapshot.exists()) {
            var user = snapshot.val()
            console.log(userCurrent.password)
            if (Object.values(user)[0].password === userCurrent.password) {
              router.push('index')
            } else {
              this.errorMessage = 'Username or password is invalid'
            }
          } else {
            this.errorMessage = 'Username or password is invalid'
          }
        })
      } else {
        this.errorMessage = 'Username and password can not be blank'
      }
    }
  }
}
</script>

<style scoped type="scss">
  .login-form {
    width: 385px;
    margin: 30px auto;
  }
  .login-form form {
    margin-bottom: 15px;
    background: #f7f7f7;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    padding: 30px;
  }
  .login-form h2 {
    margin: 0 0 15px;
  }
  .form-control, .login-btn {
    min-height: 38px;
    border-radius: 2px;
  }
  .input-group-addon {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #555;
    text-align: center;
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .input-group-addon .fa {
    font-size: 18px;
  }
  .login-btn {
    font-size: 15px;
    font-weight: bold;
  }
  .social-btn .btn {
    border: none;
    margin: 10px 3px 0;
    opacity: 1;
  }
  .social-btn .btn:hover {
    opacity: 0.9;
  }
  .social-btn .btn-primary {
    background: #507cc0;
  }
  .social-btn .btn-info {
    background: #64ccf1;
  }
  .social-btn .btn-danger {
    background: #df4930;
  }
  .or-seperator {
    margin-top: 20px;
    text-align: center;
    border-top: 1px solid #ccc;
  }
  .or-seperator i {
    padding: 0 10px;
    background: #f7f7f7;
    position: relative;
    top: -11px;
    z-index: 1;
  }
</style>
