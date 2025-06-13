const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24   absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-2l w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black text-xl p-2.5 px-12  rounded-lg hover:opacity-60">
          ▶ Play
        </button>
        <button className=" mx-2 bg-gray-600 text-white text-xl p-2.5 px-12 opacity-45 rounded-lg  hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
