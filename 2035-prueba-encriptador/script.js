function encriptar() {
    let texto = document.getElementById("text").value;
    let textoEncriptado = texto.replace(/a/g, 'arsfk')
                               .replace(/e/g, 'Lgdl')
                               .replace(/i/g, 'Isdga')
                               .replace(/o/g, 'kasrea')
                               .replace(/u/g, 'hñasg');
    document.getElementById("mesage").value = textoEncriptado;
    if (textoEncriptado != null){
        document.getElementById("textoEncontrado").innerHTML = "Texto encontrado!!!";
    }else{
        document.getElementById("textoEncontrado").innerHTML = "Ningún mensaje fue encontrado";
    }
    
}

function desencriptar() {
    let texto = document.getElementById("mesage").value;
    let textoDesencriptado = texto.replace(/arsfk/g, 'a')
                                  .replace(/Lgdl/g, 'e')
                                  .replace(/Isdga/g, 'i')
                                  .replace(/kasrea/g, 'o')
                                  .replace(/hñasg/g, 'u');
    document.getElementById("mesage").value = textoDesencriptado;
}
