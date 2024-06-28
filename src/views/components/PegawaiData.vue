<template>
    <div class="card">
      <div class="card-header pb-0">
        <h6>Data Pegawai</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <router-link to="/tambahpegawai" class="btn btn-sm btn-primary m-2"> Tambah Pegawai</router-link>
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Nama 
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >
                  Jabatan
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  No.HP
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Email
                </th>
                <th
                  class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Aksi
                </th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(p, index) in this.pegawai" :key="index">
                  <td>
                    <div class="d-flex px-2 py-1">
                        <div>
                          <img v-if="p.foto != ''" v-bind:src="'http://localhost:8080/foto/'+p.foto"
                            class="avatar avatar-sm me-3"
                            alt="user1"
                          />
                          <img v-else-if="p.foto == ''" v-bind:src="'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'"
                            class="avatar avatar-sm me-3"
                            alt="user1"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ p.nama }}</h6>
                        </div>
                      </div>
                    </td>
                  <td>{{ p.jabatan }}</td>
                  <td class="text-center">{{ p.hp }}</td>
                  <td class="text-center">{{ p.email }}</td>
                  <td class="text-center">
                    <div class="btn-group">
                      <router-link :to="'detailpegawai/' + p.idpegawai" class="btn btn-sm btn-primary">Detail</router-link>
                    <router-link :to="'editpegawai/' + p.idpegawai" class="btn btn-sm btn-info">Edit</router-link>
                    <button class="btn btn-danger btn-sm" @click="hapusPegawai(p.idpegawai)">Hapus</button>
                  </div>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
    export default {
        name: 'pegawai',
        data(){
            return {
                pegawai:[]
            }
        },
        mounted(){
            this.PegawaiAll();
        },
        methods: {
            PegawaiAll(){
                axios.get('http://localhost:8080/pegawai').then(res=>{
                    this.pegawai = res.data.data_pegawai;
                    //console.log(this.pegawai);
                })
            },
            hapusPegawai(idpegawai) {
                axios.delete(`http://localhost:8080/pegawai/${idpegawai}`)
                    .then(response => {
                        alert(response.data.message);
                        this.PegawaiAll();
                      })
                      .catch(error => {
                        console.error(error);
                      });
            }
          }
    }
    </script>