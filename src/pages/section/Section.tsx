export default function Section() {
  const data = [
    {
      img: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-2.jpg",
      title: "Indoor",
    },
    {
      img: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-6.jpg",
      title: "Outdoor",
    },
    {
      img: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-1.jpg",
      title: "Garden",
    },
    {
      img: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-3.jpg",
      title: "Terrace",
    },
    {
      img: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-3.jpg",
      title: "Balcony",
    },
    {
      img: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/categories-3.jpg",
      title: "Patio",
    },
  ];

  return (
    <div className="mx-auto container">
      <h1
        className="text-center text-3xl my-20"
        style={{
          fontFamily: '"Libre Baskerville", serif',

          fontWeight: 400,
          color: "rgb(34, 66, 41)",
        }}
      >
        Catergories
      </h1>
      <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-4 mx-auto my-5">
        {data.map((plant, index) => (
          <div
            key={index}
            style={{
              fontFamily: '"Libre Baskerville", serif',

              fontWeight: 400,
              color: "rgb(34, 66, 41)",
              fontSize: "17px",
            }}
            className="flex  flex-col items-center"
          >
            <img
              src={plant.img}
              alt={plant.title}
              className="rounded-full w-36 h-48 object-cover"
            />
            <h3 className="mt-2 text-center">{plant.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
