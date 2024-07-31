export default function Image() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-5 gap-2 ">
        <div className="col-span-3 h-full">
          <img
            src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/ig-1.jpg"
            alt="Main"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4 h-full">
          <img
            src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/ig-2.jpg"
            alt="Right 1"
            className="w-full h-full object-cover"
          />
          <img
            src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/ig-7.jpg"
            alt="Right 2"
            className="w-full h-full object-cover"
          />
          <img
            src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/ig-9.jpg"
            alt="Right 3"
            className="w-full h-full object-cover"
          />
          <img
            src="https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/ig-3.jpg"
            alt="Right 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
