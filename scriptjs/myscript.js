function calcular(tipo, valor) {
  console.log(valor);
  if (tipo === "acao") {
    switch (valor) {
      case "c":
        document.getElementById("resultado").value = "";
        break;
      case "/":
        document.getElementById("resultado").value += valor;
        break;
      case "*":
        document.getElementById("resultado").value += valor;
        break;
      case "-":
        document.getElementById("resultado").value += valor;
        break;
      case "+":
        document.getElementById("resultado").value += valor;
        break;
      case ".":
        document.getElementById("resultado").value += valor;
        break;
      case "=":
        var valor_campo = eval(document.getElementById("resultado").value);
        document.getElementById("resultado").value = valor_campo;
    }
  } else if (tipo === "numero") {
    document.getElementById("resultado").value += valor;
  }
}
