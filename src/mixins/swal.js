import Swal from 'sweetalert2'
import Vue from 'vue'

Vue.mixin({
  data() {
    return {}
  },
  methods: {
    swalCancel(msg) {
      return Swal.fire({
        title: 'Внимание!',
        text: msg,
        icon: 'warning',
        confirmButtonText: 'Да',
        showCancelButton: true,
        cancelButtonText: 'Нет'
      })
    },
    swalSuccess(msg) {
      return Swal.fire({
        title: '',
        text: msg,
        icon: 'success',
        confirmButtonText: 'Ок',
      })
    }
  }
})