
let blogs = []

function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files
    
    image = URL.createObjectURL(image[0])

    let blog = {
        title: title,
        content: content,
        image: image,
        author: 'Robby',
        postAt: new Date()

    }

    blogs.push(blog)

    console.log(blogs);

    renderBlog()
}

// DOM manipulation
function renderBlog(){
    let contentContainer = document.getElementById('contents')
  
    contentContainer.innerHTML = firstBlogContent()
    
    for (let i = 0; i < blogs.length; i++) {
        contentContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
        <div class="blog-content">
          <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
          </div>
          <h1>
            <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
          </h1>
          <div class="detail-blog-content">
            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
          </div>
          <p>
            ${blogs[i].content}
          </p>
          <div style="text-align: right;">
              <span style="font-size: 13px; color: grey;">
                ${getDistanceTime(blogs[i].postAt)}
              </span>
          </div>
        </div>
      </div>` 
    }
}

function firstBlogContent() {
 return `<div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="" />
          </div>
          <div class="blog-content">
              <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
              </div>
              <h1>
                <a href="blog-detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a>
              </h1>
              <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
              </div>
              <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
              </p>
        </div>
    </div>`
}

let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
 'october', 'november', 'December']

function getFullTime(time) {

  let date = time.getDate() 
  let monthIndex = time.getMonth()
  let year = time.getFullYear()
  let hours = time.getHours()
  let minutes = time.getMinutes() 

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

  return fullTime
}

function getDistanceTime(time) {

  let timePost = time
  let timeNow = new Date()
  let distance = timeNow - timePost

  let milisecond = 1000
  let secondInHours = 3600
  let hoursInDay = 23 
  let second = 60
  let minutes = 60 


  let distanceDay = Math.floor(distance / (milisecond *secondInHours *hoursInDay))
  let distanceHours = Math.floor(distance / (milisecond *second *minutes))
  let distanceMinutes = Math.floor(distance / (milisecond * second))
  let distanceSecond = Math.floor(distance / milisecond)

  if(distanceDay >= 1){
    console.log(`${distanceDay} day ago`);
  } else if (distanceHours >= 1){
    return(`${distanceHours} hours ago`);
  } else if (distanceMinutes >= 1) {
    return(`${distanceMinutes} minutes ago`);
  } else {
    return(`${distanceSecond} second ago`);
  }
}

setInterval(() => {
  renderBlog()
}, 1000)
