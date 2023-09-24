/** @format */

const leftBtn = document.querySelector('.l-btn');
const rightBtn = document.querySelector('.r-btn');

rightBtn.addEventListener('click', function (event) {
  const conent = document.querySelector('.product-slide');
  conent.scrollLeft += 1100;
  event.preventDefault();
});
leftBtn.addEventListener('click', function (event) {
  const conent = document.querySelector('.product-slide');
  conent.scrollLeft -= 1100;
  event.preventDefault();
});
const leftBtn1 = document.querySelector('.btn-1b');
const rightBtn1 = document.querySelector('.btn-1a');

rightBtn1.addEventListener('click', function (event) {
  const conent = document.querySelector('.product-slide-1');
  conent.scrollLeft += 1100;
  event.preventDefault();
});
leftBtn1.addEventListener('click', function (event) {
  const conent = document.querySelector('.product-slide-1');
  conent.scrollLeft -= 1100;
  event.preventDefault();
});
const leftBtn2 = document.querySelector('.btn-1c');
const rightBtn2 = document.querySelector('.btn-1d');

rightBtn2.addEventListener('click', function (event) {
  const conent = document.querySelector('.product-slide-2');
  conent.scrollLeft += 1100;
  event.preventDefault();
});
leftBtn2.addEventListener('click', function (event) {
  const conent = document.querySelector('.product-slide-2');
  conent.scrollLeft -= 1100;
  event.preventDefault();
});

const backtop = document.querySelector('.backtop');

backtop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const sidebar = document.querySelector('.sidebar');
const cross = document.querySelector('.fa-xmark');
const black = document.querySelector('.black');
const sidebtn = document.querySelector('.second-1');

sidebtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  cross.classList.add('active');
  black.classList.add('active');
  document.body.classList.add('stop-scroll');
});
cross.addEventListener('click', () => {
  sidebar.classList.remove('active');
  cross.classList.remove('active');
  black.classList.remove('active');
  document.body.classList.remove('stop-scroll');
});

const sign = document.querySelector('.ac');
const tri = document.querySelector('.triangle');
const signin = document.querySelector('.hdn-sign');

sign.addEventListener('click', () => {
  black.classList.toggle('active-1');
  signin.classList.toggle('active');
  tri.classList.toggle('active');
  document.body.classList.toggle('stop-scroll');
});

const cart = document.getElementById('cart');
cart.addEventListener('click', () => {
  window.open('https://www.amazon.com/gp/cart/view.html?ref_=nav_cart');
});
// fix 1
const todayDeal = document
  .getElementById('todayDeal')
  .addEventListener('click', () => {
    window.open('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb');
  });
// connect 2
const customerSer = document
  .getElementById('customerSer')
  .addEventListener('click', () => {
    window.open('https://www.amazon.com/gp/goldbox?ref_=nav_cs_gb');
  });

const sign_Btn = document
  .getElementById('sign-btn')
  .addEventListener('click', () => {
    window.open(
      'https://www.amazon.com/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2Fref%3Dgw_sgn_ib%3F_encoding%3DUTF8%26pd_rd_w%3DCpAeI%26content-id%3Damzn1.sym.f6fa1414-9a03-4a77-b33f-48ca75d19e5a%26pf_rd_p%3Df6fa1414-9a03-4a77-b33f-48ca75d19e5a%26pf_rd_r%3DGT4759A3D4PE25PZAGEK%26pd_rd_wg%3D7HG6G%26pd_rd_r%3Dea459a3c-c220-41ee-a3f5-8a69c83abdd4&openid.assoc_handle=usflex&openid.pape.max_auth_age=0&ref_=pd_gw_unk'
    );
  });

const amz_banner = document
  .getElementById('banner-amz')
  .addEventListener('click', () => [
    window.open(
      'https://www.amazon.com/b/?_encoding=UTF8&node=20338496011&content-id=amzn1.sym.2cc63b74-9d12-4ba6-ab08-4ca2272d5e82&ref_=pd_gw_unk'
    ),
  ]);

// fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))

setData = document.getElementById('setData');

// fetch()
//   .then((x) => x.text())
//   .then((y) => (document.getElementById('setData').innerHTML = y))
//   .catch((e) => console.log(e + 'server is down today'));

  async function logMovies() {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const movies = await response.json();
    console.log(movies.title);
    const data=movies.title;
    const data1=movies.price;
    console.log(data1)
document.getElementById('setData').innerHTML=data;
document.getElementById('setPrice').innerText=data1;
}
  logMovies();