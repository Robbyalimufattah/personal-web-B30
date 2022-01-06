// variabel penampung
let blogs = []

// didalam text form ada event (properti) untuk menghilangkan fungsi diform
function addBlog(event) {
    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value

    // .files menangkap data yg ada di file, .value hanya menangkap nama gambarnya
    let image = document.getElementById('input-blog-image').files
    
    // url.createdObjectURL untuk membungkus url image agar tidak dapat terbaca oleh orang lain dan dapat di akses
    image = URL.createObjectURL(image[0])

    let blog = {
        title: title,
        content: content,
        image: image,
        author: 'Robby',
        postAt: new Date()

    }

    // fungsi dari blog.push(blog) isi dari variabel blog di masukan ke variabel penampung blog
    blogs.push(blog)

    // menampungnya di object
    // console.log(blog);

    // menampungnya di array
    console.log(blogs);


    //looping
    // 
    // for (let i = 0; i < blogs.length; i++) {
    // console.log(blogs[i]);
    // }

    renderBlog()
}

// DOM manipulation
function renderBlog(){
    let contentContainer = document.getElementById('contents')
    
    // innerHTML fungsinya adalah untuk menentukan dan mengembalikan nilai konten dari suatu element
    // dalam bentuk text atau string berikut dengan tag html didalamnya nya
    contentContainer.innerHTML = firstBlogContent()
    
    // jadi variabel index = 0, dan nilai index kurang dari panjang dari suatu aray,maka index akan menambah 1
    // lain jika index = 3, dan nilai index kurang dari panjang dari suatu array, maka index tidak akan menambah 1
    // hingga nilai index lebih dari suatu array
    for (let i = 0; i < blogs.length; i++) {

      // tanda += fungsinya ketika ada index yg ditambah dia akan mencetak kebawah
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
  let distance = timeNow - timePost // milisecond
// convert menjadi hari ==> milisecond dalam 1 hari

  let milisecond = 1000 // dalam satu detik
  let secondInHours = 3600 // dalam 1 jam berapa detik
  let hoursInDay = 23 // dalam 1 hari ke jam 
  let second = 60 // detik
  let minutes = 60 // menit


  let distanceDay = Math.floor(distance / (milisecond *secondInHours *hoursInDay))
  let distanceHours = Math.floor(distance / (milisecond *second *minutes))
  let distanceMinutes = Math.floor(distance / (milisecond * second))
  let distanceSecond = Math.floor(distance / milisecond)
  
  distanceDay = Math.floor(distanceDay)
  // console.log(distanceDay + ' day ago');

// kondisi untuk menampilkan hari
// jika nilai hari lebih dari sama dengan 1 maka dia akan menampilkan 1 day ago
// jika nilai jam lebih dari sama dengan 1 makan dia akan menampilkan 1 hours ago
// jika nilai minute lebih dari sama dengan 1 maka dia akan menampilkan 1 minutes ago
// jika tidak dia akan menapilkan 1 second ago
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
// array function, dimana ketika di jalankan dia akan menjalankan fungsi render blog ketika di di proses
setInterval(() => {
  renderBlog()
}, 1000) // akan dirender setiap 1 detik sekali
