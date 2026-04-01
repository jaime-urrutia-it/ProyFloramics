  function verSubmenu(){
    document.getElementById('sub_flores').style.display='block';
  }
  function ocultarSubmenu(){
    document.getElementById('sub_flores').style.display='none';
  }
  function verImagen (nombre, imagen){
    carpeta='fotos/';
    codigo = '<html>\n<head>\n<title>'+nombre+'</title>\n'+
             '<link rel="stylesheet" href="../estilo.css" type="text/css" />\n'+
             '\n</head>\n<body>\n'+
    		 '<div style="text-align:center;"><h2>'+nombre+'</h2>'+
             '\n<img src="'+carpeta+imagen+'" alt="'+nombre+'" title="'+nombre+'" />\n'+
    		 '<p><a href="#" onclick="window.close();">[Cerrar]</a></p>'+
             '</div></body>\n</html>';
    ventana = window.open();
    ventana.document.write(codigo);
    ventana.document.close();
  }