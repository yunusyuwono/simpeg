<template>
    <div class="py-4 container-fluid">
        <div class="row">
            <div class="col-12">
              <div class="card">
                  <div class="card-header pb-0">
                    <h6>Edit Pegawai</h6>
                  </div>
                  <div class="card-body pt-0 pb-2 ">
    
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
              this.Pegawai_Hapus();
          },
          methods: {
              Pegawai_Hapus(){
                  const idpegawai=this.$route.params.idpegawai;
                  axios.delete('http://localhost:8080/pegawai/'+idpegawai).then(res=>{
                      this.pegawai = res.data.data_pegawai;
                      //console.log(this.pegawai);
                  })
                  .then(response => {
                    alert(response.data.message);
                    
                  })
                  .catch(error => {
                    console.error(error);
                  });
              }
          },
      }
      </script>