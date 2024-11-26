// buat variabel untuk menampung data blog didalam array kosong
let blogs = []; //data array

// function : untuk membuat suatu fungsi untuk app kita
function addBlog(event) {
  // event.preventDefault() : untuk mencegah halaman ter-refresh saat fungsi ditrigger
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value; //data tunggal
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]); //untuk ngambil data gambar

  //   data objek
  const blog = {
    blogTitle: title,
    blogContent: content,
    blogImage: image,
    author: "namaSendiri",
  };

  //   push :method array untuk nambhain data baru ke dalam array
  blogs.push(blog);

  console.log(blogs);

  renderBlog();
}

// fungsi untuk merender konten blog ke bog list
function renderBlog() {
  // akses elemen dengan id contents
  let contentContainer = document.getElementById("contents");

  contentContainer.innerHTML = ""; // inject/menyisipkan elemen html

  //   looping tiap data di array(blogs) dan render datanya ke html
  for (let i = 0; i < blogs.length; i++) {
    contentContainer.innerHTML += `
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].blogImage}" alt="blog image" />
          </div>
          <div class="blog-content">
            <h1>${blogs[i].blogTitle}</h1>
            <span class="detail-blog-content">26 nov 2024 09:00 | Author</span>
            <p>
              ${blogs[i].blogContent}
            </p>
          </div>
        </div>
    `;
  }
}
