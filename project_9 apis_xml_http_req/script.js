const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest();
xhr.open('get',requestUrl)
xhr.onreadystatechange = function(){
    console.log(xhr.readyState)
    if(xhr.readyState === 4){
        console.log(this.responseText);
        // const data = String(this.responseText) // to parse in string
        // const data = Number(this.responseText)  // to parse in number
        const data = JSON.parse(this.responseText) // to parse in  JSON
        const dataFollower = data.followers
        console.log(typeof data)
        console.log(dataFollower);
        console.log(data.avatar_url);
        const card = document.querySelector('#card')
card.innerHTML=`
<img src='${data.avatar_url}'style='width:100px; border-radius:50%'></img>
<h1>Total followers count : ${parseInt(data.followers)}</h1>
`

    }
}
xhr.send()
