import Swal from 'sweetalert2';
import styles from './alertas.module.css';

export const exibirAlertaResultado = (titulo, mensagem,funcao) => {
  Swal.fire({
    title: titulo,
    text: mensagem,
    background: 'rgb(22, 33, 62)',
    color: 'white',
    confirmButtonText: 'Continuar',
    showDenyButton: true,
    denyButtonText: 'Jogar Novamente',
    customClass:{
        confirmButton: styles.btnConfimSweet,
        denyButton: styles.btnCancelSweet
    }
    }).then((result) => {
        if (result.isDenied) {
            funcao()
        }
        });
};


export const exibirAlertaVelha = (funcao) => {
    Swal.fire({
        title: 'Deu Velha!',
        background: 'rgb(22, 33, 62)',
        color:'rgb(233, 69, 96)',
        imageUrl: 'https://media.tenor.com/_fFhuqzbi1sAAAAj/cobbler.gif',
        imageAlt: 'GIF de velha',
        confirmButtonText: 'Continuar',
        showDenyButton:true,
        denyButtonText: 'Jogar Novamente' ,
        customClass:{
            confirmButton: styles.btnConfimSweet,
            denyButton: styles.btnCancelSweet
        }
        }).then((result) => {
        if (result.isDenied) {
            funcao()
        }
        });
};