export default function ShopBanner() {
  return (
    <div className="mx-auto container ">
      <div style={{ backgroundColor: "rgb(245,244,242)" }} className=" ">
        <div className="flex items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1537039557108-4a42c334fd5e?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              sizes=""
              srcSet=""
              className="w-[400px] "
            />
          </div>

          <div className=" space-y-8 ">
            <h1
              style={{
                fontFamily: '"Libre Baskerville", serif',

                fontWeight: 400,
                color: "rgb(34, 66, 41)",
              }}
              className="text-5xl  text-center"
            >
              Shop
            </h1>
            <div className="flex">
              <div className="">
                <img
                  src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-11.jpg"
                  alt=""
                  className=" border-black w-5/6 rounded-full"
                />
              </div>
              <div>
                <img
                  src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-7.jpg"
                  alt=""
                  className="rounded-full  w-5/6"
                />
              </div>
              <div>
                <img
                  src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-8.jpg"
                  alt=""
                  className="rounded-full w-5/6"
                />
              </div>
              <div>
                <img
                  src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-10.jpg"
                  alt=""
                  className="rounded-full w-5/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
