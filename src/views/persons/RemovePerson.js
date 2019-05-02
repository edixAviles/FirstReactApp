import Swal from 'sweetalert2'

const RemovePerson = (index, state) => {
    Swal.fire({
        title: 'Eliminar Registro',
        text: "¿Estás seguro que deseas eliminar este registro?",
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar',
        allowOutsideClick: false
    }).then((result) => {
        if (result.value) {
            const { info } = state

            this.setState({
                info: info.filter((character, i) => {
                    return i !== index
                }),
            })

            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}

export default RemovePerson