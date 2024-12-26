// universal variable
const submitBtn = document.querySelector('.btn');
const nameView = document.querySelector('.userFullName');
const userEmail = document.querySelector('.userEmail');
const errorName = document.querySelector('.errorName');
const errorEmail = document.querySelector('.errorEmail');
const errorUpload = document.querySelector('.errorUpload');
const mainCon = document.querySelector('.container');
const congratCon = document.querySelector('.congratsCon');
const errorGit = document.querySelector('.errorGit');
const showName = document.querySelector('.name');
const nameInput = document.querySelector('#full-name');
const emailInput = document.querySelector('#email');
const githubInput = document.querySelector('#github');
const githubUsername = document.querySelector('#githubUsername');
const avatar = document.getElementById('avatar');
const imgUpload = document.getElementById('imgUpload')
const viewImage = document.getElementById('viewImage')
const removeBtn = document.getElementById('removeBtn')
const changeBtn = document.getElementById('changeBtn')
const maxSize = 500*1024
const errorIcon =  document.querySelector('.infoIcon')

submitBtn.addEventListener('click',  (e) => {
e.preventDefault()

if (imgUpload.src ) {
    viewImage.src = imgUpload.src
    if (!avatar.files.length >0) {
        errorUpload.innerHTML = 'Please add a picture of you' ;
        document.querySelector('.errorUpload').style.display= 'block'
             document.querySelector('#originalWarn').style.display= 'none'
         document.querySelector('.upload-box').style.border= '2px dashed #ff5a4d'
    }
    

}
if (nameInput.value.length > 0) {
    nameView.textContent = nameInput.value
    showName.textContent = nameInput.value
    

}else{
errorName.textContent = 'Please Fill Out This Field'
nameInput.value= ''
nameInput.style.border = '1px solid #ff5a4d'
document.querySelector('.errorName').style.display= 'block'
}
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if((emailInput.value.length >0)&&(emailRegex.test(emailInput.value.trim()))){
    userEmail.textContent = emailInput.value

}else{
    errorEmail.textContent = 'Please enter a valid email address'
    emailInput.value = ''
    emailInput.style.border = '1px solid #ff5a4d'
   document.querySelector('.errorEmail').style.display= 'block'
    }
if(githubInput.value.length >0){
        githubUsername.textContent = githubInput.value
    
    }else{
        errorGit.textContent ='Please enter a valid username'
        githubInput.value = ''
        githubInput.style.border = '1px solid #ff5a4d'
           document.querySelector('.errorGit').style.display= 'block'

        }
       if ((nameInput.value.length > 0) && (emailInput.value.length >0)&&(emailRegex.test(emailInput.value.trim())) && githubInput.value.length >0) {
        mainCon.style.display= 'none';
        congratCon.style.display = 'block'
       }
})


avatar.addEventListener('change', e => {
    const file = e.target.files[0];
    if (file) {
        if (file.size > maxSize) {
            viewImage.src= ''
            errorUpload.innerHTML= `
               
File too large. Please upload a photo under 500KB
            `
              document.querySelector('.errorUpload').style.display= 'block';
              document.querySelector('#originalWarn').style.display= 'none'
         document.querySelector('.upload-box').style.border= '2px dashed #ff5a4d'
        }else{
            document.querySelector('.errorUpload').style.display= 'none'
             document.querySelector('.remove-change-btns').style.display= 'flex';
             document.querySelector('.dragDrop').style.display= 'none';
            const reader = new FileReader();
            reader.onload= function(e){
              imgUpload.src = e.target.result;
    imgUpload.style.width= '50px';
    imgUpload.style.height= '50px';
            };
            reader.readAsDataURL(file)

        }
      
    }
})
// remove image

changeBtn.addEventListener('click', () => {
   avatar.click()

})
document.querySelector('.upload-box').addEventListener('click', function () {
    document.getElementById('avatar').click();
});

removeBtn.addEventListener('click', () => {
    // e.preventDefault()
    imgUpload.src= 'icon-upload.svg';
 
     
})