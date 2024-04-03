import Swal from 'sweetalert2';

const registerSuccess = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        text: 'Registro Completado!',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000
    });
}

export {
    registerSuccess
}