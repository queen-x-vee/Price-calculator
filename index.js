function myFunction(){
    const ele = document.querySelectorAll('input:checked')
    let sum=0
    ele.forEach((e)=>{
      let val = parseFloat(e.parentElement.previousElementSibling.innerHTML)
      sum = sum + val
      console.log(sum)
      return sum
    })
   document.getElementById('total').innerHTML=sum 
  }
  