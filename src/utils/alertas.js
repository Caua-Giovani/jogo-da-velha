import Swal from 'sweetalert2';
import styles from './alertas.module.css';

export const exibirAlertaResultado = (titulo, mensagem, funcao) => {
  Swal.fire({
    title: titulo,
    text: mensagem,
    icon: 'success',
    confirmButtonText: 'Continuar',
    showDenyButton: true,
    denyButtonText: 'Proxima Rodada',
    buttonsStyling: false,
    customClass: {
      popup: styles.popupSweet,
      confirmButton: styles.btnConfirmSweet,
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
    denyButtonText: 'Proxima Rodada',
    buttonsStyling: false,
    customClass: {
      popup: styles.popupSweet,
      title: styles.tituloVelha,
      confirmButton: styles.btnConfirmSweet,
      denyButton: styles.btnCancelSweet
    },
    heightAuto: false
  }).then((result) => {
    if (result.isDenied) {
      funcao();
    }
  });
};


export const exibirAlertaReinicio = (funcao) => {
  Swal.fire({
    title: 'Certeza que deseja reinciar?',
    text: 'Isso irá reiniciar todo o placar e a partida!',
    confirmButtonText: 'Não Reiniciar',
    showDenyButton: true,
    denyButtonText: 'Reiniciar',
    buttonsStyling: false,
    customClass: {
      popup: styles.popupSweet,
      title: styles.tituloVelha,
      confirmButton: styles.btnConfirmSweet,
      denyButton: styles.btnConfirmSweet
    },
    heightAuto: false
  }).then((result) => {
    if (result.isDenied) {
      funcao();
    }
  });
};


export const exibirAlertaFimDePartida = (titulo,mensagem,funcao) => {
  Swal.fire({
    title: titulo,
    text: mensagem,
    confirmButtonText: 'Continuar',
    showDenyButton: true,
    denyButtonText: 'Jogar Novamente',
    buttonsStyling: false,
    customClass: {
      popup: styles.popupSweet,
      title: styles.tituloVelha,
      confirmButton: styles.btnConfirmSweet,
      denyButton: styles.btnConfirmSweet2
    },
    heightAuto: false,
    didOpen: () => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 9999 
      });
    }
  }).then((result) => {
    if (result.isDenied) {
      funcao();
    }
  });
};