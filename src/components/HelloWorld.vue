<template>
  <div class="hello">
  </div>
  <div id="home"></div>
    <nav id="home" class="navbar navbar-expand-lg navbar-dark fixed-top" style="background-color: rgb(10, 154, 250);">
        <div class="container">
          <a class="navbar-brand" href="#">Daniel Johan</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
              <a class="nav-link" href="#about">About</a>
              <a class="nav-link" href="#webinar">Webinar & Workshop</a>
              <a class="nav-link" href="#contact">Contact Me</a>
            </div>
          </div>
        </div>
      </nav>
    <section  class="jumbotron text-center pt-5">
        <img src="img/MyPict1.jpeg" alt="Daniel Johan" width="200" class="rounded-circle img-thumbnail">
        <h1 class="display-4 fw-bolder">Daniel Johan</h1>
        <p class="lead fw-bold">Mahasiswa Universitas MDP</p>
    </section>
    <section id="about" style="background-color: rgb(10, 154, 250);">
          <div class="container">
              <div class="row text-center mb-3">
                <div class="col">
                  <h2>About Me</h2>
                </div>
           </div>
          <div class="row justify-content-center fs-5 text-center">
              <div class="col-md-4 text-white">
                <h3>Pendidikan :</h3>
                <p>SD Xaverius 8 Plaju</p>
                <p>SMP Xaverius 5 Plaju</p>
                <p>SMA Methodist 2 Palembang</p>
              </div>
              <div class="col-md-4 text-white">
                <h3>Hobi :</h3>
                <p>Playing Games Mobile</p>
                <p>Badminton</p>
              </div>
              </div>
          </div>
    </section>
    <section id="webinar">
      <div class="container">
        <div class="row text-center mb-3">
          <div class="col">
            <h2>My Certified</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <div class="card">
                <img src="img/webinar/1.jpg" class="card-img-top" alt="Webinar 1">
                <div class="card-body">
                  <p class="card-text">Anak Informatika Gak Bisa Ngoding?</p>
                </div>
              </div>
          </div>
              <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="img/webinar/2.jpg" class="card-img-top" alt="Webinar 2">
                    <div class="card-body">
                      <p class="card-text">Workshop Penggunaan Mendeley</p>
                    </div>
                  </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="img/webinar/3.jpg" class="card-img-top" alt="Webinar 3">
                    <div class="card-body">
                      <p class="card-text">Menjadi Manusia Paket Komplit</p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
      </section>
      <section id="contact" style="background-color: rgb(10, 154, 250);">
        <div class="container">
            <div class="row text-center mb-3">
                <div class="col">
                    <h2 class="text-primary">Contact Me</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form>
                        <div class="mb-3">
                          <label for="name" class="form-label">Name</label>
                          <input type="text" class="form-control" id="name" aria-describedby="name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" aria-describedby="email">
                        </div>
                        <div class="mb-3">
                            <label for="pesan" class="form-label">Pesan</label>
                            <textarea class="form-control" id="pesan" rows="3"></textarea>
                          </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                </div>
            </div>
        </div>
    </section>
    <footer class="text-white text-center p-2 bg-info bg-gradient">
        <p class="mt-1">Created by <a href="https://www.instagram.com/daniel.johan12/" class="text-white fw-bold">Daniel Johan</a></p>
    </footer>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>