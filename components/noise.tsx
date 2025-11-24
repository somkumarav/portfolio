export const Noise = () => {
  return (
    <div
      className='fixed inset-0 w-full h-full opacity-[0.03] pointer-events-none z-10 bg-blend-darken'
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "250px 250px",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    ></div>
  );
};
