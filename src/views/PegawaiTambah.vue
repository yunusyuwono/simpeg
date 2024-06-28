<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card">
            <div class="card-header pb-0">
              <h6>Tambah Pegawai</h6>
            </div>
            <div class="card-body pt-0 pb-2 ">
                <form @submit.prevent="submitForm" enctype="multipart/form-data" method="post">
                    <div class="mb-3">
                        <label for="nama" class="form-label">Nama</label>
                        <input type="text" class="form-control" id="nama" v-model="form.nama" required>
                    </div>
                    <div class="mb-3">
                        <label for="jabatan" class="form-label">Jabatan</label>
                        <input type="text" class="form-control" id="jabatan" v-model="form.jabatan" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="form.email" required>
                    </div>
                    <div class="mb-3">
                        <label for="hp" class="form-label">No. HP</label>
                        <input type="text" class="form-control" id="hp" v-model="form.hp" required>
                    </div>
                    <div class="mb-3">
                        <label for="foto" class="form-label">Foto</label>
                        <input type="file" class="form-control" id="foto" @change="handleFileUpload">
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
import axios from 'axios'

export default {
  data() {
    return {
      form: {
        nama: '',
        jabatan: '',
        email: '',
        hp: '',
        foto: null,
      }
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      const formData = new FormData();
      formData.append('nama', this.form.nama);
      formData.append('jabatan', this.form.jabatan);
      formData.append('email', this.form.email);
      formData.append('hp', this.form.hp);
      formData.append('foto', this.form.foto);
      formData.append('password', '123456789');

      axios.post('http://localhost:8080/pegawai', formData)
        .then(response => {
          alert(response.data.message);
          // Clear the form after submission
          this.form.nama = '';
          this.form.jabatan = '';
          this.form.email = '';
          this.form.hp = '';
          this.form.foto = null;
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleFileUpload(event) {
      this.form.foto = event.target.files[0]
    }
  }
}
</script>