import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Billing from "../views/Billing.vue";
import VirtualReality from "../views/VirtualReality.vue";
import RTL from "../views/Rtl.vue";
import Profile from "../views/Profile.vue";
import Signup from "../views/Signup.vue";
import Signin from "../views/Signin.vue";
import Pegawai from "../views/Pegawai.vue";
import PegawaiTambah from "../views/PegawaiTambah.vue";
import PegawaiEdit from "../views/PegawaiEdit.vue";
import PegawaiDetail from "../views/PegawaiDetail.vue";
import PegawaiHapus from "../views/PegawaiHapus.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/dashboard-default",
  },
  {
    path: "/dashboard-default",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/pegawai",
    name: "Pegawai",
    component: Pegawai,
  },
  {
    path: "/tambahpegawai",
    name: "Tambah Pegawai",
    component: PegawaiTambah,
  },
  {
    path: "/editpegawai/:idpegawai",
    name: "Edit Pegawai",
    component: PegawaiEdit,
  },
  {
    path: "/detailpegawai/:idpegawai",
    name: "Detail Pegawai",
    component: PegawaiDetail,
  },
  {
    path: "/hapuspegawai/:idpegawai",
    name: "Hapus Pegawai",
    component: PegawaiHapus,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/rtl-page",
    name: "RTL",
    component: RTL,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
