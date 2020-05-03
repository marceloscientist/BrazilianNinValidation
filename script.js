function display(message) {
  document.getElementById(message).style.display = 'block' 
  setTimeout(()=>{
    document.getElementById(message).style.display = 'none'
  }, 1500);

}

function validation(cpf) {
  if(cpf.length != 11) {
    return false;
  } else {
    let nums = cpf.substring(0,9)
    const checkers = cpf.substring(9)

    let amount = 0;
    for (let i = 10; i > 1; i--) {
      amount += nums.charAt(10 - i) * i
    }
    let result = amount % 11 < 2 ? 0 : 11 - (amount % 11)
    if(result != checkers.charAt(0)) {
      return false;
    }
    
    amount = 0;
    nums = cpf.substring(0, 10)
    for (let k = 10; k > 1; k--) {
      amount += nums.charAt(11 - k) * k
    }
    result = amount % 11 < 2 ? 0 : 11 - (amount % 11)
    if(result != checkers.charAt(1)) {
      return false;
    }
    return true;
  }
}

function checkCPF() {

  const cpf = document.getElementById('typed_cpf').value; 
  const isCPF = validation(cpf);

  if(isCPF) {
    display('success')
  }
  else {
    display('error')
  }
}
