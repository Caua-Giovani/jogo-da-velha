import Swal from 'sweetalert2';
import styles from './alertas.module.css';

export const exibirAlertaResultado = (titulo, mensagem, funcao) => {
  Swal.fire({
    title: titulo,
    text: mensagem,
    icon: 'success',
    confirmButtonText: 'Continuar',
    showDenyButton: true,
    denyButtonText: 'Jogar Novamente',
    buttonsStyling: false,
    customClass: {
      popup: styles.popupSweet,
      confirmButton: styles.btnConfimSweet,
      denyButton: styles.btnCancelSweet
    },
    heightAuto: false
  }).then((result) => {
    if (result.isDenied) {
      funcao();
    }
  });
};

export const exibirAlertaVelha = (funcao) => {
  Swal.fire({
    title: 'Deu Velha!',
    imageUrl: 'https://media.tenor.com/_fFhuqzbi1sAAAAj/cobbler.gif',
    confirmButtonText: 'Continuar',
    showDenyButton: true,
    denyButtonText: 'Jogar Novamente',
    buttonsStyling: false,
    customClass: {
      popup: styles.popupSweet,
      title: styles.tituloVelha,
      confirmButton: styles.btnConfimSweet,
      denyButton: styles.btnCancelSweet
    },
    heightAuto: false
  }).then((result) => {
    if (result.isDenied) {
      funcao();
    }
  });
};