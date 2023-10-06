document.getElementById('btn-bg').addEventListener('click',function(){
    const friends=document.getElementsByClassName('friend');
    for(const friend of friends){
            friend.style.background="coral";
    }
});

document.getElementById('third').addEventListener('click', function(){
   const third=document.getElementById('center-third');
   third.style.textAlign='center'
});


document.getElementById('add-friend').addEventListener('click', function(){
    const frindContainer=document.getElementById('friends');
    const friend=document.createElement('div');
    friend.classList.add('friend')
    friend.innerHTML=`

    <h3 class='friend-name'>New Friend</h3>
    <p>I am your new friend.</p>
    `

    frindContainer.appendChild(friend);
})