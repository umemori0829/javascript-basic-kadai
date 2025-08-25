const addBtn = document.getElementById('btn');
const newText = document.getElementById('text');

addBtn.addEventListener('click',()=>{

  newText.textContent = 'ボタンをクリックしました';
  console.log(newText);
})