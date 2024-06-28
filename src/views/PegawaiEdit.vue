<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
              <div class="card-header pb-0">
                <div class="row">
                <div class="col-md-6"><h6>Edit Pegawai <b>{{pegawai.nama}}</b></h6></div>
                        <div class="col-md-6" align="right">
                            <router-link :to="'../pegawai'" class="btn btn-sm btn-dark m-1">Kembali</router-link>
                        </div>
                    </div>
              </div>
              <div class="card-body pt-0 pb-2 ">
                  <form @submit.prevent="submitForm" enctype="multipart/form-data" method="post">
                      <div class="mb-3">
                            <input type="hidden" name="idpegawai" id="idpegawai" v-model="pegawai.idpegawai">
                          <label for="nama" class="form-label">Nama</label>
                          <input type="text" class="form-control" id="nama" v-model="pegawai.nama" required>
                       </div>
                      <div class="mb-3">
                          <label for="jabatan" class="form-label">Jabatan</label>
                          <input type="text" class="form-control" id="jabatan" v-model="pegawai.jabatan" required>
                      </div>
                      <div class="mb-3">
                          <label for="email" class="form-label">Email</label>
                          <input type="email" class="form-control" id="email" v-model="pegawai.email" required>
                      </div>
                      <div class="mb-3">
                          <label for="hp" class="form-label">No. HP</label>
                          <input type="text" class="form-control" id="hp" v-model="pegawai.hp" required>
                      </div>
                      <div class="mb-3">
                          <label for="foto" class="form-label">Foto</label>
                          <p>Abaikan jika tidak diperbarui</p>
                          <input type="file" class="form-control" id="foto" @change="handleFileUpload">
                          <input type="hidden" class="form-control" id="fotolama" v-model="pegawai.foto">
                      </div>
                      <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  </template>
<script>
// import axios from 'axios'

// export default {
//   name:'pegawai',
//   data() {
//     return {
//       form: {
//         nama: '',
//         jabatan: '',
//         email: '',
//         hp: '',
//         foto: null,
//       }
//     }
//   },
  
//   mounted() {
//     this.Pegawai_ByID();
//   },
  
//   methods: {
//     Pegawai_ByID() {
//       axios.get('http://localhost:8080/pegawai/' + this.$route.params.idpegawai).then(res => {
//         this.pegawai = res.data.data_pegawai;
//         //console.log(this.pegawai);
//       });
//     },
//     submitForm() {
//       // Handle form submission here
//       const formData = new FormData();
//       //const idpegawai = this.$route.params.idpegawai;  // Remove this line
//       formData.append('nama', this.form.nama);
//       formData.append('jabatan', this.form.jabatan);
//       formData.append('email', this.form.email);
//       formData.append('hp', this.form.hp);
//       formData.append('foto', this.form.foto);
//       formData.append('password', '123456789');
//       axios.post('http://localhost:8080/pegawai/update/', formData)
//         .then(response => {
//           alert(response.data.message);
//           // Clear the form after submission
//           this.form.nama = '';
//           this.form.jabatan = '';
//           this.form.email = '';
//           this.form.hp = '';
//           this.form.foto = null;
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     },
//     handleFileUpload(event) {
//       this.form.foto = event.target.files[0];
//     },
//   },
// }

import axios from 'axios';
      export default {
          name: 'pegawai',
          data(){
              return {
                  pegawai:[]
              }
          },
          mounted(){
              this.Pegawai_ByID();
          },
          methods: {
              Pegawai_ByID(){
                  const idpegawai=this.$route.params.idpegawai;
                  axios.get('http://localhost:8080/pegawai/'+idpegawai).then(res=>{
                      this.pegawai = res.data.data_pegawai;
                      //console.log(this.pegawai);
                  })
              },
                submitForm() {
                // Handle form submission here
                const formData = new FormData();
                //const idpegawai = this.$route.params.idpegawai;  // Remove this line
                formData.append('nama', this.pegawai.nama);
                formData.append('jabatan', this.pegawai.jabatan);
                formData.append('email', this.pegawai.email);
                formData.append('hp', this.pegawai.hp);
                formData.append('foto', this.pegawai.foto);
                formData.append('fotolama', this.pegawai.foto);
                formData.append('password', '123456789');
                axios.post('http://localhost:8080/pegawai/update/'+this.$route.params.idpegawai, formData)
                    .then(response => {
                    alert(response.data.message);
                    window.location.reload();
                    // Clear the form after submission
                    this.pegawai.nama = '';
                    this.pegawai.jabatan = '';
                    this.pegawai.email = '';
                    this.pegawai.hp = '';
                    this.pegawai.fotolama = '';
                    this.pegawai.foto = null;
                    })
                    .catch(error => {
                    console.error(error.response.data.messages.message);
                    });
                },
                handleFileUpload(event) {
                this.pegawai.foto = event.target.files[0];
                },
          },
      }
</script>