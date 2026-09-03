import Swal from 'sweetalert2';

export const exibirAlertaResultado = (titulo, mensagem, icone = 'success') => {
  Swal.fire({
    title: titulo,
    text: mensagem,
    icon: icone, // 'success', 'error', 'info', 'warning'
    confirmButtonText: 'Continuar',
    confirmButtonColor: '#3085d6',
  });
};


export const exibirAlertaVelha = () => {
    Swal.fire({
    title: 'Deu Velha',
    imageUrl: 'https://media.tenor.com/_fFhuqzbi1sAAAAj/cobbler.gif', // URL direta
    imageAlt: 'GIF de velha',
    confirmButtonText: 'Continuar'
    });
};