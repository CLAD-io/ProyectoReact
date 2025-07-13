import Swal from 'sweetalert2'

export function AlertasSweets (texto, icono, btn, footer){
Swal.fire({
  text: texto,
  icon: icono,
  confirmButtonText: btn,
  footer: footer
})
}

export function AlertasSweets2 (texto, icono, btn){
Swal.fire({
  text: texto,
  icon: icono,
  confirmButtonText: btn
})
}

export function AlertasSweets3(texto){
  Swal.fire({
  toast: true,
  position: "top-end",
  title: texto,
  timer: 1500,
  timerProgressBar: true,
  background: 'rgb(255, 255, 255)',
  color: 'rgb(2, 70, 129)',
  showConfirmButton: false
})
}