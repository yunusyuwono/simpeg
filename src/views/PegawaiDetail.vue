<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-12">
              <div class="card">
                  <div class="card-header pb-0">
                    <div class="row">
                        <div class="col-md-6"><h6>Detail Pegawai</h6></div>
                        <div class="col-md-6" align="right">
                            <router-link
                            :to="{ name: 'Edit Pegawai', params: { idpegawai: pegawai.idpegawai } }"
                            class="btn btn-info btn-sm m-1"
                          >
                            Edit Pegawai
                          </router-link>
                            <router-link :to="'../pegawai'" class="btn btn-sm btn-dark m-1">Kembali</router-link>
                        </div>
                    </div>
                    
                  </div>
                  <div class="card-body pt-0 pb-2 ">
                        <div class="row">
                            <div class="col-3">
                                <img v-if="pegawai.foto != ''" v-bind:src="'http://localhost:8080/foto/'+pegawai.foto"
                                class="img-thumbnail"
                                alt="user1"
                            />
                            </div>
                            <div class="col-9">
                                <h3>{{ pegawai.nama }}</h3>
                                <p>Jabatan: <b>{{ pegawai.jabatan }}</b></p>
                                <p>HP: <b>{{ pegawai.hp }}</b></p>
                                <p>Email: <b>{{ pegawai.email }}</b></p>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
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
              this.Pegawai_ByID();
          },
          methods: {
              Pegawai_ByID(){
                  const idpegawai=this.$route.params.idpegawai;
                  axios.get('http://localhost:8080/pegawai/'+idpegawai).then(res=>{
                      this.pegawai = res.data.data_pegawai;
                      //console.log(this.pegawai);
                  })
              }
          },
      }
      </script>